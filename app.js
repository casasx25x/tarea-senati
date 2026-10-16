/**
 * DEV HUB SENATI - APLICACIÓN JAVASCRIPT
 * Funcionalidades: Catálogo dinámico, filtrado reactivo, buscador en tiempo real,
 * persistencia de favoritos con LocalStorage, modales interactivos y sistema de notificaciones toast.
 */

// =============================================================================
// 1. BASE DE DATOS DE RECURSOS TECNOLÓGICOS (Mínimo 6 obligatorios, aquí 10+)
// =============================================================================
const resourcesData = [
  {
    id: 'res-react',
    title: 'React.js',
    category: 'Frontend',
    icon: 'fa-brands fa-react',
    iconColor: '#61dafb',
    level: 'Intermedio',
    popularity: 98,
    shortDesc: 'Biblioteca de JavaScript declarativa y basada en componentes para construir interfaces de usuario web interactivas.',
    fullDesc: 'React permite diseñar vistas simples para cada estado en tu aplicación, y se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien. Es el estándar de la industria para desarrollo SPA.',
    tags: ['JavaScript', 'UI', 'Componentes', 'Virtual DOM'],
    officialUrl: 'https://react.dev',
    docsUrl: 'https://react.dev/learn',
    useCase: 'Desarrollo de Single Page Applications (SPA), paneles de control y plataformas interactivas.'
  },
  {
    id: 'res-nodejs',
    title: 'Node.js',
    category: 'Backend',
    icon: 'fa-brands fa-node-js',
    iconColor: '#68a063',
    level: 'Intermedio',
    popularity: 95,
    shortDesc: 'Entorno de ejecución para JavaScript del lado del servidor, construido sobre el motor V8 de Google Chrome.',
    fullDesc: 'Node.js utiliza un modelo de operaciones de E/S sin bloqueo y orientado a eventos, lo que lo hace ligero y eficiente. Es ideal para aplicaciones en tiempo real y servicios RESTful con JavaScript en todo el stack.',
    tags: ['JavaScript', 'Servidor', 'API REST', 'Asíncrono'],
    officialUrl: 'https://nodejs.org',
    docsUrl: 'https://nodejs.org/en/docs',
    useCase: 'Creación de APIs REST, microservicios y aplicaciones en tiempo real con WebSockets.'
  },
  {
    id: 'res-python',
    title: 'Python',
    category: 'Backend',
    icon: 'fa-brands fa-python',
    iconColor: '#3776ab',
    level: 'Principiante',
    popularity: 99,
    shortDesc: 'Lenguaje de alto nivel conocido por su sintaxis limpia, legible y amplia versatilidad en backend, datos e IA.',
    fullDesc: 'Python es uno de los lenguajes más populares del mundo. Con bibliotecas como FastAPI, Django, Pandas y TensorFlow, abarca desde servicios web robustos hasta análisis avanzado de datos e inteligencia artificial.',
    tags: ['Lenguaje', 'Backend', 'Data Science', 'IA'],
    officialUrl: 'https://www.python.org',
    docsUrl: 'https://docs.python.org/3/',
    useCase: 'Desarrollo web con Django/FastAPI, automatización de tareas y modelos de machine learning.'
  },
  {
    id: 'res-postgresql',
    title: 'PostgreSQL',
    category: 'Base de Datos',
    icon: 'fa-solid fa-database',
    iconColor: '#336791',
    level: 'Intermedio',
    popularity: 92,
    shortDesc: 'Sistema de gestión de bases de datos relacional y orientado a objetos de código abierto más avanzado del mundo.',
    fullDesc: 'PostgreSQL destaca por su confiabilidad, robustez de datos y rendimiento en cargas de trabajo complejas. Soporta tipos de datos avanzados como JSONB, búsquedas de texto completo y extensiones geográficas como PostGIS.',
    tags: ['SQL', 'Relacional', 'ACID', 'JSONB'],
    officialUrl: 'https://www.postgresql.org',
    docsUrl: 'https://www.postgresql.org/docs/',
    useCase: 'Almacenamiento transaccional, sistemas empresariales y aplicaciones escalables.'
  },
  {
    id: 'res-flutter',
    title: 'Flutter & Dart',
    category: 'Móvil',
    icon: 'fa-solid fa-mobile-screen-button',
    iconColor: '#02569b',
    level: 'Intermedio',
    popularity: 90,
    shortDesc: 'Framework de Google para compilar aplicaciones multiplataforma nativas (Android, iOS, Web y Escritorio).',
    fullDesc: 'Flutter ofrece una experiencia de desarrollo ultra rápida con Hot Reload y una suite completa de widgets personalizables que renderizan píxel por píxel con alto rendimiento en cualquier dispositivo.',
    tags: ['Dart', 'Multiplataforma', 'Android', 'iOS'],
    officialUrl: 'https://flutter.dev',
    docsUrl: 'https://docs.flutter.dev',
    useCase: 'Creación de aplicaciones para smartphones con una sola base de código compartido.'
  },
  {
    id: 'res-git-github',
    title: 'Git & GitHub',
    category: 'Herramientas',
    icon: 'fa-brands fa-github',
    iconColor: '#ffffff',
    level: 'Principiante',
    popularity: 100,
    shortDesc: 'Sistema de control de versiones distribuido y la mayor plataforma de alojamiento de repositorios de software.',
    fullDesc: 'Permite rastrear cambios en el código, trabajar en equipo mediante ramas de funcionalidad, revisiones de Pull Request y automatización con GitHub Actions. Indispensable para cualquier desarrollador profesional.',
    tags: ['Control de Versiones', 'Colaboración', 'DevOps', 'CI/CD'],
    officialUrl: 'https://git-scm.com',
    docsUrl: 'https://docs.github.com',
    useCase: 'Gestión colaborativa del código fuente, trabajo en equipo y control de cambios del proyecto.'
  },
  {
    id: 'res-docker',
    title: 'Docker',
    category: 'Herramientas',
    icon: 'fa-brands fa-docker',
    iconColor: '#2496ed',
    level: 'Avanzado',
    popularity: 93,
    shortDesc: 'Plataforma de virtualización a nivel de sistema operativo para empaquetar aplicaciones en contenedores portables.',
    fullDesc: 'Docker resuelve el problema de "en mi máquina sí funciona", asegurando que el software se ejecute de manera idéntica tanto en el entorno de desarrollo como en producción.',
    tags: ['Contenedores', 'DevOps', 'Infraestructura', 'Microservicios'],
    officialUrl: 'https://www.docker.com',
    docsUrl: 'https://docs.docker.com',
    useCase: 'Despliegue homogéneo de servicios, creación de entornos aislados de desarrollo y testing.'
  },
  {
    id: 'res-tailwind',
    title: 'Tailwind CSS',
    category: 'Frontend',
    icon: 'fa-brands fa-css3-alt',
    iconColor: '#38bdf8',
    level: 'Principiante',
    popularity: 91,
    shortDesc: 'Framework CSS orientado a utilidades para diseñar rápidamente interfaces modernas sin salir de tu HTML.',
    fullDesc: 'Tailwind proporciona clases atómicas que aceleran el maquetado responsivo, soportan modo oscuro nativo y permiten una alta personalización a través de su archivo de configuración.',
    tags: ['CSS', 'Diseño', 'Responsive', 'Utilidades'],
    officialUrl: 'https://tailwindcss.com',
    docsUrl: 'https://tailwindcss.com/docs',
    useCase: 'Maquetación rápida de aplicaciones web con diseño responsivo y consistente.'
  },
  {
    id: 'res-huggingface',
    title: 'Hugging Face',
    category: 'Inteligencia Artificial',
    icon: 'fa-solid fa-brain',
    iconColor: '#ffcc00',
    level: 'Avanzado',
    popularity: 94,
    shortDesc: 'El hub abierto para modelos de Machine Learning, conjuntos de datos y aplicaciones de IA generativa.',
    fullDesc: 'Hugging Face es el GitHub de la inteligencia artificial. Brinda acceso a miles de modelos de procesamiento de lenguaje natural (NLP), visión por computadora y generación de código como Llama, Mistral y Stable Diffusion.',
    tags: ['IA', 'Machine Learning', 'Transformers', 'Modelos'],
    officialUrl: 'https://huggingface.co',
    docsUrl: 'https://huggingface.co/docs',
    useCase: 'Integración de modelos de lenguaje, visión artificial y prototipos de IA generativa.'
  },
  {
    id: 'res-mongodb',
    title: 'MongoDB',
    category: 'Base de Datos',
    icon: 'fa-solid fa-leaf',
    iconColor: '#47a248',
    level: 'Principiante',
    popularity: 88,
    shortDesc: 'Base de datos NoSQL basada en documentos flexibles BSON para aplicaciones modernas y esquemas ágiles.',
    fullDesc: 'MongoDB ofrece alta escalabilidad horizontal y consultas avanzadas con agregaciones. Su formato similar a JSON facilita la integración directa con entornos JavaScript como Node.js.',
    tags: ['NoSQL', 'Documentos', 'BSON', 'Escalabilidad'],
    officialUrl: 'https://www.mongodb.com',
    docsUrl: 'https://www.mongodb.com/docs',
    useCase: 'Catálogos de productos flexibles, almacenamiento de perfiles de usuario y prototipos rápidos.'
  }
];

// =============================================================================
// 2. EQUIPO DE TRABAJO SENATI (Requisito 7: Nombres y Responsabilidades)
// =============================================================================
const teamMembers = [
  {
    name: 'Estudiante 1 (Líder / Integrador)',
    role: 'Git Master & Arquitectura Web',
    responsibility: 'Administración del repositorio en GitHub, control de ramas principales (main/develop), revisión de Pull Requests y diseño de la estructura HTML semántica.',
    branch: 'feature/estructura-base',
    avatarIcon: 'fa-user-tie',
    githubUrl: 'https://github.com'
  },
  {
    name: 'Estudiante 2 (Desarrollador UI/UX)',
    role: 'Especialista en Diseño & CSS',
    responsibility: 'Creación del sistema de diseño visual (paleta SENATI, dark mode), maquetado adaptable (responsive para PC y celulares), animaciones y accesibilidad.',
    branch: 'feature/estilos-responsive',
    avatarIcon: 'fa-paint-brush',
    githubUrl: 'https://github.com'
  },
  {
    name: 'Estudiante 3 (Desarrollador Frontend)',
    role: 'Interactividad & Lógica JavaScript',
    responsibility: 'Implementación del catálogo dinámico, buscador en tiempo real, filtrado por categorías, gestión de favoritos con LocalStorage y modales emergentes.',
    branch: 'feature/catalogo-logica-js',
    avatarIcon: 'fa-laptop-code',
    githubUrl: 'https://github.com'
  },
  {
    name: 'Estudiante 4 (Control de Calidad & Docs)',
    role: 'QA Tester & Documentación Git',
    responsibility: 'Validación de funcionalidades cruzadas, pruebas en móviles, redacción de la guía de comandos Git y documentación técnica en README.md.',
    branch: 'feature/pruebas-documentacion',
    avatarIcon: 'fa-clipboard-check',
    githubUrl: 'https://github.com'
  }
];

// =============================================================================
// 3. ESTADO DE LA APLICACIÓN
// =============================================================================
const state = {
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'popular',
  onlyFavorites: false,
  favorites: JSON.parse(localStorage.getItem('devhub_favorites') || '[]')
};

// =============================================================================
// 4. ELEMENTOS DEL DOM
// =============================================================================
const dom = {
  resourcesGrid: document.getElementById('resourcesGrid'),
  categoriesGrid: document.getElementById('categoriesGrid'),
  searchInput: document.getElementById('searchInput'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  categorySelect: document.getElementById('categorySelect'),
  sortSelect: document.getElementById('sortSelect'),
  resultsCounter: document.getElementById('resultsCounter'),
  activeFilterTags: document.getElementById('activeFilterTags'),
  resetFiltersBtn: document.getElementById('resetFiltersBtn'),
  emptyResetBtn: document.getElementById('emptyResetBtn'),
  emptyState: document.getElementById('emptyState'),
  favCountBadge: document.getElementById('favCountBadge'),
  favoritesFilterBtn: document.getElementById('favoritesFilterBtn'),
  teamGrid: document.getElementById('teamGrid'),
  resourceModal: document.getElementById('resourceModal'),
  closeModalBtn: document.getElementById('closeModalBtn'),
  modalHeader: document.getElementById('modalHeader'),
  modalBody: document.getElementById('modalBody'),
  modalFooter: document.getElementById('modalFooter'),
  gitGuideModal: document.getElementById('gitGuideModal'),
  showGitGuideModalBtn: document.getElementById('showGitGuideModalBtn'),
  closeGitModalBtn: document.getElementById('closeGitModalBtn'),
  closeGitModalOkBtn: document.getElementById('closeGitModalOkBtn'),
  toastContainer: document.getElementById('toastContainer'),
  navToggle: document.getElementById('navToggle'),
  navMenu: document.getElementById('navMenu'),
  metricResources: document.getElementById('metricResources'),
  metricCategories: document.getElementById('metricCategories')
};

// =============================================================================
// 5. INICIALIZACIÓN
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderCategoryPills();
  populateCategorySelect();
  renderResources();
  renderTeam();
  updateFavoritesBadge();
  setupEventListeners();
  updateMetrics();
});

// =============================================================================
// 6. RENDERIZADO DE CATEGORÍAS & RECURSOS
// =============================================================================

/** Obtiene lista única de categorías disponibles */
function getCategories() {
  const categoriesMap = {};
  resourcesData.forEach(r => {
    categoriesMap[r.category] = (categoriesMap[r.category] || 0) + 1;
  });
  return categoriesMap;
}

/** Renderiza tarjetas de acceso rápido por categoría */
function renderCategoryPills() {
  const categories = getCategories();
  const categoryIcons = {
    'Frontend': 'fa-solid fa-code',
    'Backend': 'fa-solid fa-server',
    'Base de Datos': 'fa-solid fa-database',
    'Móvil': 'fa-solid fa-mobile-screen',
    'Herramientas': 'fa-solid fa-screwdriver-wrench',
    'Inteligencia Artificial': 'fa-solid fa-brain'
  };

  let html = `
    <div class="category-card ${state.activeCategory === 'all' ? 'active' : ''}" data-cat="all">
      <div class="category-icon" style="background: rgba(0, 102, 255, 0.15); color: #38bdf8;">
        <i class="fa-solid fa-border-all"></i>
      </div>
      <div class="category-name">Todos</div>
      <div class="category-count">${resourcesData.length} recursos</div>
    </div>
  `;

  Object.entries(categories).forEach(([name, count]) => {
    const icon = categoryIcons[name] || 'fa-solid fa-cube';
    const isActive = state.activeCategory === name ? 'active' : '';
    html += `
      <div class="category-card ${isActive}" data-cat="${name}">
        <div class="category-icon" style="background: rgba(0, 229, 255, 0.12); color: #00e5ff;">
          <i class="${icon}"></i>
        </div>
        <div class="category-name">${name}</div>
        <div class="category-count">${count} recursos</div>
      </div>
    `;
  });

  dom.categoriesGrid.innerHTML = html;

  // Click handler para tarjetas de categoría
  dom.categoriesGrid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const selected = card.getAttribute('data-cat');
      setCategoryFilter(selected);
    });
  });
}

/** Llena el selector de categorías */
function populateCategorySelect() {
  const categories = getCategories();
  let html = `<option value="all">Todas las Categorías</option>`;
  Object.keys(categories).forEach(cat => {
    html += `<option value="${cat}">${cat}</option>`;
  });
  dom.categorySelect.innerHTML = html;
}

/** Filtra y ordena los recursos según el estado actual */
function getFilteredResources() {
  return resourcesData.filter(item => {
    // Filtro por categoría
    const matchesCategory = state.activeCategory === 'all' || item.category === state.activeCategory;

    // Filtro por búsqueda de texto
    const query = state.searchQuery.trim().toLowerCase();
    const matchesSearch = !query || 
      item.title.toLowerCase().includes(query) ||
      item.shortDesc.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query));

    // Filtro solo favoritos
    const matchesFavorites = !state.onlyFavorites || state.favorites.includes(item.id);

    return matchesCategory && matchesSearch && matchesFavorites;
  }).sort((a, b) => {
    // Ordenamiento
    if (state.sortBy === 'popular') {
      return b.popularity - a.popularity;
    } else if (state.sortBy === 'alpha') {
      return a.title.localeCompare(b.title);
    } else if (state.sortBy === 'difficulty') {
      const order = { 'Principiante': 1, 'Intermedio': 2, 'Avanzado': 3 };
      return (order[a.level] || 0) - (order[b.level] || 0);
    }
    return 0;
  });
}

/** Renderiza la cuadrícula de recursos en el catálogo */
function renderResources() {
  const filtered = getFilteredResources();

  // Contador de resultados
  dom.resultsCounter.innerHTML = `Mostrando <strong>${filtered.length}</strong> de <strong>${resourcesData.length}</strong> recursos`;

  // Renderizado de tags activos
  renderActiveFilterTags();

  if (filtered.length === 0) {
    dom.resourcesGrid.innerHTML = '';
    dom.emptyState.style.display = 'block';
    return;
  }

  dom.emptyState.style.display = 'none';

  dom.resourcesGrid.innerHTML = filtered.map(item => {
    const isFav = state.favorites.includes(item.id);
    const tagsHtml = item.tags.map(t => `<span class="tag">#${t}</span>`).join('');

    return `
      <article class="resource-card" id="card-${item.id}">
        <div class="resource-header">
          <div class="resource-icon-wrapper" style="background: rgba(255, 255, 255, 0.05); color: ${item.iconColor};">
            <i class="${item.icon}"></i>
          </div>
          <div class="resource-top-actions">
            <button class="copy-link-btn" title="Copiar enlace oficial" onclick="copyToClipboard('${item.officialUrl}', 'Enlace oficial copiado')">
              <i class="fa-solid fa-link"></i>
            </button>
            <button class="fav-btn ${isFav ? 'active' : ''}" title="${isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}" onclick="toggleFavorite('${item.id}')">
              <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
            </button>
          </div>
        </div>

        <div class="resource-badges">
          <span class="badge badge-category">${item.category}</span>
          <span class="badge badge-level ${item.level}">${item.level}</span>
        </div>

        <h3 class="resource-title">${item.title}</h3>
        <p class="resource-desc">${item.shortDesc}</p>

        <div class="resource-tags">
          ${tagsHtml}
        </div>

        <div class="resource-footer">
          <button class="btn btn-sm btn-secondary" onclick="openResourceModal('${item.id}')">
            <i class="fa-solid fa-circle-info"></i> Detalles
          </button>
          <a href="${item.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
            Visitar <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </article>
    `;
  }).join('');
}

/** Renderiza etiquetas de los filtros activos */
function renderActiveFilterTags() {
  let tags = [];

  if (state.activeCategory !== 'all') {
    tags.push(`Categoría: ${state.activeCategory} <i class="fa-solid fa-xmark" onclick="setCategoryFilter('all')"></i>`);
  }
  if (state.searchQuery.trim()) {
    tags.push(`Búsqueda: "${state.searchQuery}" <i class="fa-solid fa-xmark" onclick="clearSearch()"></i>`);
  }
  if (state.onlyFavorites) {
    tags.push(`Solo Favoritos <i class="fa-solid fa-xmark" onclick="toggleOnlyFavorites()"></i>`);
  }

  dom.activeFilterTags.innerHTML = tags.map(tag => `<span class="active-tag">${tag}</span>`).join('');
}

// =============================================================================
// 7. RENDERIZADO DEL EQUIPO SENATI
// =============================================================================
function renderTeam() {
  dom.teamGrid.innerHTML = teamMembers.map(member => `
    <div class="team-card">
      <div class="team-avatar-wrapper">
        <div class="team-avatar">
          <i class="fa-solid ${member.avatarIcon}"></i>
        </div>
        <div class="git-role-badge" title="Colaborador Git">
          <i class="fa-brands fa-git-alt"></i>
        </div>
      </div>
      <h3 class="member-name">${member.name}</h3>
      <div class="member-role">${member.role}</div>
      <p class="member-desc">${member.responsibility}</p>
      
      <div class="git-contribution-box">
        <strong><i class="fa-solid fa-code-branch"></i> Rama asignada:</strong>
        <code>${member.branch}</code>
      </div>

      <div class="team-socials">
        <a href="${member.githubUrl}" target="_blank" class="team-social-btn" title="Perfil GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
        <button class="team-social-btn" title="Copiar nombre de rama" onclick="copyToClipboard('${member.branch}', 'Rama copiada al portapapeles')">
          <i class="fa-regular fa-copy"></i>
        </button>
      </div>
    </div>
  `).join('');
}

// =============================================================================
// 8. GESTIÓN DE FAVORITOS (LOCALSTORAGE)
// =============================================================================
function toggleFavorite(id) {
  const index = state.favorites.indexOf(id);
  const resource = resourcesData.find(r => r.id === id);
  const resourceName = resource ? resource.title : 'Recurso';

  if (index > -1) {
    state.favorites.splice(index, 1);
    showToast(`Eliminado de favoritos: ${resourceName}`, 'info');
  } else {
    state.favorites.push(id);
    showToast(`Guardado en favoritos: ${resourceName}`, 'success');
  }

  localStorage.setItem('devhub_favorites', JSON.stringify(state.favorites));
  updateFavoritesBadge();
  renderResources();
}

function updateFavoritesBadge() {
  dom.favCountBadge.textContent = state.favorites.length;
}

function toggleOnlyFavorites() {
  state.onlyFavorites = !state.onlyFavorites;
  if (state.onlyFavorites) {
    dom.favoritesFilterBtn.classList.add('btn-primary');
    dom.favoritesFilterBtn.classList.remove('btn-outline');
    showToast('Mostrando únicamente recursos favoritos', 'info');
  } else {
    dom.favoritesFilterBtn.classList.remove('btn-primary');
    dom.favoritesFilterBtn.classList.add('btn-outline');
  }
  renderResources();
}

// =============================================================================
// 9. MODAL DE DETALLES
// =============================================================================
function openResourceModal(id) {
  const item = resourcesData.find(r => r.id === id);
  if (!item) return;

  dom.modalHeader.innerHTML = `
    <div class="modal-badge"><i class="${item.icon}"></i> ${item.category}</div>
    <h2>${item.title}</h2>
  `;

  dom.modalBody.innerHTML = `
    <p>${item.fullDesc}</p>
    
    <div class="modal-meta-grid">
      <div class="modal-meta-item">
        <span class="modal-meta-label">Nivel de Aprendizaje</span>
        <span class="modal-meta-val">${item.level}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Popularidad Global</span>
        <span class="modal-meta-val">${item.popularity}% de adopción</span>
      </div>
      <div class="modal-meta-item" style="grid-column: span 2;">
        <span class="modal-meta-label">Casos de Uso Recomendados</span>
        <span class="modal-meta-val">${item.useCase}</span>
      </div>
    </div>

    <h4>Etiquetas Clave</h4>
    <div class="resource-tags" style="margin-top: 0.5rem;">
      ${item.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
    </div>
  `;

  dom.modalFooter.innerHTML = `
    <button class="btn btn-secondary" onclick="closeModal()">Cerrar</button>
    <a href="${item.docsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
      <i class="fa-solid fa-book"></i> Documentación
    </a>
    <a href="${item.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
      <i class="fa-solid fa-arrow-up-right-from-square"></i> Sitio Oficial
    </a>
  `;

  dom.resourceModal.classList.add('open');
  dom.resourceModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  dom.resourceModal.classList.remove('open');
  dom.resourceModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Modal de Guía Git
function openGitGuideModal() {
  dom.gitGuideModal.classList.add('open');
  dom.gitGuideModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeGitGuideModal() {
  dom.gitGuideModal.classList.remove('open');
  dom.gitGuideModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// =============================================================================
// 10. NOTIFICACIONES TOAST & COPIADO AL PORTAPAPELES
// =============================================================================
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const icon = type === 'success' 
    ? 'fa-circle-check' 
    : type === 'warning' 
    ? 'fa-triangle-exclamation' 
    : 'fa-circle-info';

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;

  dom.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function copyToClipboard(text, successMessage = 'Copiado al portapapeles') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMessage, 'success');
  }).catch(() => {
    showToast('Error al intentar copiar al portapapeles', 'warning');
  });
}

// =============================================================================
// 11. EVENT LISTENERS
// =============================================================================
function setupEventListeners() {
  // Buscador con debounce
  let debounceTimeout;
  dom.searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimeout);
    dom.clearSearchBtn.style.display = e.target.value ? 'block' : 'none';
    debounceTimeout = setTimeout(() => {
      state.searchQuery = e.target.value;
      renderResources();
    }, 200);
  });

  dom.clearSearchBtn.addEventListener('click', clearSearch);

  // Selector de categoría
  dom.categorySelect.addEventListener('change', (e) => {
    setCategoryFilter(e.target.value);
  });

  // Selector de orden
  dom.sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderResources();
  });

  // Botón reset filtros
  dom.resetFiltersBtn.addEventListener('click', resetAllFilters);
  dom.emptyResetBtn.addEventListener('click', resetAllFilters);

  // Botón favoritos navbar
  dom.favoritesFilterBtn.addEventListener('click', toggleOnlyFavorites);

  // Cerrar modales
  dom.closeModalBtn.addEventListener('click', closeModal);
  dom.resourceModal.addEventListener('click', (e) => {
    if (e.target === dom.resourceModal) closeModal();
  });

  dom.showGitGuideModalBtn.addEventListener('click', openGitGuideModal);
  dom.closeGitModalBtn.addEventListener('click', closeGitGuideModal);
  dom.closeGitModalOkBtn.addEventListener('click', closeGitGuideModal);
  dom.gitGuideModal.addEventListener('click', (e) => {
    if (e.target === dom.gitGuideModal) closeGitGuideModal();
  });

  // Tecla ESC para cerrar modales
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeGitGuideModal();
    }
  });

  // Menú hamburguesa móvil
  dom.navToggle.addEventListener('click', () => {
    dom.navMenu.classList.toggle('open');
  });

  // Cerrar menú al hacer click en enlaces
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      dom.navMenu.classList.remove('open');
    });
  });

  // Botones de copiado de snippets de Git
  document.querySelectorAll('.copy-cmd-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-copy');
      if (cmd) {
        copyToClipboard(cmd, 'Comando Git copiado');
      }
    });
  });
}

function setCategoryFilter(category) {
  state.activeCategory = category;
  dom.categorySelect.value = category;
  renderCategoryPills();
  renderResources();
}

function clearSearch() {
  dom.searchInput.value = '';
  dom.clearSearchBtn.style.display = 'none';
  state.searchQuery = '';
  renderResources();
}

function resetAllFilters() {
  state.activeCategory = 'all';
  state.searchQuery = '';
  state.sortBy = 'popular';
  state.onlyFavorites = false;

  dom.searchInput.value = '';
  dom.clearSearchBtn.style.display = 'none';
  dom.categorySelect.value = 'all';
  dom.sortSelect.value = 'popular';
  dom.favoritesFilterBtn.classList.remove('btn-primary');
  dom.favoritesFilterBtn.classList.add('btn-outline');

  renderCategoryPills();
  renderResources();
  showToast('Filtros restablecidos', 'info');
}

function updateMetrics() {
  if (dom.metricResources) dom.metricResources.textContent = `${resourcesData.length}+`;
  if (dom.metricCategories) dom.metricCategories.textContent = Object.keys(getCategories()).length;
}

// Exportar globalmente para eventos en HTML (inline handlers)
window.openResourceModal = openResourceModal;
window.closeModal = closeModal;
window.toggleFavorite = toggleFavorite;
window.copyToClipboard = copyToClipboard;
window.setCategoryFilter = setCategoryFilter;
window.clearSearch = clearSearch;
window.toggleOnlyFavorites = toggleOnlyFavorites;
