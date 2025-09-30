const descInput = document.getElementById('desc');
const qtyInput = document.getElementById('qty');
const unitInput = document.getElementById('unit');
const addBtn = document.getElementById('add');
const tbody = document.getElementById('itens-body');
const grandTotalEl = document.getElementById('grand-total');

function adicionarItem(){
    const desc = descInput.value.trim();
    const qty = parseInt(qtyInput.value);
    const unit = parseFloat(unitInput.value);

    if (!desc || qty <= 0  || unit < 0) return;

    // remove mensagem vazia
    const emptyRow = tbody.querySelector('.empty-row');
    if (emptyRow) emptyRow.remove();

    const total = qty * unit;

    const tr = document.createElement('tr')
    tr.innerHTML = 
    <td>${desc}</td>;
    <td class="right">${qty}</td>;
    <td class="right">R$ ${unit.toFixed(2)}</td> ;
    <td class="right">R$ ${total.toFixed(2)}</td> ;
    <td><button class="remove">X</button></td>;

    tr.querySelector('.remove').addEventListener('click', () =>{
        tr.remove();
        updateTotal();
        if (!tbody.querySelector('tr')){
            const emptyTr = document.createElement('tr');
            emptyTr.classList.add('empty-row');
            emptyTr.innerHTML = '<td class="empty" colspan="5"> Nenhum item adicionado.</td>';
            tbody.appendChild(emptyTr);
        }
    });

    tbody.appendChild(tr);
    updateTotal();

    // limpa campos
    descInput.value = '';
    qtyInput.value = 1;
    unitInput.value = '0.00';
    descInput.focus();
}

    function updateTotal(){
        let total = 0;
        tbody.querySelectorAll('tr').forEach( row =>{
            if (!row.classList.contains('empty-row')){
                const value = row.children[3].textContent.replace('R$', '').replace('', '.');
                total += parseFloat(value);
            }
        });
        grandTotalEl.textContent = 'R$' + total.toFixed(2);
    }

    // evento do botão
    addBtn.addEventListener('click', adicionarItem);

    // permitir enter em qualquer input
    [descInput, qtyInput, unitInput].forEach(input => {
        input.addEventListener('keydown', (event) =>{
            if (event.key === 'Enter') {
                event.preventDefault(); //evita o submit ou comportamento padrão
                adicionarItem();
            }
        });
    });