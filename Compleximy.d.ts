type parserInput = 
    | Co
    | number
    | string
    | [number, number]
    | { real: number; imag: number }
    | { re: number; im: number }
    | { abs: number; arg: number }
    | { r: number; phi: number }
    | null
    | undefined

type CoInput =
    | Co
    | number


export declare class Co {
    real: number
    imag: number

    constructor(a: CoInput, b?: number)

    add(z: parserInput): Co
    sub(z: parserInput): Co
    mul(z: parserInput): Co
    div(z: parserInput): Co
    inv(): Co
    neg(): Co

    sqrt(): Co
    cbrt(): Co
    pow(z: parserInput): Co
    pow2(): Co
    pow3(): Co
    hypot(z: parserInput): Co
    nrt(z: parserInput): Co

    sin(): Co
    cos(): Co
    tan(): Co

    asin(): Co
    acos(): Co
    atan(): Co

    csc(): Co
    sec(): Co
    cot(): Co

    acsc(): Co
    asec(): Co
    acot(): Co

    sinh(): Co
    cosh(): Co
    tanh(): Co

    asinh(): Co
    acosh(): Co
    atanh(): Co

    csch(): Co
    sech(): Co
    coth(): Co

    acsch(): Co
    asech(): Co
    acoth(): Co

    exp(): Co
    ln(): Co
    logn(z: parserInput): Co
    log(): Co

    r(): Co
    r2(): Co
    theta(): Co

    i(): Co
    in(): Co

    isReal(): boolean
    isImag(): boolean
    isFinite(): boolean
    isNaN(): boolean
    eq(z: parserInput): boolean
    noeq(z: parserInput): boolean

    norm(): Co
    rot(z: parserInput): Co
    distance(z: parserInput): Co

    toString(): string
    toArray(): [number, number]
    toObject(): { real: number; imag: number }
    toObject(type: "Cartesian"): { real: number; imag: number }
    toObject(type: "CartesianSmall"): { re: number; im: number }
    toObject(type: "PolarABS"): { abs: number; arg: number }
    toObject(type: "PolarR"): { r: number; phi: number }

    /** @internal */
    toObjectInternal(): { real: number; imag: number }

    toJSON(): { real: string; imag: string }
    toJSON(type: "Cartesian"): { real: string; imag: string }
    toJSON(type: "CartesianSmall"): { re: string; im: string }
    toJSON(type: "PolarABS"): { abs: string; arg: string }
    toJSON(type: "PolarR"): { r: string; phi: string }

    print(): void

    static readonly PI: Co
    static readonly E: Co
    static readonly TAU: Co
    static readonly SQRT2: Co
    static readonly SQRT3: Co
    static readonly SQRT5: Co
    static readonly LN10: Co
    static readonly LN2: Co
    static readonly LOG10E: Co
    static readonly PHI: Co
    static readonly PI_2: Co
    static readonly PI_3: Co
    static readonly PI_4: Co
    static readonly I: Co
    static readonly MINUS_I: Co
    static readonly ONE: Co
    static readonly MINUS_ONE: Co
    static readonly ZERO: Co

    static parser(value: parserInput): Co
    static Polar(value: CoInput): Co

}
