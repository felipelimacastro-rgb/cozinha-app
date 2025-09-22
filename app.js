(async () => {
  const number = '5515981622748';
  document.getElementById('waBtn').addEventListener('click', () => {
    const msg = 'Resumo de Vencimentos (MVP)';
    const url = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  });
})();
