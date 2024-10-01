function addPorcentagem(porcentagem = 0) {
    if (porcentagem === 0) {
        console.log('Porcentagem escolhida pelo usuário.');
        return;
    }

    // Calcula a soma (supondo que tenha um valor de conta para aplicar a porcentagem)
    // const soma = conta * (porcentagem / 100);
    const soma = (100 * (porcentagem / 100));

    // Atualiza o valor do output
    document.getElementById('bill').textContent = `R$ ${soma.toFixed(2)}`;
}
