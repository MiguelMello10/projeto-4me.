class Aluno {
    constructor(nome, possuiPCD) {
        this.nome = nome;
        this.possuiPCD = possuiPCD;
    }
}

const listaAlunos = [];

const form = document.getElementById('form-aluno');
const inputNome = document.getElementById('nome');
const inputPCD = document.getElementById('pcd');

const elTotalAlunos = document.getElementById('total-alunos');
const elTotalPCD = document.getElementById('total-pcd');
const elPercentualPCD = document.getElementById('percentual-pcd');
const tabela = document.getElementById('tabela-alunos');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const novoAluno = new Aluno(inputNome.value, inputPCD.checked);
    listaAlunos.push(novoAluno);

    inputNome.value = '';
    inputPCD.checked = false;

    atualizarInterface();
});

function atualizarInterface() {
    const totalAlunos = listaAlunos.length;
    let totalPCD = 0;

    for (let i = 0; i < totalAlunos; i++) {
        if (listaAlunos[i].possuiPCD) {
            totalPCD++;
        }
    }

    const percentual = totalAlunos > 0 
        ? ((totalPCD / totalAlunos) * 100).toFixed(2) + '%' 
        : '0.00%';

    elTotalAlunos.textContent = totalAlunos;
    elTotalPCD.textContent = totalPCD;
    elPercentualPCD.textContent = percentual;

    tabela.innerHTML = '';
    listaAlunos.forEach(aluno => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.possuiPCD ? 'Sim' : 'Não'}</td>
        `;
        tabela.appendChild(linha);
    });
}