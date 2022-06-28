const result = document.querySelector('.resultado');

class CriarPessoa {
    constructor() { 
        this.pessoas = []
    }

    addPessoa(nome, idade) {
        const pessoa = {
            nome: nome,
            idade: idade
        }
        
        this.pessoas.push(pessoa);

    }
}

const lp = new CriarPessoa();// Lista pessoas
lp.addPessoa('Wanderson', 20)
lp.addPessoa('Ana', 4)
lp.addPessoa('João', 21)
lp.addPessoa('Julia', 60)
lp.addPessoa('Carla', 70)
lp.addPessoa('Clara', 34)
lp.addPessoa('Pedro', 25)

const table = document.querySelector('.table');
for (let pessoa of lp.pessoas) {
    const tr = document.createElement('tr')

    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    table.appendChild(tr);
}

result.appendChild(table);