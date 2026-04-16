(function () {
  const data             = JSON.parse(document.getElementById('tools-data').textContent);
  const searchEl         = document.getElementById('search');
  const countEl          = document.getElementById('count');
  const resultsEl        = document.getElementById('results');
  const tagBtns          = document.querySelectorAll('.tag-btn');
  const subtagFiltersEl  = document.getElementById('subtag-filters');
  const subtagSelect     = document.getElementById('subtag-select');

  // Build map: mainTag → sorted array of subtags
  const subtagMap = {};
  data.forEach(tool => {
    (tool.tags || []).forEach(tag => {
      if (!subtagMap[tag]) subtagMap[tag] = new Set();
      (tool.subtags || []).forEach(st => subtagMap[tag].add(st));
    });
  });
  Object.keys(subtagMap).forEach(k => {
    subtagMap[k] = [...subtagMap[k]].sort((a, b) => a.localeCompare(b, 'es'));
  });

  let activeTag    = '';
  let activeSubtag = '';
  let query        = '';

  function esc(s) {
    return String(s)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;');
  }

  function stars(rating) {
    if (!rating) return '';
    let html = '<div class="stars" aria-label="Valoración: ' + rating + ' de 5">';
    for (let i = 1; i <= 5; i++) {
      html += i <= rating
        ? '<span class="star star--full">★</span>'
        : '<span class="star star--empty">☆</span>';
    }
    return html + '</div>';
  }

  function renderTags(tags, subtags) {
    const mainSpans = (tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join('');
    const subSpans  = (subtags || []).map(t => `<span class="tag tag--sub">${esc(t)}</span>`).join('');
    if (!mainSpans && !subSpans) return '';
    return `<div class="tags">${mainSpans}${subSpans}</div>`;
  }

  function renderLinks(tool) {
    const links = [];
    if (tool.resource_url) {
      links.push(`<a href="${esc(tool.resource_url)}" target="_blank" rel="noopener" class="link-btn link-resource">Recurso ↗</a>`);
    }
    if (tool.circuigramas_url) {
      links.push(`<a href="${esc(tool.circuigramas_url)}" target="_blank" rel="noopener" class="link-btn link-circuigramas">Reseña ↗</a>`);
    }
    if (tool.tutorial_url) {
      links.push(`<a href="${esc(tool.tutorial_url)}" target="_blank" rel="noopener" class="link-btn link-tutorial">Tutorial ↗</a>`);
    }
    if (links.length === 0) return '';
    return '<div class="card-links">' + links.join('') + '</div>';
  }

  function updateSubtagDropdown() {
    const subtags = activeTag ? (subtagMap[activeTag] || []) : [];
    activeSubtag = '';
    if (subtags.length === 0) {
      subtagFiltersEl.style.display = 'none';
      return;
    }
    subtagSelect.innerHTML =
      '<option value="">Todos los subtemas</option>' +
      subtags.map(st => `<option value="${esc(st)}">${esc(st)}</option>`).join('');
    subtagSelect.value = '';
    subtagFiltersEl.style.display = '';
  }

  function render() {
    const q = query.toLowerCase();

    const filtered = data.filter(tool => {
      const matchesTag    = activeTag === '' || (tool.tags || []).includes(activeTag);
      const matchesSubtag = activeSubtag === '' || (tool.subtags || []).includes(activeSubtag);
      const matchesSearch = q === '' ||
        tool.title.toLowerCase().includes(q) ||
        (tool.summary || '').toLowerCase().includes(q) ||
        (tool.tags || []).some(t => t.toLowerCase().includes(q)) ||
        (tool.subtags || []).some(t => t.toLowerCase().includes(q));
      return matchesTag && matchesSubtag && matchesSearch;
    }).sort((a, b) => a.title.localeCompare(b.title, 'es'));

    const n = filtered.length;
    countEl.textContent = n + (n === 1 ? ' herramienta' : ' herramientas');

    if (n === 0) {
      resultsEl.innerHTML = '<p class="empty">No se encontraron herramientas.</p>';
      return;
    }

    resultsEl.innerHTML = filtered.map(tool => `
      <div class="card">
        <div class="card-top">
          <h2>${esc(tool.title)}</h2>
          ${stars(tool.rating)}
        </div>
        <p class="preview">${esc(tool.summary || '')}</p>
        ${renderTags(tool.tags, tool.subtags)}
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
      updateSubtagDropdown();
      render();
    });
  });

  subtagSelect.addEventListener('change', e => {
    activeSubtag = e.target.value;
    render();
  });

  const tagParam = new URLSearchParams(location.search).get('tag');
  if (tagParam) {
    const match = [...tagBtns].find(b => b.dataset.tag === tagParam);
    if (match) match.click();
  }

  render();
})();
