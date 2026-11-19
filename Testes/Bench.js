const Benchmark = require("./Performance")
const { Co } = require("./../Compleximy-fast")
const {Complex} = require("complex.js")
const gh = require("decimal.js")

const RANGE = 30

Benchmark.bench("Co.add", i => {
    new Co(i, i).add(2, 3)
})

Benchmark.bench("Co.mul", i => {
    new Co(i, i).mul(2, 3)
})

Benchmark.bench("Co.div", i => {
    new Co(i, i).div(2, 3)
})

Benchmark.bench("Co.sqrt", i => {
    new Co(i, i).sqrt()
})

Benchmark.bench("Co.cbrt", i => {
    new Co(i, i).cbrt()
})

Benchmark.bench("Co.ln", i => {
    new Co(i + 1, i).ln()
})

Benchmark.bench("Co.log", i => {
    new Co(i + 1, i).log()
})

Benchmark.bench("Co.pow2", i => {
    new Co(i, i).pow2()
})

Benchmark.bench("Co.pow3", i => {
    new Co(i, i).pow3()
})

Benchmark.bench("Co.sin", i => {
    new Co(i % RANGE, i % RANGE).sin()
})

Benchmark.bench("Co.cos", i => {
    new Co(i % RANGE, i % RANGE).cos()
})

Benchmark.bench("Co.tan", i => {
    new Co(i % RANGE, i % RANGE).tan()
})

Benchmark.bench("Co.sinh", i => {
    new Co(i % RANGE, i % RANGE).sinh()
})

Benchmark.bench("Co.cosh", i => {
    new Co(i % RANGE, i % RANGE).cosh()
})

Benchmark.bench("Co.tanh", i => {
    new Co(i % RANGE, i % RANGE).tanh()
})

Benchmark.bench("Co.asin", i => {
    new Co(i % RANGE, i % RANGE).asin()
})

Benchmark.bench("Co.acos", i => {
    new Co(i % RANGE, i % RANGE).acos()
})

Benchmark.bench("Co.atan", i => {
    new Co(i % RANGE, i % RANGE).atan()
})

console.log("")

Benchmark.bench("Complex.add", i => {
    new Complex(i, i).add(2, 3)
})

Benchmark.bench("Complex.mul", i => {
    new Complex(i, i).mul(2, 3)
})

Benchmark.bench("Complex.div", i => {
    new Complex(i, i).div(2, 3)
})

Benchmark.bench("Complex.sqrt", i => {
    new Complex(i, i).sqrt()
})

Benchmark.bench("Complex.cbrt", i => {
    new Complex(i, i).pow(1/3)
})

Benchmark.bench("Complex.ln", i => {
    new Complex(i + 1, i).log()
})

Benchmark.bench("Complex.log", i => {
    new Complex(i + 1, i).log().div(new Complex(Math.LN10))
})

Benchmark.bench("Complex.pow2", i => {
    new Complex(i, i).pow(2)
})

Benchmark.bench("Complex.pow3", i => {
    new Complex(i, i).pow(3)
})

Benchmark.bench("Complex.sin", i => {
    new Complex(i % RANGE, i % RANGE).sin()
})

Benchmark.bench("Complex.cos", i => {
    new Complex(i % RANGE, i % RANGE).cos()
})

Benchmark.bench("Complex.tan", i => {
    new Complex(i % RANGE, i % RANGE).tan()
})

Benchmark.bench("Complex.sinh", i => {
    new Complex(i % RANGE, i % RANGE).sinh()
})

Benchmark.bench("Complex.cosh", i => {
    new Complex(i % RANGE, i % RANGE).cosh()
})

Benchmark.bench("Complex.tanh", i => {
    new Complex(i % RANGE, i % RANGE).tanh()
})

Benchmark.bench("Complex.asin", i => {
    new Complex(i % RANGE, i % RANGE).asin()
})

Benchmark.bench("Complex.acos", i => {
    new Complex(i % RANGE, i % RANGE).acos()
})

Benchmark.bench("Complex.atan", i => {
    new Complex(i % RANGE, i % RANGE).atan()
})
