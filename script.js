const perguntas = [
    {
        enunciado: "Você acredita que a eutanásia deveria ser legalizada?",
        alternativas: [
            { texto: "Isso é assustador!", pontuacao: 1 },
            { texto: "Isso é maravilhoso!", pontuacao: 2 }
        ]
    },
    {
        enunciado: "O serviço militar obrigatório deveria ser instituído para todos os cidadãos?",
        alternativas: [
            { texto: "Sim, todos deveriam servir.", pontuacao: 2 },
            { texto: "Não, deveria ser voluntário.", pontuacao: 1 }
        ]
    },
    {
        enunciado: "A privacidade online deve ser priorizada mesmo que comprometa a segurança nacional?",
        alternativas: [
            { texto: "Sim, a privacidade deve ser priorizada.", pontuacao: 2 },
            { texto: "Não, a segurança nacional é mais importante..", pontuacao: 1 }
        ]
    },
    {
        enunciado: "Você acha que o uso de animais em pesquisas científicas deve ser permitido?",
        alternativas: [
            { texto: "Sim, deve ser permetida.", pontuacao: 1 },
            { texto: "Não, deve ser proibida.", pontuacao: 2 }
        ]
    },
    {
        enunciado: "O voto deveria ser obrigatório para todos os cidadãos elegíveis?",
        alternativas: [
            { texto: "Sim, deve ser reconhecido.", pontuacao: 1 },
            { texto: "Não, não deve ser reconhecido.", pontuacao: 2 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta
