function abrirPopup() {
    document.getElementById('popup').style.display = 'flex';
    document.querySelector('.desfocado').style.filter = 'blur(5px)';
}

function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
    document.querySelector('.desfocado').style.filter = 'none';
}

function mostrarParcelas() {
    const credito = document.getElementById('credito').checked;
    const parcelasContainer = document.getElementById('parcelas-container');
    if (credito) {
        parcelasContainer.classList.add('show');
    } else {
        parcelasContainer.classList.remove('show');
    }
}

function calcularParcelas() {
    const parcelas = document.getElementById('parcelas').value;
    const valorTotal = 400.00;
    const valorParcela = (valorTotal / parcelas).toFixed(2);

    document.getElementById('valor-total').innerText = valorTotal.toFixed(2);
    document.getElementById('parcelas-resumo').innerText = `Em ${parcelas}x de R$ ${valorParcela}`;
}

function calcularResumo(event) {
    event.preventDefault();
    const credito = document.getElementById('credito').checked;
    const parcelas = document.getElementById('parcelas').value;

    if (credito && parcelas > 1) {
        calcularParcelas();
    } else {
        document.getElementById('parcelas-resumo').innerText = "";
    }
}
