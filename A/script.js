

//cria o titulo
const titulo = document.createElement('h1');
titulo.textContent = 'Lista de Compras';
document.body.appendChild(titulo);

const inputItem = document.createElement('input');
inputItem.type = 'text';
inputItem.placeholder = ' Digite um item';
document.body.appendChild(inputItem);

const btnAdd = document.createElement('button');
btnAdd.textContent = 'Adicionar';
document.body.appendChild(btnAdd);

const lista = document.createElement('ul');
document.body.appendChild(lista);


function adicionarItem() {
    const valor =  inputItem.value.trim();
    if (valor !== '') {
        const li = document.createElement('li');
        li.textContent= valor;
        lista.appendChild(li);
        inputItem.value = '';
        inputItem.focus(); // volta o foco para o campo
    }
};

btnAdd.addEventListener('click', adicionarItem);

inputItem.addEventListener('keydown', (event) =>{
    if (event.key === 'Enter'){
        adicionarItem();
    }
});


document.body.style.backgroundColor = '#4287f5';
document.body.style.color = 'white';
document.body.style.textAlign = 'center';
document.body.style.alignItems = 'center';


