# 🚀 Dev HUB SENATI - Portal de Recursos Tecnológicos

> **Proyecto Colaborativo Académico**  
> **Curso:** Desarrollo Web / Tecnologías de la Información & Software  
> **Institución:** SENATI  
> **Stack:** HTML5 Semántico + CSS3 Moderno (Vanilla) + JavaScript ES6+  
> **Control de Versiones:** Git & GitHub

---

## 📋 Descripción del Proyecto

**Dev HUB SENATI** es una plataforma web interactiva diseñada para centralizar, categorizar y explorar recursos clave del ecosistema de la programación moderna (React, Node.js, Python, PostgreSQL, Flutter, Docker, Git, etc.). 

El proyecto fue desarrollado simulando un entorno de trabajo colaborativo real, aplicando buenas prácticas de control de versiones con Git y GitHub mediante el uso de **ramas temáticas (feature branches)**, **commits convencionales/descriptivos** y **Pull Requests (solicitudes de integración)** con revisión entre pares.

---

## 🎯 Cumplimiento de Requisitos Obligatorios

| # | Requisito Obligatorio | Implementación en el Proyecto | Archivo / Ubicación |
|---|-----------------------|--------------------------------|----------------------|
| **1** | **Página de INICIO** | Nombre del portal, descripción de bienvenida, métricas en vivo y barra de navegación accesible. | `index.html` (`#inicio`, `#navbar`) |
| **2** | **Catálogo de recursos** | 10 recursos curados (React, Node, Python, Postgres, Flutter, Git, Docker, Tailwind, Hugging Face, MongoDB) con nivel, tags y enlaces. | `app.js` (`resourcesData`), `index.html` (`#catalogo`) |
| **3** | **Filtrado por Categorías** | Filtrado dinámico mediante JavaScript por: *Frontend, Backend, Base de Datos, Móvil, Herramientas, Inteligencia Artificial*. | `app.js` (`setCategoryFilter`, `renderCategoryPills`) |
| **4** | **Buscador interactivo** | Input en tiempo real con debounce que busca por nombre, descripción, categoría y tags. | `app.js` (`setupEventListeners`, `searchInput`) |
| **5** | **Diseño adaptable (Responsive)** | Layout fluido con CSS Grid y Flexbox. Totalmente optimizado para PC, tablets y teléfonos móviles con menú responsive. | `style.css` (Media Queries `@media (max-width: 768px)`) |
| **6** | **Interactividad JS** | Sistema de favoritos persistente en `localStorage`, modal detallado con accesibilidad (tecla ESC), toasts animados y copiado rápido de enlaces y comandos Git. | `app.js` (`toggleFavorite`, `openResourceModal`, `showToast`) |
| **7** | **Información del Equipo** | Sección con tarjetas de los integrantes, sus roles, responsabilidades técnicas y las ramas asignadas en Git. | `index.html` (`#equipo`), `app.js` (`teamMembers`) |

---

## 👥 Equipo de Trabajo y Distribución de Responsabilidades

| Integrante | Rol Técnico | Responsabilidad en el Proyecto | Rama Asignada en Git |
|------------|-------------|--------------------------------|-----------------------|
| **Integrante 1** | **Git Master & Lead Architect** | Inicialización del repositorio, configuración de reglas de protección en GitHub, estructura semántica de `index.html`, revisión y aprobación de Pull Requests. | `feature/estructura-base` |
| **Integrante 2** | **UI/UX & CSS Specialist** | Paleta de colores SENATI/Dark Mode, variables CSS, tipografías Google Fonts, diseño responsivo (PC y Celular), menú hamburguesa y micro-animaciones. | `feature/estilos-responsive` |
| **Integrante 3** | **Frontend JS Developer** | Lógica en `app.js`, renderizado dinámico de recursos, motor de búsqueda en tiempo real, filtro por categoría, persistencia en `localStorage` y modales. | `feature/catalogo-logica-js` |
| **Integrante 4** | **QA Tester & Documentación** | Pruebas funcionales en múltiples navegadores y dispositivos, redacción de la guía de comandos Git en `README.md` y soporte en resolución de conflictos. | `feature/pruebas-documentacion` |

---

## 🌿 Flujo de Trabajo Colaborativo con Git y GitHub

Para asegurar la calidad del código y cumplir con la rúbrica de SENATI, se aplicó la siguiente metodología:

### 1. Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario-o-organizacion/devhub-senati.git
cd devhub-senati
```

### 2. Configurar la Identidad del Desarrollador
```bash
git config --global user.name "Tu Nombre Completo"
git config --global user.email "tu_correo@senati.pe"
```

### 3. Crear una Rama de Trabajo (Feature Branch)
> ⚠️ **Regla de oro:** Nunca realizar commits directos a la rama `main`.
```bash
# Formato: feature/<nombre-del-modulo>
git checkout -b feature/catalogo-filtros
```

### 4. Buenas Prácticas de Commits (Commits Convencionales)
Cada cambio debe ser atómico y utilizar prefijos semánticos:
- `feat:` Nueva funcionalidad añadida.
- `fix:` Corrección de un error o bug.
- `style:` Cambios visuales o ajustes de CSS sin alterar la lógica.
- `docs:` Modificaciones en documentación o comentarios.
- `refactor:` Optimización del código existente.

**Ejemplo de commit:**
```bash
git add app.js
git commit -m "feat(catalogo): agregar filtro reactivo por categorias y buscador"
```

### 5. Publicar la Rama en GitHub
```bash
git push -u origin feature/catalogo-filtros
```

### 6. Crear el Pull Request (PR) en GitHub
1. Ir al repositorio en GitHub.
2. Hacer clic en **"Compare & pull request"**.
3. Llenar la plantilla con:
   - **Título claro:** `feat: Implementación del catálogo interactivo`
   - **Descripción:** Detallar qué se agregó o modificó.
   - **Responsable:** Asignar al integrante autor.
   - **Revisor (Reviewer):** Asignar al Git Master o a otro compañero.
4. Tras la revisión cruzada y aprobación, se realiza el **Merge** a `main`.

---

## 📂 Estructura de Archivos del Proyecto

```text
Tarea/
├── index.html        # Estructura semántica, accesibilidad y contenedores dinámicos
├── style.css         # Sistema de diseño moderno, CSS Grid, Flexbox y media queries
├── app.js            # Lógica dinámica, filtrado, búsqueda, modal, favoritos y toasts
└── README.md         # Documentación técnica, roles y guía del flujo colaborativo
```

---

## 🖥️ Cómo Visualizar el Proyecto Localmente

1. Puedes abrir directamente el archivo `index.html` con cualquier navegador web moderno (Google Chrome, Microsoft Edge, Firefox, Brave).
2. O con Visual Studio Code, mediante la extensión **Live Server** (clic derecho en `index.html` > *Open with Live Server*).

---

## 🏆 Rúbrica de Evaluación SENATI
- [x] Estructura HTML5 limpia y semántica.
- [x] Hoja de estilo CSS propia (Vanilla), sin dependencias pesadas de frameworks.
- [x] Interactividad completa con JavaScript puro.
- [x] Control de versiones verificado mediante Git y GitHub con historial de commits y PRs.
- [x] Identificación clara de cada integrante y su contribución específica.
