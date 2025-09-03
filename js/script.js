const div_pergunta = document.querySelector("#pergunta")
const div_opcoes = document.querySelector("#opcoes")
const div_feedback = document.querySelector("#feedback")
const nextButton = document.querySelector("#nxtBtn")

const perguntas = [
    {
        pergunta: "Qual a capital da França?",
        opcoes: ["Paris", "Roma", "Berlim", "Madrid"],
        resposta: 0
    },
    {
        pergunta: "Qual tag HTML cria um parágrafo?",
        opcoes: ["<div>", "<span>", "<h6>", "<p>"],
        resposta: 3
    },
    {
        pergunta: "Quem descobriu a America?",
        opcoes: ["Pica pau.", "Pedro Alvares Cabral.", "Cristóvão Colombo.", "O vizinho."],
        resposta: 2
    },
    {
        pergunta: "Qual a capital do Brasil?",
        opcoes: ["Piaui", "Rio de Janeiro.", "São Paulo.", "Brasilia."],
        resposta: 3
    },
    {
        pergunta: "Qual foi a principal causa da Guerra Fria?",
        opcoes: ["Causada por rivalidade entre potencias.", "Porque quiseram.", "Porque falou da mãe.", "Casacos."],
        resposta: 0
    }
]

let indicePerguntas = 0
let pontos = 0

function mostrarPergunta() {
    // Padrões para mostrar pergunta
    div_feedback.innerHTML = ""
    nextButton.classList.add("d-none")

    // Colocar Pergunta no HTML
    let p = perguntas[indicePerguntas]
    div_pergunta.textContent = p.pergunta

    // Opcoes
    div_opcoes.innerHTML = ""
    p.opcoes.forEach((opcao, i) => {
        const btn = document.createElement("button")
        btn.className = "btn btn-outline-primary"
        btn.textContent = opcao
        btn.addEventListener('click', () => verificarResposta(i))
        div_opcoes.appendChild(btn)
    })
}

function verificarResposta(indiceEscolhido) {
    let p = perguntas[indicePerguntas]

    const botoes = div_opcoes.querySelectorAll('button');
    botoes.forEach(btn => {
        btn.disabled = true;
    });

    if (indiceEscolhido === p.resposta) {
        div_feedback.innerHTML = `<div class="alert alert-success">Correto!</div>`
        pontos++
    } else {
        div_feedback.innerHTML = `<div class="alert alert-danger">Errado!</div>`
    }
    nextButton.classList.remove("d-none")

    addIndex()
}

nextButton.addEventListener("click", function addIndex() {

    if(indicePerguntas === (perguntas.length - 1)) {
        if(pontos >= 3) {
            alert(`Voce pontuou ${pontos} vezes. PARABENS! `)
        } else {
            alert(`Voce pontuou ${pontos} vezes. RUIM!`)
        }
        indicePerguntas = -1
        pontos = 0
    }

    indicePerguntas++
    mostrarPergunta()
})

mostrarPergunta()