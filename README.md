# Dev HUB SENATI - Portal de Recursos Tecnologicos

**Institucion:** SENATI  
**Direccion Zonal:** Lima - Callao / Escuela de Tecnologias de la Informacion  
**Curso:** Desarrollo Web & Control de Versiones  
**Tecnologias:** HTML5, CSS3, JavaScript ES6+, Git y GitHub  
**Repositorio:** [https://github.com/casasx25x/tarea-senati](https://github.com/casasx25x/tarea-senati)  
**Despliegue Web:** [https://casasx25x.github.io/tarea-senati/](https://casasx25x.github.io/tarea-senati/)  

---

## 1. Descripcion del Proyecto

Dev HUB SENATI es una plataforma web desarrollada de forma colaborativa para centralizar, catalogar y consultar herramientas y documentacion oficial de desarrollo de software (React, Node.js, Python, PostgreSQL, Flutter, Git, Docker, Tailwind CSS, MongoDB).

El desarrollo se ejecuto aplicando buenas practicas profesionales de control de versiones con Git y GitHub:
- Trabajo mediante ramas tematicas independientes (feature branches).
- Commits semanticos y atomicos que describen puntualmente cada modificacion.
- Solicitudes de integracion (Pull Requests) para revision y fusion de codigo en la rama principal (`main`).

---

## 2. Integrantes del Equipo de Trabajo

| Integrante | Rol Tecnico | Responsabilidad Asignada | Rama de Trabajo en Git |
|------------|-------------|--------------------------|------------------------|
| **Cristhian Santos** | Coordinador de Proyecto & Logica Frontend | Administracion del repositorio remoto en GitHub, diseno de la logica JavaScript (motor de busqueda reactivo, filtrado por tecnologias, almacenamiento de favoritos en LocalStorage y modales dinamicos). | `feature/catalogo-logica-js` |
| **Wilian Coveñas** | Disenador UI/UX & Maquetacion CSS | Maquetado semantico en HTML5, arquitectura de estilos en CSS3 (variables, Flexbox y CSS Grid), optimizacion responsiva para PC y telefonos moviles, y redaccion de la documentacion tecnica. | `feature/estilos-responsive` |

---

## 3. Matriz de Cumplimiento de Requisitos Obligatorios

| Item | Requisito Obligatorio | Implementacion Tecnica | Archivo Fuente |
|------|-----------------------|------------------------|----------------|
| 1 | Pagina de Inicio | Encabezado institucional con nombre del portal, logotipo, descripcion clara de proposito y barra de navegacion fija con enlaces directos. | `index.html` (`#inicio`, `#navbar`) |
| 2 | Catalogo de recursos | Coleccion de 9 recursos de programacion con nivel de dificultad, casos de uso, tags tecnicos y enlaces oficiales (supera el minimo de 6). | `app.js` (`resourcesData`) |
| 3 | Filtrado por Categorias | Filtrado dinamico con JavaScript mediante tarjetas de acceso rapido y selector desplegable sincronizado (Frontend, Backend, Base de Datos, Movil, Herramientas). | `app.js` (`setCategoryFilter`) |
| 4 | Buscador interactivo | Campo de texto reactivo con evento input y debounce que localiza recursos por coincidencia en nombre, descripcion, categoria o palabras clave. | `app.js` (`searchInput`) |
| 5 | Diseno adaptable (Responsive) | Hojas de estilo estructuradas con CSS Grid y Flexbox. En pantallas moviles (< 768px), el menu se convierte en panel hamburguesa y las columnas se ajustan verticalmente. | `style.css` (`@media (max-width: 768px)`) |
| 6 | Interactividad con JavaScript | Ventana modal con informacion extendida accesible mediante teclado (tecla Escape), favoritos persistentes en LocalStorage y notificaciones toast informativas. | `app.js` (`openResourceModal`, `toggleFavorite`, `showToast`) |
| 7 | Informacion del Equipo | Seccion estructurada con fichas tecnicas de los dos integrantes, roles, responsabilidades y vinculos a sus ramas de desarrollo. | `index.html` (`#equipo`), `app.js` (`teamMembers`) |

---

## 4. Metodologia de Trabajo Git & GitHub

El equipo adopto el flujo de trabajo estandarizado basado en ramas de caracteristica:

### Paso 1: Clonar el proyecto
```bash
git clone https://github.com/casasx25x/tarea-senati.git
cd tarea-senati
```

### Paso 2: Crear rama individual asignada
```bash
git checkout -b feature/catalogo-logica-js
```

### Paso 3: Confirmar cambios con commits descriptivos
```bash
git add app.js
git commit -m "feat(catalogo): implementar motor de busqueda y filtros"
```

### Paso 4: Publicar rama en GitHub
```bash
git push origin feature/catalogo-logica-js
```

### Paso 5: Solicitud de Integracion (Pull Request)
En la interfaz de GitHub, se crea la solicitud de integracion desde la rama de trabajo hacia `main`. Tras la revision de codigo correspondiente, se procede a la fusion limpia sin conflictos.

---

## 5. Estructura de Archivos del Repositorio

```text
tarea-senati/
|-- index.html     # Estructura semantica HTML5 y maquetado de secciones
|-- style.css      # Sistema de diseno institucional SENATI, responsivo y sobrio
|-- app.js         # Logica de negocio, catalogo, filtros, busqueda y almacenamiento
|-- README.md      # Memoria tecnica del proyecto y guia colaborativa
`-- .gitignore     # Archivo de exclusion de temporales
```

---

## 6. Instrucciones de Ejecucion Local

1. Clonar o descargar la carpeta del proyecto.
2. Abrir el archivo `index.html` directamente en cualquier navegador web moderno (Google Chrome, Microsoft Edge, Mozilla Firefox).
3. No requiere instalacion de librerias externas ni servidores pesados (JavaScript puro y CSS nativo).
