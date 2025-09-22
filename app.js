(async () => {
  const number = '5515981622748';
  // Carregar itens e exibir em tabela
  async function loadItems() {
    try {
      const response = await fetch('validade_itens.json');
      const data = await response.json();
      const container = document.getElementById('itemsContainer');
      if (!container) return [];
      const items = data.items || [];
      let html = '<table><thead><tr><th>Item</th><th>Setor</th><th>Geladeira</th><th>Freezer</th></tr></thead><tbody>';
      items.forEach(item => {
        const gel = item.shelf_life && item.shelf_life.geladeira ? item.shelf_life.geladeira : '';
        const fre = item.shelf_life && item.shelf_life.freezer ? item.shelf_life.freezer : '';
        html += `<tr><td>${item.item}</td><td>${item.setor}</td><td>${gel}</td><td>${fre}</td></tr>`;
      });
      html += '</tbody></table>';
      container.innerHTML = html;
      return items;
    } catch (error) {
      console.error('Erro ao carregar itens:', error);
      return [];
    }
  }

  function buildMessage(items) {
    if (!items || !items.length) return '';
    return items.map(item => item.item).join(', ');
  }

  const items = await loadItems();
  const message = buildMessage(items);

  const waBtn = document.getElementById('waBtn');
  if (waBtn) {
    waBtn.addEventListener('click', () => {
      const msg = `Itens: ${message}`;
      const url = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    });
  }
})();
