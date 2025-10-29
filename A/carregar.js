const btnCarregar = document.createElement('button');
btnCarregar.textContent = 'Carregar Lista';
btnCarregar.style.display ='block';
btnCarregar.style.margin ='20px auto';
btnCarregar.style.padding ='6px 12px';
btnCarregar.style.cursor = 'poiter';
btnCarregar.style.borderRadius = '15px';
btnCarregar.style.color = 'darkblue';
btnCarregar.style.fontWeight = 'bold';
btnCarregar.style.transition = 'background-color 0.3s';
container.appendChild(btnCarregar);

// ===== Efeito hover no botão =====
btnCarregar.addEventListener('mouseover', () => {
    btnCarregar.style.backgroundColor = 'darkblue';
  });
  btnCarregar.addEventListener('mouseout', () => {
    btnCarregar.style.backgroundColor = 'white';
  });

//oculto
const inputArquivo = document.createElement('input');
inputArquivo.type = 'file';
inputArquivo.accept = '.txt';
inputArquivo.style.display = 'none';
document.body.appendChild(inputArquivo);

// ===== Função para criar item com checkbox =====
function criarItemComCheckbox(texto) {
    const li = document.createElement('li');
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    li.style.justifyContent = 'space-between';
    li.style.padding = '4px 8px';
    li.style.borderBottom = '1px solid #ddd';
  
    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.marginRight = '10px';
  
    // Texto do item
    const span = document.createElement('span');
    span.textContent = texto;
    span.style.flexGrow = '1';
  
    // Quando o checkbox for marcado, risca o texto
    checkbox.addEventListener('change', () => {
      span.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
      span.style.color = checkbox.checked ? '#777' : '#000';
    });
  
    li.appendChild(checkbox);
    li.appendChild(span);
    return li;
  }

function carregarListaArquivo(file) {
    const reader = new FileReader();
    reader.onload = function() {
        lista.innerHTML = '';

        const linhas = reader.result.split(/\r?\n/).filter(l => l.trim() !== '');  
        linhas.forEach(linha => {
            const li = document.createElement('li');
            li.textContent = linha;
            li.style.padding = '4px 0';

            li.style.borderBottom = '1px solid #ccc';

            lista.appendChild(li);
        });  
    };
    reader.readAsText(file);

    btnCarregar.addEventListener('click', () => inputArquivo.click());
    inputArquivo.addEventListener('change', () => {
        const file = inputArquivo.files[0];
        if (file) {
            carregarListaArquivo(file);
            inputArquivo.value = ''; // limpa o valor para permitir carregar o mesmo arquivo novamente
        }
    });
}

// ===== Rodapé =====
const rodape = document.createElement('div');
rodape.textContent = `© ${new Date().getFullYear()} Domicio Pedra`;
rodape.style.textAlign = 'center';
rodape.style.marginTop = '20px';
rodape.style.fontSize = '0.6em';
rodape.style.color = '#555';
rodape.style.padding = '10px 0';
container.appendChild(rodape);