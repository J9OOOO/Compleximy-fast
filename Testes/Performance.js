const { performance } = require("node:perf_hooks")

const lixo = []

const Benchmark = {
    results: [],

    bench(nome, fn, {
        N = 1e6,
        aquec = 1e5,
        samples = 10
    } = {}) {
        // Aquecimento do JIT
        for (let i = 0; i < aquec; i++) {
            lixo.push(fn(i))
            if (lixo.length > 1000) lixo.length = 0
        }

        const tempos = []

        for (let s = 0; s < samples; s++) {
            const t0 = performance.now()

            for (let i = 0; i < N; i++) {
                lixo.push(fn(i))
                
                if (lixo.length > 1000) lixo.length = 0
            }

            const t1 = performance.now()
            tempos.push((t1 - t0) * 1e6 / N)
        }

        // Estatísticas
        const ordenados = [...tempos].sort((a, b) => a - b)

        const media = tempos.reduce((a, b) => a + b, 0) / samples
        const mediana = samples % 2
            ? ordenados[(samples - 1) / 2]
            : (ordenados[samples / 2 - 1] + ordenados[samples / 2]) / 2

        const minimo = ordenados[0]
        const maximo = ordenados[samples - 1]

        const variancia = tempos.reduce(
            (s, x) => s + (x - media) ** 2,
            0
        ) / samples

        const desvio = Math.sqrt(variancia)

        const resultado = {
            nome,
            N,
            samples,
            media,
            mediana,
            minimo,
            maximo,
            desvio,
            tempos
        }

        this.results.push(resultado)

        console.log(
            `${nome.padEnd(24)} ` +
            `${mediana.toFixed(2)} ns/op ` +
            `(±${desvio.toFixed(2)}, min ${minimo.toFixed(2)}, max ${maximo.toFixed(2)})`
        )

        return resultado
    },

    compare(a, b) {
        const razao = a.mediana / b.mediana

        console.log(
            `${a.nome} / ${b.nome}: ${razao.toFixed(2)}x`
        )

        return razao
    },

    clear() {
        this.results = []
    },

    report() {
        console.table(
            this.results.map(r => ({
                Nome: r.nome,
                "Mediana (ns)": r.mediana.toFixed(2),
                "Média (ns)": r.media.toFixed(2),
                "Mínimo (ns)": r.minimo.toFixed(2),
                "Máximo (ns)": r.maximo.toFixed(2),
                "Desvio (ns)": r.desvio.toFixed(2),
                Amostras: r.samples
            }))
        )
    }
}

module.exports = Benchmark
