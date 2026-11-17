const test = require("node:test")
const assert = require("node:assert/strict")
const { Co } = require("./Compleximy-fast")
const {Complex} = require("complex.js")
const C = require("Compleximy")

function near(actual, expected, eps = 1e-10) {
    assert.ok(
        Math.abs(actual - expected) <= eps,
        `Esperado ${expected}, recebido ${actual}`
    )
}

function complexNear(actual, real, imag, eps = 1e-10) {
    near(actual.real, real, eps)
    near(actual.imag, imag, eps)
}

test("Construção", () => {
    complexNear(new Co(3, 4), 3, 4)
    complexNear(new Co(new Co(3, 4)), 3, 4)
    complexNear(new Co(5), 5, 0)
})

test("Aritmética básica", () => {
    const a = new Co(3, 2)
    const b = new Co(1, 4)

    complexNear(a.add(b), 4, 6)
    complexNear(a.sub(b), 2, -2)
    complexNear(a.mul(b), -5, 14)
    complexNear(a.div(b), 11/17, -10/17)
})

test("Identidades algébricas", () => {
    const a = new Co(3, 4)

    complexNear(a.add(a.neg()), 0, 0)
    complexNear(a.mul(a.inv()), 1, 0)
    complexNear(a.pow(2), -7, 24)
    complexNear(a.pow2(), -7, 24)
})

test("Rotação por i", () => {
    const a = new Co(3, 4)

    complexNear(a.i(), -4, 3)
    complexNear(a.in(), 4, -3)
})

test("Norma", () => {
    const a = new Co(3, 4)

    near(a.r().real, 5)
    complexNear(a.norm(), 0.6, 0.8)
})

test("Parser", () => {
    complexNear(Co.parser(3, 4), 3, 4)
    complexNear(Co.parser("3+4i"), 3, 4)
    complexNear(Co.parser("4i"), 0, 4)
    complexNear(Co.parser("-i"), 0, -1)
    complexNear(Co.parser("1+i"), 1, 1)
    complexNear(Co.parser("1e-1+1e-1i"), 0.1, 0.1)
    complexNear(Co.parser("1r1"), 0.5403023058681398, 0.8414709848078965)
    complexNear(Co.parser([1, 1]), 1, 1)
    complexNear(Co.parser({real: 1, imag: 1}), 1, 1)
    complexNear(Co.parser({re: 1, im: 1}), 1, 1)
    complexNear(Co.parser({abs: 1, arg: 1}), 0.5403023058681398, 0.8414709848078965)
    complexNear(Co.parser({r: 1, phi: 1}), 0.5403023058681398, 0.8414709848078965)
})

test("Exponencial e logaritmo", () => {
    const a = new Co(2, 3)

    complexNear(a.ln().exp(), 2, 3)
})

test("Trigonometria", () => {
    const a = new Co(0.4, 0.7)

    complexNear(a.sin().asin(), 0.4, 0.7)
    complexNear(a.cos().acos(), 0.4, 0.7)
})

test("sin2+cos2=1", () => {
    for(let a = 0; a < 1; a += 0.01) {
        let a1 = new Co(a, a) 
        complexNear(a1.sin().pow2().add(a1.cos().pow2()), 1, 0)
    }
})

test("exp(ln(z)) = z", () => {
    for(let a = 1; a < 2; a += 0.01) {
        let a1 = new Co(a, a) 
        complexNear(a1.ln().exp(), a1.real, a1.imag)
    }
})

test("e ** (i * PI) + 1 = 0", () => {
        complexNear(Co.PI.i().exp().add(1), 0, 0)
})

test("sin(i * z) = i * sinh(z)", () => {
    for(let a = 1; a < 2; a += 0.01) {
        complexNear(new Co(a, a).i().sin(), new Co(a, a).sinh().i().real, new Co(a, a).sinh().i().imag)
    }
})
test("cos(i * z) = cosh(z)", () => {
    for(let a = 1; a < 2; a += 0.01) {
        complexNear(new Co(a, a).i().cos(), new Co(a, a).cosh().real, new Co(a, a).cosh().imag)
    }
})
test("pow2 = pow(2)", () => {
    for(let a = 1; a < 2; a += 0.01) {
        complexNear(new Co(a, a).pow2(), new Co(a, a).pow(2).real, new Co(a, a).pow(2).imag)
    }
})
test("pow3 = pow(3)", () => {
    for(let a = 1; a < 2; a += 0.01) {
        complexNear(new Co(a, a).pow3(), new Co(a, a).pow(3).real, new Co(a, a).pow(3).imag)
    }
})
test("log = logn(10)", () => {
    for(let a = 1; a < 2; a += 0.01) {
        complexNear(new Co(a, a).log(), new Co(a, a).logn(10).real, new Co(a, a).logn(10).imag)
    }
})

test("sqrt = nrt(2)", () => {
    for(let a = 1; a < 2; a += 0.01) {
        complexNear(new Co(a, a).sqrt(), new Co(a ,a).nrt(2).real, new Co(a ,a).nrt(2).imag)
    }
})

function compare(a, b, eps = 1e-10) {
    near(a.real, b.real, eps)
    near(a.imag, b.imag, eps)
}

test("Compatibilidade com complex.js 1", () => {
    for(let x = -2; x <= 2; x += 0.1) {
        for(let y = -2; y <= 2; y += 0.1) {
            let z = new Co(x, y)
            let z1 = new Complex(z.toArray())
            let z2 = Co.parser(z1.toVector())

            compare(z, z2)
        }
    }
})

test("Compatibilidade com complex.js 2", () => {
    for(let x = -2; x <= 2; x += 0.1) {
        for(let y = -2; y <= 2; y += 0.1) {
            let z = new Complex(x, y)
            let z1 = Co.parser(z.toString())

            compare(z1, new Co(x, y))
        }
    }
})

test("Compatibilidade com Compleximy 1", () => {
    for(let x = -2; x <= 2; x += 0.1) {
        for(let y = -2; y <= 2; y += 0.1) {
            let z = new Co(x, y)
            let z1 = C.Co.parser(z.toArray())
            let z2 = Co.parser(z1.toArrayNumber())

            compare(z, z2)
        }
    }
})

test("Compatibilidade com Compleximy 2", () => {
    for(let x = -2; x <= 2; x += 0.1) {
        for(let y = -2; y <= 2; y += 0.1) {
            let z = new C.Co(x, y)
            let z1 = Co.parser(z.toString())

            compare(z1, new Co(x, y))
        }
    }
})

test("sinh", () => {
    for(let a = 1; a < 2; a += 0.01) {
        complexNear(new Co(a, a).sinh(), new Complex(a, a).sinh().re, new Complex(a, a).sinh().im)
    }
})

test("cosh", () => {
    for(let a = 1; a < 2; a += 0.01) {
        complexNear(new Co(a, a).cosh(), new Complex(a, a).cosh().re, new Complex(a, a).cosh().im)
    }
})

test("tanh", () => {
    for(let a = 1; a < 2; a += 0.01) {
        complexNear(new Co(a, a).tanh(), new Complex(a, a).tanh().re, new Complex(a, a).tanh().im)
    }
})
