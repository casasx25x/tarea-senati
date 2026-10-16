/**
 * DEV HUB SENATI - MODULO PRINCIPAL JAVASCRIPT
 * Arquitectura modular y funcional para la gestion de recursos tecnologicos.
 * Funcionalidades: Catalogo dinamico, motor de busqueda reactivo, filtrado por categorias,
 * gestion de favoritos con LocalStorage, ventana modal accesible y notificaciones toast.
 */

// 1. Catalogo de Recursos Tecnologicos (Ecosistema de Programacion)
const resourcesData = [
  {
    id: 'res-react',
    title: 'React.js',
    category: 'Frontend',
    icon: 'fa-brands fa-react',
    iconColor: '#00d8ff',
    level: 'Intermedio',
    popularity: 98,
    shortDesc: 'Biblioteca de JavaScript declarativa y basada en componentes para la construccion de interfaces web interactivas.',
    fullDesc: 'React facilita el diseno de vistas basadas en estados y renderiza eficientemente los componentes correspondientes cuando los datos cambian. Es ampliamente utilizado en la industria para el desarrollo de Single Page Applications (SPA).',
    tags: ['JavaScript', 'UI', 'Componentes', 'Virtual DOM'],
    officialUrl: 'https://react.dev',
    docsUrl: 'https://react.dev/learn',
    useCase: 'Desarrollo de aplicaciones web de una sola pagina, dashboards y portales interactivos.'
  },
  {
    id: 'res-nodejs',
    title: 'Node.js',
    category: 'Backend',
    icon: 'fa-brands fa-node-js',
    iconColor: '#539e43',
    level: 'Intermedio',
    popularity: 95,
    shortDesc: 'Entorno de ejecucion para JavaScript del lado del servidor, construido con el motor V8 de alto rendimiento.',
    fullDesc: 'Node.js opera mediante un modelo asincrono no bloqueante orientado a eventos, optimizando el uso de recursos para aplicaciones en red y el desarrollo de APIs RESTful escalables.',
    tags: ['JavaScript', 'Servidor', 'API REST', 'Asincrono'],
    officialUrl: 'https://nodejs.org',
    docsUrl: 'https://nodejs.org/en/docs',
    useCase: 'Construccion de APIs REST, microservicios y sistemas en tiempo real.'
  },
  {
    id: 'res-python',
    title: 'Python',
    category: 'Backend',
    icon: 'fa-brands fa-python',
    iconColor: '#3776ab',
    level: 'Principiante',
    popularity: 99,
    shortDesc: 'Lenguaje de programacion multiproposito reconocido por su sintaxis clara, versatilidad y amplia biblioteca estandar.',
    fullDesc: 'Python permite el desarrollo agil en backend con frameworks como FastAPI y Django, asi como en analisis de datos, automatizacion de procesos e implementacion de inteligencia artificial.',
    tags: ['Lenguaje', 'Backend', 'Automatizacion', 'Ciencia de Datos'],
    officialUrl: 'https://www.python.org',
    docsUrl: 'https://docs.python.org/3/',
    useCase: 'Desarrollo de servicios web, scripts de automatizacion y procesamiento de datos.'
  },
  {
    id: 'res-postgresql',
    title: 'PostgreSQL',
    category: 'Base de Datos',
    icon: 'fa-solid fa-database',
    iconColor: '#336791',
    level: 'Intermedio',
    popularity: 92,
    shortDesc: 'Sistema de gestion de bases de datos relacional y orientado a objetos de codigo abierto de grado empresarial.',
    fullDesc: 'PostgreSQL destaca por su apego a estandares SQL, soporte nativo de transacciones ACID y manejo de tipos de datos complejos como JSONB y consultas geoespaciales avanzadas.',
    tags: ['SQL', 'Relacional', 'ACID', 'JSONB'],
    officialUrl: 'https://www.postgresql.org',
    docsUrl: 'https://www.postgresql.org/docs/',
    useCase: 'Almacenamiento transaccional seguro y modelado de datos para aplicaciones empresariales.'
  },
  {
    id: 'res-flutter',
    title: 'Flutter & Dart',
    category: 'Movil',
    icon: 'fa-solid fa-mobile-screen-button',
    iconColor: '#02569b',
    level: 'Intermedio',
    popularity: 90,
    shortDesc: 'Kit de desarrollo de interfaz de usuario de Google para compilar aplicaciones multiplataforma desde un unico codigo fuente.',
    fullDesc: 'Flutter compila a codigo de maquina nativo tanto para iOS como para Android, ofreciendo componentes personalizables y un motor de renderizado grafico de alta velocidad.',
    tags: ['Dart', 'Multiplataforma', 'Android', 'iOS'],
    officialUrl: 'https://flutter.dev',
    docsUrl: 'https://docs.flutter.dev',
    useCase: 'Desarrollo de aplicaciones nativas para telefonos inteligentes y tabletas.'
  },
  {
    id: 'res-git-github',
    title: 'Git & GitHub',
    category: 'Herramientas',
    icon: 'fa-brands fa-github',
    iconColor: '#ffffff',
    level: 'Principiante',
    popularity: 100,
    shortDesc: 'Sistema de control de versiones distribuido y plataforma en la nube para trabajo colaborativo en proyectos de software.',
    fullDesc: 'Permite el seguimiento del historial de cambios, gestion de ramas paralelas de trabajo, revision de codigo mediante Pull Requests e integracion continua en equipos de desarrollo.',
    tags: ['Control de Versiones', 'Colaboracion', 'Ramas', 'Pull Requests'],
    officialUrl: 'https://git-scm.com',
    docsUrl: 'https://docs.github.com',
    useCase: 'Control de versiones del codigo fuente y gestion colaborativa del proyecto.'
  },
  {
    id: 'res-docker',
    title: 'Docker',
    category: 'Herramientas',
    icon: 'fa-brands fa-docker',
    iconColor: '#2496ed',
    level: 'Avanzado',
    popularity: 93,
    shortDesc: 'Plataforma de virtualizacion basada en contenedores para empaquetar software junto a todas sus dependencias.',
    fullDesc: 'Garantiza la portabilidad de aplicaciones entre entornos locales y servidores de produccion mediante contenedores ligeros y reproducibles.',
    tags: ['Contenedores', 'Infraestructura', 'DevOps', 'Aislamiento'],
    officialUrl: 'https://www.docker.com',
    docsUrl: 'https://docs.docker.com',
    useCase: 'Estandarizacion de entornos de ejecucion y despliegue de microservicios.'
  },
  {
    id: 'res-tailwind',
    title: 'Tailwind CSS',
    category: 'Frontend',
    icon: 'fa-brands fa-css3-alt',
    iconColor: '#38bdf8',
    level: 'Principiante',
    popularity: 91,
    shortDesc: 'Framework de CSS enfocado en clases de utilidad para estructurar disenos modernos de forma directa y flexible.',
    fullDesc: 'Acelera la creacion de interfaces con un sistema de diseno coherente, soporte para diseno responsivo y generacion de hojas de estilo ligeras mediante purgado de utilidades no utilizadas.',
    tags: ['CSS', 'Diseno Web', 'Responsive', 'Utilidades'],
    officialUrl: 'https://tailwindcss.com',
    docsUrl: 'https://tailwindcss.com/docs',
    useCase: 'Maquetacion rapida y estandarizada de interfaces web sin salir del markup.'
  },
  {
    id: 'res-mongodb',
    title: 'MongoDB',
    category: 'Base de Datos',
    icon: 'fa-solid fa-leaf',
    iconColor: '#47a248',
    level: 'Principiante',
    popularity: 89,
    shortDesc: 'Base de datos orientada a documentos NoSQL con esquemas flexibles y almacenamiento en formato BSON.',
    fullDesc: 'Diseñada para desarrolladores modernos que requieren alta velocidad en el modelado de datos y escalabilidad horizontal simple para colecciones heterogeneas de informacion.',
    tags: ['NoSQL', 'Documentos', 'BSON', 'Escalabilidad'],
    officialUrl: 'https://www.mongodb.com',
    docsUrl: 'https://www.mongodb.com/docs',
    useCase: 'Almacenamiento de catalogos variables, registros de eventos y prototipado agil.'
  }
];

// 2. Informacion del Equipo de Trabajo SENATI (2 Estudiantes)
const teamMembers = [
  {
    name: 'Cristhian Santos',
    role: 'Coordinador de Proyecto & Logica Frontend',
    responsibility: 'Gestion del repositorio en GitHub, administracion del flujo de ramas (Git Flow), desarrollo de la logica JavaScript (catalogo dinamico, motor de busqueda y sistema de favoritos en LocalStorage).',
    branch: 'feature/catalogo-logica-js',
    avatarIcon: 'fa-user-gear',
    githubUrl: 'https://github.com/casasx25x'
  },
  {
    name: 'Wilian Coveñas',
    role: 'Disenador UI/UX & Maquetacion CSS',
    responsibility: 'Diseno visual institucional bajo estandares SENATI, maquetado semantico en HTML5, adaptabilidad responsiva para PC y celulares mediante CSS Grid/Flexbox, accesibilidad y documentacion tecnica.',
    branch: 'feature/estilos-responsive',
    avatarIcon: 'fa-user-pen',
    githubUrl: 'https://github.com/casasx25x/tarea-senati'
  }
];

// 3. Estado Central de la Aplicacion
const state = {
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'popular',
  onlyFavorites: false,
  favorites: JSON.parse(localStorage.getItem('devhub_senati_favs') || '[]')
};

// 4. Referencias al Document Object Model (DOM)
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

// 5. Inicializacion de Componentes
document.addEventListener('DOMContentLoaded', () => {
  renderCategoryPills();
  populateCategorySelect();
  renderResources();
  renderTeam();
  updateFavoritesBadge();
  setupEventListeners();
  updateMetrics();
});

// 6. Funciones de Renderizado
function getCategories() {
  const categoriesMap = {};
  resourcesData.forEach(r => {
    categoriesMap[r.category] = (categoriesMap[r.category] || 0) + 1;
  });
  return categoriesMap;
}

function renderCategoryPills() {
  const categories = getCategories();
  const categoryIcons = {
    'Frontend': 'fa-solid fa-code',
    'Backend': 'fa-solid fa-server',
    'Base de Datos': 'fa-solid fa-database',
    'Movil': 'fa-solid fa-mobile-screen',
    'Herramientas': 'fa-solid fa-screwdriver-wrench'
  };

  let html = `
    <div class="category-card ${state.activeCategory === 'all' ? 'active' : ''}" data-cat="all">
      <div class="category-icon" style="background: rgba(0, 80, 157, 0.15); color: #38bdf8;">
        <i class="fa-solid fa-layer-group"></i>
      </div>
      <div class="category-name">Todas</div>
      <div class="category-count">${resourcesData.length} recursos</div>
    </div>
  `;

  Object.entries(categories).forEach(([name, count]) => {
    const icon = categoryIcons[name] || 'fa-solid fa-cube';
    const isActive = state.activeCategory === name ? 'active' : '';
    html += `
      <div class="category-card ${isActive}" data-cat="${name}">
        <div class="category-icon" style="background: rgba(0, 122, 255, 0.12); color: #0284c7;">
          <i class="${icon}"></i>
        </div>
        <div class="category-name">${name}</div>
        <div class="category-count">${count} recursos</div>
      </div>
    `;
  });

  dom.categoriesGrid.innerHTML = html;

  dom.categoriesGrid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const selected = card.getAttribute('data-cat');
      setCategoryFilter(selected);
    });
  });
}

function populateCategorySelect() {
  const categories = getCategories();
  let html = `<option value="all">Todas las Categorias</option>`;
  Object.keys(categories).forEach(cat => {
    html += `<option value="${cat}">${cat}</option>`;
  });
  dom.categorySelect.innerHTML = html;
}

function getFilteredResources() {
  return resourcesData.filter(item => {
    const matchesCategory = state.activeCategory === 'all' || item.category === state.activeCategory;

    const query = state.searchQuery.trim().toLowerCase();
    const matchesSearch = !query || 
      item.title.toLowerCase().includes(query) ||
      item.shortDesc.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query));

    const matchesFavorites = !state.onlyFavorites || state.favorites.includes(item.id);

    return matchesCategory && matchesSearch && matchesFavorites;
  }).sort((a, b) => {
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

function renderResources() {
  const filtered = getFilteredResources();

  dom.resultsCounter.innerHTML = `Mostrando <strong>${filtered.length}</strong> de <strong>${resourcesData.length}</strong> recursos`;
  renderActiveFilterTags();

  if (filtered.length === 0) {
    dom.resourcesGrid.innerHTML = '';
    dom.emptyState.style.display = 'block';
    return;
  }

  dom.emptyState.style.display = 'none';

  dom.resourcesGrid.innerHTML = filtered.map(item => {
    const isFav = state.favorites.includes(item.id);
    const tagsHtml = item.tags.map(t => `<span class="tag">${t}</span>`).join('');

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
            <button class="fav-btn ${isFav ? 'active' : ''}" title="${isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}" onclick="toggleFavorite('${item.id}')">
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

function renderActiveFilterTags() {
  let tags = [];

  if (state.activeCategory !== 'all') {
    tags.push(`Categoria: ${state.activeCategory} <i class="fa-solid fa-xmark" onclick="setCategoryFilter('all')"></i>`);
  }
  if (state.searchQuery.trim()) {
    tags.push(`Busqueda: "${state.searchQuery}" <i class="fa-solid fa-xmark" onclick="clearSearch()"></i>`);
  }
  if (state.onlyFavorites) {
    tags.push(`Solo Favoritos <i class="fa-solid fa-xmark" onclick="toggleOnlyFavorites()"></i>`);
  }

  dom.activeFilterTags.innerHTML = tags.map(tag => `<span class="active-tag">${tag}</span>`).join('');
}

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
        <strong>Rama asignada en GitHub:</strong>
        <code>${member.branch}</code>
      </div>

      <div class="team-socials">
        <a href="${member.githubUrl}" target="_blank" rel="noopener noreferrer" class="team-social-btn" title="Perfil GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
        <button class="team-social-btn" title="Copiar nombre de rama" onclick="copyToClipboard('${member.branch}', 'Nombre de rama copiado')">
          <i class="fa-regular fa-copy"></i>
        </button>
      </div>
    </div>
  `).join('');
}

// 7. Favoritos con LocalStorage
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

  localStorage.setItem('devhub_senati_favs', JSON.stringify(state.favorites));
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
    showToast('Mostrando unicamente recursos guardados en favoritos', 'info');
  } else {
    dom.favoritesFilterBtn.classList.remove('btn-primary');
    dom.favoritesFilterBtn.classList.add('btn-outline');
  }
  renderResources();
}

// 8. Modales Informativos
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
        <span class="modal-meta-label">Nivel Tecnico</span>
        <span class="modal-meta-val">${item.level}</span>
      </div>
      <div class="modal-meta-item">
        <span class="modal-meta-label">Indice de Adopcion</span>
        <span class="modal-meta-val">${item.popularity}% en la industria</span>
      </div>
      <div class="modal-meta-item" style="grid-column: span 2;">
        <span class="modal-meta-label">Aplicacion Recomendada</span>
        <span class="modal-meta-val">${item.useCase}</span>
      </div>
    </div>

    <h4>Etiquetas</h4>
    <div class="resource-tags" style="margin-top: 0.5rem;">
      ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>
  `;

  dom.modalFooter.innerHTML = `
    <button class="btn btn-secondary" onclick="closeModal()">Cerrar</button>
    <a href="${item.docsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
      <i class="fa-solid fa-book"></i> Documentacion
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

// 9. Mensajes Toast y Portapapeles
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
  }, 3000);
}

function copyToClipboard(text, successMessage = 'Copiado al portapapeles') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMessage, 'success');
  }).catch(() => {
    showToast('No se pudo copiar el texto', 'warning');
  });
}

// 10. Controladores de Eventos
function setupEventListeners() {
  let debounceTimeout;
  dom.searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimeout);
    dom.clearSearchBtn.style.display = e.target.value ? 'block' : 'none';
    debounceTimeout = setTimeout(() => {
      state.searchQuery = e.target.value;
      renderResources();
    }, 180);
  });

  dom.clearSearchBtn.addEventListener('click', clearSearch);

  dom.categorySelect.addEventListener('change', (e) => {
    setCategoryFilter(e.target.value);
  });

  dom.sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderResources();
  });

  dom.resetFiltersBtn.addEventListener('click', resetAllFilters);
  dom.emptyResetBtn.addEventListener('click', resetAllFilters);

  dom.favoritesFilterBtn.addEventListener('click', toggleOnlyFavorites);

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

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeGitGuideModal();
    }
  });

  dom.navToggle.addEventListener('click', () => {
    dom.navMenu.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      dom.navMenu.classList.remove('open');
    });
  });

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
  if (dom.metricResources) dom.metricResources.textContent = `${resourcesData.length}`;
  if (dom.metricCategories) dom.metricCategories.textContent = Object.keys(getCategories()).length;
}

window.openResourceModal = openResourceModal;
window.closeModal = closeModal;
window.toggleFavorite = toggleFavorite;
window.copyToClipboard = copyToClipboard;
window.setCategoryFilter = setCategoryFilter;
window.clearSearch = clearSearch;
window.toggleOnlyFavorites = toggleOnlyFavorites;
