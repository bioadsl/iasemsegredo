// Contador regressivo
let tempo = 15 * 60;
const atualizaContador = setInterval(() => {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  document.getElementById('contador').innerText =
    `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  tempo--;
  if (tempo < 0) {
    clearInterval(atualizaContador);
    document.getElementById('contador-barra').innerText =
      '⚠️ Oferta encerrada! Aguarde a próxima oportunidade.';
  }
}, 1000);
