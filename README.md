# Compleximy-fast
Uma biblioteca de números complexos otimizada em number que eu criei há 35 dias atrás (na data de hoje 17/11/2026)
Todos os ramos escolhidos são o principal (k = 0)
O truncamento é para qualquer número menor que 2 * Number.EPSILON (~4.4e-16) em valor absoluto
## Instalação:
### npm i compleximy-fast


### Operadores

| Operação | Classe |
|---|---|
| z + w | z.add(w) |
| z - w | z.sub(w) |
| z * w | z.mul(w) |
| z / w | z.div(w) |
| z^w | z.pow(w) |
| z^2 | z.pow2() |
| z^3 | z.pow3() |
| sqrt(z) | z.sqrt() |
| cbrt(z) | z.cbrt() |
| -z | z.neg() |
| abs(z)^2 | z.r2() |
| abs(z) | z.r() |
| arg(z) | z.theta() |
| 1/z | z.inv() |
| conj(z) | z.conj() |
| exp(z) | z.exp() |
| ln(z) | z.ln() |
| log_n(z) | z.logn(n) |
| log10(z) | z.log() |
| z^(1/n) | z.nrt(n) |
| zi | z.i() |
| z(-i) | z.in() |
| sin(z) | z.sin() |
| cos(z) | z.cos() |
| tan(z) | z.tan() |
| sec(z) | z.sec() |
| csc(z) | z.csc() |
| cot(z) | z.cot() |
| asin(z) | z.asin() |
| acos(z) | z.acos() |
| atan(z) | z.atan() |
| asec(z) | z.asec() |
| acsc(z) | z.acsc() |
| acot(z) | z.acot() |
| sinh(z) | z.sinh() |
| cosh(z) | z.cosh() |
| tanh(z) | z.tanh() |
| sech(z) | z.sech() |
| csch(z) | z.csch() |
| coth(z) | z.coth() |
| asinh(z) | z.asinh() |
| acosh(z) | z.acosh() |
| atanh(z) | z.atanh() |
| asech(z) | z.asech() |
| acsch(z) | z.acsch() |
| acoth(z) | z.acoth() |
| z = 0 | z.isZero() |
| z é real | z.isReal() |
| z é imaginário puro | z.isImag() |
| z é finito | z.isFinite() |
| z é NaN | z.isNaN() |
| z / abs(z) | z.norm() |
| distance(z, w) | z.distance(w) |
| z(exp(itheta)) | z.rotation(theta) |
| z === w | z.eq(w) |
| z !== w | z.noeq(w) |
| (a, b) -> a+bi | Co(a, b) |
| (r, phi) -> r * e ** (iphi) | Co.Polar(r, phi) |
| Co -> string | z.toString(tipo) |
| Co -> Array | z.toArray() |
| Co -> Objeto| z.toObject(tipo)  |
| Co -> JSON| z.toJSON(tipo) |

### Constantes:
| Nome | Representação matemática |
|---|---|
| PI | π |
| E | número de Euler |
| TAU | τ ou 2π |
| SQRT2 | sqrt(2) |
| SQRT3 | sqrt(3) |
| SQRT5 | sqrt(5) |
| LN10 | ln(10) |
| LN2 | ln(2) |
| LOG10E | log10(E) |
| PHI | φ ou (1+sqrt(5))/2 |
| PI_2 | π/2 |
| PI_3 | π/3 |
| PI_4 | π/4 |
| I | sqrt(-1) |
| MINUS_I | -sqrt(-1) |
| ONE | 1 |
| MINUS_ONE | -1 |
| ZERO | 0 |

## Co.parser
Aceita:
|---|
  |Número: (-1, 3, -7812, 1.94, "34", "8230134", "-98143", ...)|
  |Imaginário puro: (i, -i, 83i, -3.8324i, ...)|
  |Objeto: ({abs, arg}, {real, imag}, {r, phi}, ...)|
  |Array: ([3, 3], [-1, 0], ["-1", "-1"], ...)|
  |Complexo completo: (1+i, 1-i, 432187+49i, 0.972134+1.1238974i, ...)|
  
#### Exemplos
| Entrada | Saída |
|---|---|
|"1+i" | Co(1, 1) |
|"113+14i" | Co(113, 14) |
|1 | Co(1, 0) |
|[1, 1] | Co(1, 1) |
|[1, 2] | Co(1, 2) |
|{real: 1, imag: 2} | Co(1, 2) |
| (1, 3) | Co(1, 3) |
|"3i" | Co(0, 3) |
| 1e-1+1e-1i | Co(1e-1, 1e-1) |
| "1+2I" | Co(1, 2) |
| "1r3" | Co.Polar(1, 3) |
| "1∠3" | Co.Polar(1, 3) |
| "PI+Ei" | Co(PI, E) |
| "PIrE" | Co.Polar(PI, E) |
| Outro Co | Cópia dele |

#### Exemplos de falha
| Entrada |
|---|
|("1+i", 1) |
|"113i+14" |
|(1, "i") |
|() | 
|[1, 1, 1] | 
|{a: 1, b: 2} |
| null | 
| undefined |
| [] | 


## Métodos toAlgo

### toString(tipo = "Cartesian")

| Entrada | Saída | tipo |
|---|---|---|
| Co(1, 1) | "1 + i" | "Cartesian" |
| Co(1, 1) | "1.414213... * e ** (0.78539...i)" | Euler |
| Co(1, 1) | "1.414213... ∠ 0.78539..." | PolarSy |
| Co(1, 1) | "1.414213... r 0.78539..." | PolarChar |

> "Euler" é apenas para exibição — **não** é parseável por Co.parser, somente Cartesian, PolarSy e PolarChar

### toArray()

| Entrada | Saída | Descrição |
|---|---|---|
| Co(Math.sqrt(2), 1) | [ 1.414213..., 1 ] | Retorna [real, imag] |

### toObject(tipo = "Cartesian")

| Entrada | Saída | tipo |
|---|---|---|
| Co(Math.sqrt(2), 1) | { real: 1.414213..., imag: 1 } | "Cartesian" |
| Co(Math.sqrt(2), 1) | { re: 1.414213..., im: 1 } | "CartesianSmall" |
| Co(Math.sqrt(2), 1) | { r: 1.732050..., phi: 0.615479... } | "PolarR" |
| Co(Math.sqrt(2), 1) | { abs: 1.732050..., arg: 0.615479... } | "PolarABS" |

### toJSON(tipo = "Cartesian")

| Entrada | Saída | tipo |
|---|---|---|
| Co(Math.sqrt(2), 1) | { real: "1.414213...", imag: "1" } | "Cartesian" |
| Co(Math.sqrt(2), 1) | { re: "1.414213...", im: "1" } | "CartesianSmall" |
| Co(Math.sqrt(2), 1) | { r: "1.732050...", phi: "0.615479..." } | "PolarR" |
| Co(Math.sqrt(2), 1) | { abs: "1.732050...", arg: "0.615479..." } | "PolarABS" |

### Notas

- Os tipos de toObject, toString, toArray e toJSON são os mesmos que Co.parser aceita na entrada
- Então:
-  Co.parser(z.toObject("Cartesian")) // => z
-  Co.parser(z.toObject("PolarR"))    // => z
-  Co.parser(JSON.parse(JSON.stringify(z)))  // => z
-  Co.parser(z.toArray())    // => z
-  Co.parser(z.toString())  // => z

## Benchmarks

| Operation | Compleximy-fast (`Co`) | complex.js (`Complex`) |
|:----------|-----------------------:|-----------------------:|
| add  | 17.95 ns/op | 26.91 ns/op |
| mul  | 29.24 ns/op | 28.41 ns/op |
| div  | 28.10 ns/op | 32.81 ns/op |
| sqrt | 33.65 ns/op | 36.64 ns/op |
| cbrt | 58.36 ns/op | 81.52 ns/op |
| ln   | 45.94 ns/op | 45.31 ns/op |
| log  | 47.16 ns/op | 71.98 ns/op |
| pow2 | 16.25 ns/op | 82.72 ns/op |
| pow3 | 17.08 ns/op | 89.03 ns/op |
| sin  | 59.04 ns/op | 71.72 ns/op |
| cos  | 63.73 ns/op | 73.88 ns/op |
| tan  | 62.40 ns/op | 71.28 ns/op |
| sinh | 60.40 ns/op | 73.91 ns/op |
| cosh | 66.98 ns/op | 70.98 ns/op |
| tanh | 58.20 ns/op | 74.37 ns/op |
| asin | 65.24 ns/op | 100.07 ns/op |
| acos | 65.74 ns/op | 102.96 ns/op |
| atan | 58.29 ns/op | 63.07 ns/op |

Obs:
Os benchmarks foram feitos nas mesmas condições, e eles representam as médias de cada operação, os números podem variar com o ambiente de execução
Algumas também não tem método dedicado no complex.js (como por exemplo pow2, pow3, cbrt e log (que é log10)), foi utilizado uma representação matematicamente equivalente (como pow2 e pow(2))
Essas operações são dedicadas nessa biblioteca
