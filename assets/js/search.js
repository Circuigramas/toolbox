(function () {
  const data      = JSON.parse(document.getElementById('tools-data').textContent);
  const searchEl  = document.getElementById('search');
  const countEl   = document.getElementById('count');
  const resultsEl = document.getElementById('results');
  const tagBtns   = document.querySelectorAll('.tag-btn');

  let activeTag = '';
  let query     = '';

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function stars(rating) {
    if (!rating) return '';
    let html = '<div class="stars" aria-label="Valoración: ' + rating + ' de 5">';
    for (let i = 1; i <= 5; i++) {
      html += i <= rating
        ? '<span class="star star--full">★</span>'
        : '<span class="star star--empty">☆</span>';
    }
    html += '</div>';
    return html;
  }

  function renderTags(tags) {
    if (!tags || tags.length === 0) return '';
    return '<div class="tags">' +
      tags.map(t => `<span class="tag">${esc(t)}</span>`).join('') +
      '</div>';
  }

  function renderLinks(tool) {
    const links = [];
    if (tool.resource_url) {
      links.push(`<a href="${esc(tool.resource_url)}" target="_blank" rel="noopener" class="link-btn link-resource" onclick="event.stopPropagation()">Recurso ↗</a>`);
    }
    if (tool.circuigramas_url) {
      links.push(`<a href="${esc(tool.circuigramas_url)}" target="_blank" rel="noopener" class="link-btn link-circuigramas" onclick="event.stopPropagation()">Reseña ↗</a>`);
    }
    if (tool.tutorial_url) {
      links.push(`<a href="${esc(tool.tutorial_url)}" target="_blank" rel="noopener" class="link-btn link-tutorial" onclick="event.stopPropagation()">Tutorial ↗</a>`);
    }
    if (tool.detail_url) {
      links.push(`<a href="${esc(tool.detail_url)}" class="link-btn link-detail">Más info →</a>`);
    }
    if (links.length === 0) return '';
    return '<div class="card-links">' + links.join('') + '</div>';
  }

  function render() {
    const q = query.toLowerCase();

    const filtered = data.filter(tool => {
      const matchesTag = activeTag === '' ||
        (tool.tags || []).includes(activeTag);
      const matchesSearch = q === '' ||
        tool.title.toLowerCase().includes(q) ||
        (tool.summary || '').toLowerCase().includes(q) ||
        (tool.tags || []).some(t => t.toLowerCase().includes(q));
      return matchesTag && matchesSearch;
    }).sort((a, b) => a.title.localeCompare(b.title, 'es'));

    countEl.textContent =
      filtered.length + ' herramienta' + (filtered.length !== 1 ? 's' : '');

    if (filtered.length === 0) {
      resultsEl.innerHTML = '<p class="empty">No se encontraron herramientas.</p>';
      return;
    }

    resultsEl.innerHTML = filtered.map(tool => `
      <div class="card" role="article">
        <div class="card-top">
          <h2>${esc(tool.title)}</h2>
          ${stars(tool.rating)}
        </div>
        <p class="preview">${esc(tool.summary || '')}</p>
        ${renderTags(tool.tags)}
        ${renderLinks(tool)}
      </div>
    `).join('');
  }

  searchEl.addEventListener('input', e => {
    query = e.target.value.trim();
    render();
  });

  tagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeTag = btn.dataset.tag;
      tagBtns.forEach(b => b.classList.toggle('active', b === btn));
      render();
    });
  });

  // Pre-activate tag from ?tag= query param
  const tagParam = new URLSearchParams(location.search).get('tag');
  if (tagParam) {
    const match = [...tagBtns].find(b => b.dataset.tag === tagParam);
    if (match) match.click();
  }

  render();
})();
