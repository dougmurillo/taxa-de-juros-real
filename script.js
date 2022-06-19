function calcular() {
  let resultado = document.getElementById("resultado");
  let JurosNominal = parseFloat(document.getElementById("jurosNominal").value);

  let taxaDeInflacao = parseFloat(document.getElementById("inflacao").value);

  let valor = ((JurosNominal / 100 + 1) / (taxaDeInflacao / 100 + 1) - 1) * 100;

  resultado.innerHTML = valor.toFixed(2);
}
