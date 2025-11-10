const container = document.createElement('div');
container.id = 'lista-container';
document.body.appendChild(container);

// estilo da div
container.style.backgroundColor = '';
container.style.border = '2px solid #f5feff';
container.style.borderRadius ='10px';
container.style.padding = '20px';
container.style.maxWidth ='500px';
container.style.margin = '20px auto';
container.style.boxShadow = '0 4px 8px #91bdbdd';

// input de item
const inputItem = document.createElement('input');
inputItem.type = 'text';
inputItem.placeholder = ' Digite um item';
inputItem.style.textAlign = 'center';
inputItem.style.width = '70%';
inputItem.style.borderRadius = '15px';
inputItem.style.padding = '8px';
container.appendChild(inputItem);

// botao
const btnAdd = document.createElement('button');
btnAdd.textContent = 'Adicionar';
btnAdd.style.borderRadius = '15px';
btnAdd.style.margin ='10px';
btnAdd.style.padding ='6px 12px';
btnAdd.style.color = 'darkblue';
btnAdd.style.fontWeight = 'bold';
container.appendChild(btnAdd);

// criar lista
const lista = document.createElement('ol');
lista.style.marginTop = '15px';
container.appendChild(lista);

// criar a função da lista
function adicionarItemComLixeira(texto) {
    const valor =  inputItem.value.trim();
    if (valor !== '') {
        const li = document.createElement('li');
        li.textContent= valor;
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        li.style.padding = '6px 0';
        li.style.borderBlock = 'solid 1px #2a2a2aff';
        li.style.fontFamily = 'Arial, sans-serif';
        li.style.fontSize = '16px';
        li.style.position = 'relative';
        li.style.paddingRight = '30px';
        li.style.paddingTop = '4px';
        li.style.paddingBottom = '4px';
        li.style.borderBottom = 'solid 1px #ccc';
        lista.appendChild(li);
        inputItem.value = '';
        inputItem.focus(); // volta o foco para o campo

        const spanTexto = document.createElement ('span');
        spanTexto.textContent = texto;
        li.appendChild(spanTexto);
        
        const btnExcluir = document.createElement('span');
        btnExcluir.textContent = '✖️';
        btnExcluir.style.position = 'absolute';
        btnExcluir.style.right = '0';
        btnExcluir.style.top = '50%';
        btnExcluir.style.transform = 'translateY(-50%)';
        btnExcluir.style.cursor = 'pointer';
        btnExcluir.style.color = '#e53935';            // vermelho
        btnExcluir.style.transition = 'color 0.2s ease';
        btnExcluir.title = 'Excluir item';
        
        // Hover: lixeira fica mais escura
        btnExcluir.addEventListener('mouseenter', () => btnExcluir.style.color = '#b71c1c');
        btnExcluir.addEventListener('mouseleave', () => btnExcluir.style.color = '#e53935');

        btnExcluir.addEventListener('click', () => li.remove());

        li.appendChild(btnExcluir);

        return li;
    }

};

// cria a função de clicar enter e funcionar
btnAdd.addEventListener('click', adicionarItemComLixeira);

inputItem.addEventListener('keydown', (event) =>{
    if (event.key === 'Enter'){
        adicionarItemComLixeira();
    }
});
