# DOCUMENTO FINAL - PROGRAMACIÓN III
# ShopEasy - Sistema de Comercio Electrónico

---

## PORTADA

**Instituto Tecnológico de Las Américas (ITLA)**
**Carrera:** Ingeniería en Desarrollo de Software
**Asignatura:** Programación III
**Título del Proyecto:** ShopEasy - Sistema de Comercio Electrónico
**Estudiante:** Starling Daniel Rosario Franco
**Matrícula:** 20186931
**Fecha:** 14 de abril de 2026

---

## ÍNDICE

1. Introducción
2. Estrategia de Trabajo (Planificación)
   - 2.1 Nombre del Proyecto
   - 2.2 Tecnologías Utilizadas
   - 2.3 Objetivo del Proyecto
   - 2.4 Alcance del Proyecto
   - 2.5 Cronograma del Proyecto
   - 2.6 Definición del Primer Release
3. Metodología Scrum
   - 3.1 Tareas a Ejecutar
   - 3.2 Equipo de Trabajo
   - 3.3 Herramientas Utilizadas
   - 3.4 Épicas del Proyecto
   - 3.5 Ceremonias de Scrum
   - 3.6 Historias de Usuario
4. Plan de Pruebas
   - 4.1 Requerimientos Funcionales y No Funcionales
   - 4.2 Criterios de Aceptación y Rechazo
   - 4.3 Herramientas de Pruebas
   - 4.4 Cronograma de Ejecución de Pruebas
   - 4.5 Plantillas para Casos de Prueba
   - 4.6 Equipo de Pruebas y Responsabilidades
   - 4.7 Plan de Automatización de Pruebas
   - 4.8 Ejecución y Demostración de Automatización
5. Conclusiones
6. Bibliografía
7. Links y Entregables

---

## 1. INTRODUCCIÓN

El presente documento contiene el plan completo de desarrollo para el sistema **ShopEasy**, una plataforma de comercio electrónico desarrollada como proyecto final de la asignatura Programación III. El sistema fue diseñado siguiendo la metodología ágil Scrum, lo que permitió organizar el trabajo en sprints definidos, con roles establecidos y ceremonias de equipo claras.

ShopEasy nace de la necesidad de contar con una solución sencilla y funcional que permita a pequeños negocios vender sus productos en línea sin la complejidad que implica plataformas empresariales como Shopify o WooCommerce. La aplicación permite a los clientes registrarse, explorar un catálogo de productos, gestionar su carrito de compras y generar órdenes de pedido. Desde el lado administrativo, permite gestionar el inventario de productos.

A lo largo de este documento se detallan los requerimientos del sistema, las historias de usuario, el plan de pruebas y las evidencias del trabajo realizado.

---

## 2. ESTRATEGIA DE TRABAJO

### 2.1 Nombre del Proyecto de Software

**ShopEasy - Sistema de Comercio Electrónico**

El nombre refleja la propuesta de valor principal del sistema: una experiencia de compra sencilla (*easy*) tanto para el usuario final como para el administrador del negocio.

### 2.2 Tecnologías para Aplicar

| Capa | Tecnología | Versión | Justificación |
|------|-----------|---------|---------------|
| Backend | Laravel (PHP) | 11.x | Framework robusto con soporte nativo para APIs RESTful, autenticación y ORM |
| Frontend | React.js | 18.x | Biblioteca reactiva ideal para interfaces dinámicas de usuario |
| Base de datos | PostgreSQL | 17 | Motor de base de datos relacional confiable, de código abierto y escalable |
| Autenticación | Laravel Sanctum | 4.x | Manejo seguro de tokens para SPA |
| Estilos | Tailwind CSS | 3.x | Utilidades CSS de bajo nivel para diseño rápido y consistente |
| Testing Backend | PHPUnit | 11.x | Framework estándar para pruebas en PHP/Laravel |
| Testing E2E | Cypress | 13.x | Herramienta de pruebas end-to-end para aplicaciones web |
| Control de versiones | Git + GitHub | — | Gestión del código fuente y colaboración |
| Gestión de proyecto | Jira | — | Seguimiento de tareas, sprints e historias de usuario |
| Servidor de desarrollo | Vite | 5.x | Bundler ultrarrápido para el proyecto React |

### 2.3 Objetivo del Proyecto

Desarrollar una plataforma de comercio electrónico funcional llamada ShopEasy que permita a los usuarios explorar productos, gestionar un carrito de compras y realizar pedidos, mientras que los administradores puedan gestionar el inventario de productos y consultar las órdenes generadas. El sistema se construirá utilizando una arquitectura de API RESTful (Laravel) consumida por una interfaz de usuario en React.js, aplicando buenas prácticas de desarrollo de software y la metodología Scrum como marco de trabajo ágil.

### 2.4 Alcance del Proyecto

**Dentro del alcance (IN SCOPE):**
- Módulo de autenticación: registro, inicio de sesión y cierre de sesión de usuarios.
- Catálogo de productos con categorías, nombre, descripción, precio e imagen.
- Funcionalidad de búsqueda y filtrado por categoría.
- Carrito de compras: agregar, eliminar y actualizar cantidades de productos.
- Proceso de checkout y generación de órdenes de pedido.
- Panel de administración básico: CRUD de productos.
- Visualización del historial de órdenes del usuario.
- API RESTful documentada.
- Pruebas automatizadas de los módulos principales.

**Fuera del alcance (OUT OF SCOPE):**
- Integración con pasarelas de pago reales (Stripe, PayPal, etc.).
- Aplicación móvil nativa.
- Sistema de reseñas y calificaciones de productos.
- Módulo de envíos y logística.
- Soporte multi-idioma.
- Módulo de reportes y analíticas avanzadas.

### 2.5 Cronograma del Proyecto

| # | Actividad | Fecha Inicio | Fecha Fin | Responsable | Estado |
|---|-----------|-------------|-----------|-------------|--------|
| 1 | Levantamiento de requerimientos | 14/04/2026 | 14/04/2026 | Starling Rosario | Completado |
| 2 | Diseño de arquitectura y BD | 14/04/2026 | 15/04/2026 | Starling Rosario | Completado |
| 3 | Configuración del entorno de desarrollo | 14/04/2026 | 14/04/2026 | Starling Rosario | Completado |
| **Sprint 1** | | | | | |
| 4 | Módulo de autenticación (backend) | 14/04/2026 | 16/04/2026 | Starling Rosario | En progreso |
| 5 | Módulo catálogo de productos (backend) | 16/04/2026 | 18/04/2026 | Starling Rosario | Pendiente |
| 6 | Módulo carrito de compras (backend) | 18/04/2026 | 20/04/2026 | Starling Rosario | Pendiente |
| 7 | Frontend: Login, Registro, Catálogo | 18/04/2026 | 22/04/2026 | Starling Rosario | Pendiente |
| 8 | Frontend: Carrito y Checkout | 22/04/2026 | 25/04/2026 | Starling Rosario | Pendiente |
| 9 | Sprint 1 Review & Retrospectiva | 27/04/2026 | 27/04/2026 | Starling Rosario | Pendiente |
| **Sprint 2** | | | | | |
| 10 | Panel de administración (backend) | 28/04/2026 | 02/05/2026 | Starling Rosario | Pendiente |
| 11 | Frontend: Admin panel | 02/05/2026 | 06/05/2026 | Starling Rosario | Pendiente |
| 12 | Implementación de pruebas unitarias | 06/05/2026 | 09/05/2026 | Starling Rosario | Pendiente |
| 13 | Sprint 2 Review & Retrospectiva | 11/05/2026 | 11/05/2026 | Starling Rosario | Pendiente |
| **Sprint 3** | | | | | |
| 14 | Pruebas E2E automatizadas (Cypress) | 12/05/2026 | 16/05/2026 | Starling Rosario | Pendiente |
| 15 | Corrección de bugs | 16/05/2026 | 20/05/2026 | Starling Rosario | Pendiente |
| 16 | Documentación final | 20/05/2026 | 23/05/2026 | Starling Rosario | Pendiente |
| 17 | Sprint 3 Review & Entrega final | 25/05/2026 | 25/05/2026 | Starling Rosario | Pendiente |

### 2.6 Definición del Primer Release

El **Release 1.0** corresponde al Sprint 1 y comprende las funcionalidades core del sistema, aquellas que permiten al usuario interactuar con el catálogo y realizar compras básicas.

**Funcionalidades incluidas en el Release 1.0:**
1. Registro de cuenta de usuario con email y contraseña.
2. Inicio de sesión y cierre de sesión (con token de autenticación).
3. Listado de productos con nombre, imagen, precio y categoría.
4. Vista de detalle de producto.
5. Búsqueda de productos por nombre.
6. Filtro de productos por categoría.
7. Carrito de compras: agregar, eliminar y actualizar cantidades.
8. Checkout básico: ingresar dirección de entrega y confirmar pedido.
9. Confirmación de orden generada.

**Requerimientos Funcionales del Release 1.0:**

| ID | Requerimiento | Descripción |
|----|---------------|-------------|
| RF-01 | Registro de usuario | El sistema permite crear una cuenta con nombre, email y contraseña |
| RF-02 | Autenticación | El sistema verifica credenciales y emite un token de acceso |
| RF-03 | Listado de productos | El sistema muestra todos los productos activos con sus datos principales |
| RF-04 | Detalle de producto | El sistema muestra la información completa de un producto seleccionado |
| RF-05 | Búsqueda de productos | El sistema filtra productos en tiempo real por nombre |
| RF-06 | Filtro por categoría | El sistema muestra únicamente productos de la categoría seleccionada |
| RF-07 | Gestión del carrito | El usuario puede agregar, eliminar y modificar cantidades en su carrito |
| RF-08 | Checkout y orden | El usuario puede confirmar su pedido indicando dirección de entrega |
| RF-09 | Confirmación de orden | El sistema genera una orden con estado "pendiente" y muestra el resumen |

**Requerimientos No Funcionales del Release 1.0:**

| ID | Requerimiento | Descripción |
|----|---------------|-------------|
| RNF-01 | Seguridad | Contraseñas almacenadas con hash bcrypt. Autenticación vía Sanctum tokens |
| RNF-02 | Rendimiento | El tiempo de respuesta de la API no debe superar los 2 segundos bajo carga normal |
| RNF-03 | Usabilidad | La interfaz debe ser intuitiva y funcionar correctamente en navegadores modernos |
| RNF-04 | Disponibilidad | El sistema debe estar disponible durante las horas de evaluación |
| RNF-05 | Escalabilidad | La arquitectura debe permitir agregar módulos sin refactorización mayor |
| RNF-06 | Mantenibilidad | El código debe seguir los estándares PSR-12 (Laravel) y ESLint (React) |
| RNF-07 | Compatibilidad | Compatible con Chrome, Firefox y Edge en sus versiones actuales |

---

## 3. METODOLOGÍA SCRUM

### 3.1 Definición de Tareas a Ejecutar

Las tareas se organizan en el backlog del producto y se asignan a sprints según su prioridad. A continuación se listan las principales tareas del backlog:

**Backend (Laravel):**
- Configurar proyecto Laravel con Sanctum
- Diseñar y ejecutar migraciones de base de datos
- Implementar AuthController (register, login, logout)
- Implementar ProductController (CRUD)
- Implementar CategoryController
- Implementar CartController (add, update, remove, get)
- Implementar OrderController (checkout, list, show)
- Proteger rutas con middleware auth:sanctum
- Escribir seeders con datos de prueba

**Frontend (React):**
- Configurar proyecto React con Vite y Tailwind
- Implementar contexto de autenticación (AuthContext)
- Crear páginas: Login, Register, Home, ProductDetail, Cart, Checkout, OrderConfirmation
- Implementar servicio de API (axios)
- Crear rutas protegidas (ProtectedRoute)
- Componente Navbar con estado del carrito

**Testing:**
- Escribir pruebas unitarias PHPUnit para Auth, Products, Cart, Orders
- Configurar Cypress para pruebas E2E
- Escribir prueba E2E: flujo completo de compra

**DevOps:**
- Crear repositorio en GitHub
- Configurar .env.example
- Crear README con instrucciones de instalación
- Crear historias de usuario en Jira

### 3.2 Equipo de Trabajo

Al ser un proyecto individual, el desarrollador asume todos los roles del equipo Scrum:

| Rol | Nombre | Responsabilidades | Habilidades Requeridas |
|-----|--------|-------------------|----------------------|
| Product Owner | Starling Daniel Rosario Franco | Definir y priorizar el backlog, validar que las funcionalidades cumplan los objetivos del negocio | Visión del producto, comunicación, toma de decisiones |
| Scrum Master | Starling Daniel Rosario Franco | Facilitar las ceremonias Scrum, remover impedimentos, asegurar el cumplimiento del proceso | Conocimiento de Scrum, liderazgo, resolución de conflictos |
| Desarrollador Full Stack | Starling Daniel Rosario Franco | Diseñar la arquitectura, desarrollar backend (Laravel), frontend (React), y pruebas automáticas | PHP, Laravel, JavaScript, React, PostgreSQL, Git, PHPUnit, Cypress |
| QA Engineer | Starling Daniel Rosario Franco | Diseñar y ejecutar casos de prueba, documentar resultados, reportar defectos | Pruebas manuales, automatización con Cypress, PHPUnit |

### 3.3 Herramientas que se Utilizan

| Herramienta | Categoría | Propósito |
|-------------|-----------|-----------|
| **Jira** | Gestión de proyectos | Crear y gestionar el backlog, sprints, historias de usuario y épicas. Se elige Jira por ser la herramienta estándar en la industria para equipos ágiles |
| **GitHub** | Control de versiones | Almacenar el código fuente, controlar versiones y facilitar revisiones de código |
| **VS Code** | IDE | Entorno principal de desarrollo para frontend y backend |
| **Postman** | Testing de API | Documentar, probar y validar los endpoints de la API REST manualmente |
| **TablePlus** | Gestor de BD | Visualizar y gestionar la base de datos PostgreSQL durante el desarrollo |
| **Cypress** | Testing E2E | Automatizar pruebas de flujos completos de usuario en el navegador |
| **PHPUnit** | Testing unitario | Pruebas automatizadas de los módulos del backend |
| **Slack** (simulado) | Comunicación | Canal de comunicación del equipo para updates diarios y bloqueos |
| **Figma** | Diseño UI | Prototipos básicos de las pantallas principales del sistema |

### 3.4 Épicas del Proyecto

Las épicas agrupan historias de usuario relacionadas con un objetivo común dentro del sistema. Los identificadores US-XX utilizados en secciones 3.6 y 4 son códigos internos de este documento para trazabilidad entre historias y casos de prueba; en Jira cada ítem recibe el código de ticket del proyecto automáticamente.

| Épica | Descripción | Historias Incluidas |
|-------|-------------|---------------------|
| Gestión de Usuarios | Todo lo relacionado con el registro, autenticación y perfil de usuarios | Registro de cuenta, Inicio de sesión, Cierre de sesión |
| Catálogo de Productos | Funcionalidades de exploración y búsqueda del catálogo de productos | Explorar catálogo, Ver detalle de producto, Buscar por nombre, Filtrar por categoría |
| Carrito y Checkout | Proceso completo de selección de productos y generación de pedidos | Agregar al carrito, Gestionar carrito, Realizar checkout y orden |
| Administración | Herramientas para que el administrador gestione el sistema | Gestionar productos (CRUD), Consultar órdenes de clientes |

### 3.5 Ceremonias de Scrum

#### Sprint 1 (14 Abril - 27 Abril 2026)
| Ceremonia | Fecha | Duración | Objetivo |
|-----------|-------|----------|----------|
| Sprint Planning | 14/04/2026 9:00 AM | 2 horas | Seleccionar historias del backlog y planificar el sprint 1 |
| Daily Standup | Cada día hábil 9:00 AM | 15 min | ¿Qué hice ayer? ¿Qué haré hoy? ¿Algún bloqueo? |
| Sprint Review | 25/04/2026 3:00 PM | 1 hora | Demostrar el incremento funcional del sprint 1 |
| Sprint Retrospectiva | 27/04/2026 4:00 PM | 30 min | ¿Qué salió bien? ¿Qué mejorar? ¿Acciones? |

#### Sprint 2 (28 Abril - 11 Mayo 2026)
| Ceremonia | Fecha | Duración | Objetivo |
|-----------|-------|----------|----------|
| Sprint Planning | 28/04/2026 9:00 AM | 2 horas | Planificar el panel de administración y mejoras |
| Daily Standup | Cada día hábil 9:00 AM | 15 min | Seguimiento diario del avance |
| Sprint Review | 09/05/2026 3:00 PM | 1 hora | Demostrar funcionalidades del panel admin |
| Sprint Retrospectiva | 11/05/2026 4:00 PM | 30 min | Ajustar proceso para el último sprint |

#### Sprint 3 (12 Mayo - 25 Mayo 2026)
| Ceremonia | Fecha | Duración | Objetivo |
|-----------|-------|----------|----------|
| Sprint Planning | 12/05/2026 9:00 AM | 2 horas | Planificar pruebas automatizadas y correcciones |
| Daily Standup | Cada día hábil 9:00 AM | 15 min | Seguimiento diario |
| Sprint Review | 23/05/2026 3:00 PM | 1 hora | Demo final del sistema completo |
| Sprint Retrospectiva | 25/05/2026 4:00 PM | 30 min | Retrospectiva final del proyecto |

### 3.6 Historias de Usuario

#### Gestión de Usuarios

---

**US-01: Registro de cuenta**
- **Como** visitante del sitio,
- **Quiero** poder crear una cuenta con mi nombre, correo electrónico y contraseña,
- **Para** poder acceder a las funcionalidades de compra de la plataforma.

**Criterios de Aceptación:**
1. El formulario de registro debe solicitar: nombre completo, correo electrónico, contraseña y confirmación de contraseña.
2. El correo electrónico debe ser único en el sistema (no puede registrarse dos veces con el mismo email).
3. La contraseña debe tener un mínimo de 8 caracteres.
4. Al registrarse exitosamente, el usuario recibe un token de acceso y es redirigido al catálogo.
5. Si los datos son inválidos, se muestran mensajes de error claros junto al campo correspondiente.

**Puntos de Historia:** 3

---

**US-02: Inicio de sesión**
- **Como** usuario registrado,
- **Quiero** poder iniciar sesión con mi correo y contraseña,
- **Para** acceder a mi cuenta y carrito de compras.

**Criterios de Aceptación:**
1. El sistema acepta correo electrónico y contraseña válidos para autenticar al usuario.
2. Al iniciar sesión correctamente, el usuario es redirigido al catálogo con su sesión activa.
3. Si las credenciales son incorrectas, se muestra el mensaje: "Credenciales inválidas. Intente de nuevo."
4. El token de sesión se almacena de manera segura en el cliente (localStorage).

**Puntos de Historia:** 2

---

**US-03: Cierre de sesión**
- **Como** usuario autenticado,
- **Quiero** poder cerrar sesión,
- **Para** proteger mi cuenta cuando no estoy usando el sistema.

**Criterios de Aceptación:**
1. Al hacer clic en "Cerrar Sesión", el token es eliminado del servidor y del cliente.
2. El usuario es redirigido a la página principal sin acceso a rutas protegidas.
3. Intentar acceder a rutas protegidas después del logout redirige al login.

**Puntos de Historia:** 1

---

#### Catálogo de Productos

---

**US-04: Explorar catálogo de productos**
- **Como** usuario (registrado o visitante),
- **Quiero** ver todos los productos disponibles con su información básica,
- **Para** encontrar los artículos que me interesan.

**Criterios de Aceptación:**
1. La página principal muestra una grilla de productos activos con: imagen, nombre, precio y categoría.
2. Los productos se cargan automáticamente al entrar a la página.
3. Si no hay productos disponibles, se muestra el mensaje: "No hay productos disponibles en este momento."
4. El catálogo muestra máximo 12 productos por página con paginación.

**Puntos de Historia:** 3

---

**US-05: Ver detalle de producto**
- **Como** usuario,
- **Quiero** ver la información completa de un producto,
- **Para** tomar una decisión de compra informada.

**Criterios de Aceptación:**
1. Al hacer clic en un producto, el usuario accede a su página de detalle.
2. La página muestra: imagen, nombre, descripción completa, precio, categoría y opción para agregar al carrito.
3. El usuario puede seleccionar la cantidad antes de agregar al carrito.
4. El botón "Agregar al carrito" está disponible únicamente para usuarios autenticados.

**Puntos de Historia:** 2

---

**US-06: Buscar productos por nombre**
- **Como** usuario,
- **Quiero** buscar productos por nombre,
- **Para** encontrar rápidamente lo que necesito sin navegar todo el catálogo.

**Criterios de Aceptación:**
1. Existe una barra de búsqueda visible en la página del catálogo.
2. La búsqueda se ejecuta automáticamente mientras el usuario escribe (búsqueda reactiva).
3. Los resultados muestran únicamente productos cuyo nombre coincida parcialmente con el término buscado.
4. Si no hay coincidencias, se muestra: "No se encontraron productos para tu búsqueda."

**Puntos de Historia:** 3

---

**US-07: Filtrar productos por categoría**
- **Como** usuario,
- **Quiero** filtrar los productos por categoría,
- **Para** ver únicamente los productos del tipo que me interesa.

**Criterios de Aceptación:**
1. El catálogo muestra un listado de categorías disponibles como filtros.
2. Al seleccionar una categoría, solo se muestran productos de esa categoría.
3. Se puede seleccionar "Todas" para ver el catálogo completo.
4. El filtro por categoría y la búsqueda por nombre funcionan en conjunto.

**Puntos de Historia:** 2

---

#### Carrito y Checkout

---

**US-08: Agregar productos al carrito**
- **Como** usuario autenticado,
- **Quiero** agregar productos a mi carrito,
- **Para** acumular los artículos que deseo comprar.

**Criterios de Aceptación:**
1. El usuario puede agregar un producto al carrito desde el catálogo o desde la página de detalle.
2. Si el producto ya existe en el carrito, se incrementa la cantidad.
3. El ícono del carrito en el navbar muestra el número de items actuales.
4. Se muestra una notificación de confirmación al agregar correctamente.
5. Esta acción requiere que el usuario esté autenticado; si no lo está, se redirige al login.

**Puntos de Historia:** 3

---

**US-09: Gestionar carrito de compras**
- **Como** usuario autenticado,
- **Quiero** poder modificar mi carrito (cambiar cantidades o eliminar productos),
- **Para** ajustar mi pedido antes de confirmar la compra.

**Criterios de Aceptación:**
1. En la página del carrito se muestra cada producto con: imagen, nombre, precio unitario, cantidad y subtotal.
2. El usuario puede incrementar o decrementar la cantidad de cualquier producto.
3. Si la cantidad llega a cero, el producto es eliminado del carrito.
4. El usuario puede eliminar un producto con el botón "Eliminar".
5. Se muestra el total general del carrito actualizado en tiempo real.
6. Si el carrito está vacío, se muestra el mensaje: "Tu carrito está vacío" con un enlace al catálogo.

**Puntos de Historia:** 3

---

**US-10: Realizar checkout y generar orden**
- **Como** usuario autenticado,
- **Quiero** completar mi compra ingresando mi dirección de entrega y confirmando el pedido,
- **Para** recibir los productos en mi domicilio.

**Criterios de Aceptación:**
1. El formulario de checkout solicita: nombre completo, dirección, ciudad y teléfono.
2. Todos los campos del formulario son obligatorios.
3. Al confirmar, el sistema genera una orden con estado "pendiente" y vacía el carrito.
4. El usuario es redirigido a una página de confirmación mostrando el número de orden y el resumen del pedido.
5. La orden queda visible en el historial de órdenes del usuario.

**Puntos de Historia:** 5

---

#### Administración

---

**US-11: Gestionar productos como administrador**
- **Como** administrador del sistema,
- **Quiero** poder crear, editar y eliminar productos desde un panel administrativo,
- **Para** mantener actualizado el catálogo de la tienda.

**Criterios de Aceptación:**
1. El panel de admin es accesible únicamente para usuarios con rol "admin".
2. El admin puede crear un producto con: nombre, descripción, precio, categoría e imagen (URL).
3. El admin puede editar cualquier campo de un producto existente.
4. El admin puede eliminar un producto; si tiene órdenes asociadas, solo se desactiva (soft delete).
5. Los cambios se reflejan inmediatamente en el catálogo público.

**Puntos de Historia:** 5

---

**US-12: Consultar órdenes de clientes**
- **Como** administrador,
- **Quiero** ver todas las órdenes generadas por los clientes,
- **Para** procesar los pedidos y hacer seguimiento del estado de cada uno.

**Criterios de Aceptación:**
1. El panel admin muestra una tabla con todas las órdenes: ID, cliente, fecha, total y estado.
2. El admin puede cambiar el estado de una orden: pendiente → en proceso → enviado → entregado.
3. Al hacer clic en una orden, se muestra el detalle con los productos y la dirección de entrega.
4. Las órdenes se ordenan de más reciente a más antigua por defecto.

**Puntos de Historia:** 3

---

## 4. PLAN DE PRUEBAS

### 4.1 Requerimientos Funcionales y No Funcionales

**Requerimientos Funcionales a Probar:**

| ID | Requerimiento | Historia Asociada | Prioridad |
|----|---------------|------------------|-----------|
| RF-01 | Registro de usuario con validación | US-01 | Alta |
| RF-02 | Autenticación con token | US-02, US-03 | Alta |
| RF-03 | Listado de productos activos | US-04 | Alta |
| RF-04 | Detalle de producto | US-05 | Media |
| RF-05 | Búsqueda de productos | US-06 | Media |
| RF-06 | Filtro por categoría | US-07 | Media |
| RF-07 | Operaciones del carrito | US-08, US-09 | Alta |
| RF-08 | Proceso de checkout y orden | US-10 | Alta |
| RF-09 | CRUD de productos (admin) | US-11 | Alta |
| RF-10 | Listado y gestión de órdenes (admin) | US-12 | Media |

**Requerimientos No Funcionales a Probar:**

| ID | Requerimiento | Métrica | Herramienta |
|----|---------------|---------|-------------|
| RNF-01 | Seguridad: autenticación | Rutas protegidas devuelven 401 sin token | PHPUnit |
| RNF-02 | Rendimiento: tiempo de respuesta | Respuesta < 2s en endpoints principales | Postman (manual) |
| RNF-03 | Usabilidad: flujo de compra | Completar una compra en < 5 pasos | Cypress (E2E) |
| RNF-04 | Validaciones de entrada | Datos inválidos retornan 422 con mensaje | PHPUnit |

### 4.2 Criterios de Aceptación y Rechazo de Pruebas

**Criterios de Aceptación (PASS):**
- El caso de prueba produce el resultado esperado descrito en el criterio de aceptación de la historia de usuario.
- Los endpoints de la API retornan los códigos HTTP correctos (200, 201, 401, 422, 404).
- La interfaz de usuario muestra los datos correctos y sin errores visuales.
- Las pruebas automatizadas ejecutan sin excepciones no controladas.

**Criterios de Rechazo (FAIL):**
- El resultado obtenido difiere del resultado esperado.
- La aplicación muestra un error 500 (error del servidor) en cualquier flujo normal de uso.
- Una ruta protegida es accesible sin autenticación.
- Los datos del usuario o del pedido se almacenan incorrectamente en la base de datos.
- Una prueba automatizada falla por un bug (no por configuración del entorno).

**Severidad de defectos:**

| Severidad | Descripción | Ejemplo |
|-----------|-------------|---------|
| Crítica | El sistema falla completamente, no se puede usar | Login no funciona, carrito no guarda datos |
| Alta | Una funcionalidad principal falla | Checkout no genera orden |
| Media | Una funcionalidad secundaria falla | El filtro por categoría no funciona |
| Baja | Problema visual o de UX menor | Texto de botón incorrecto |

### 4.3 Herramientas de Pruebas

| Herramienta | Tipo de Prueba | Justificación |
|-------------|---------------|---------------|
| **PHPUnit 11** | Pruebas unitarias e integración del API | Es el framework estándar de testing para Laravel, integrado nativamente. Permite simular requests HTTP, usar bases de datos en memoria (SQLite) y verificar respuestas JSON con métodos fluidos |
| **Cypress 13** | Pruebas End-to-End (E2E) | Permite automatizar flujos completos en el navegador real. Su interfaz visual facilita el debug y la grabación de evidencias. Es ideal para verificar el flujo de compra completo |
| **Postman** | Pruebas manuales de API | Herramienta visual para probar endpoints de forma manual durante el desarrollo, documentar la API y ejecutar colecciones de pruebas manuales |
| **Laravel Pint + ESLint** | Pruebas de código estático | Verifican que el código siga los estándares de escritura establecidos (PSR-12 para PHP, ESLint para JS) |

### 4.4 Cronograma de Ejecución de Pruebas

| Tipo de Prueba | Período | Responsable | Frecuencia |
|----------------|---------|-------------|------------|
| Pruebas manuales de API (Postman) | Sprint 1: 16-25 Abril 2026 | Starling Rosario | Después de cada endpoint implementado |
| Pruebas unitarias PHPUnit | Sprint 2: 06-09 Mayo 2026 | Starling Rosario | Al completar cada módulo |
| Pruebas E2E Cypress | Sprint 3: 12-16 Mayo 2026 | Starling Rosario | Al completar la integración frontend-backend |
| Ejecución regresión final | Sprint 3: 20-22 Mayo 2026 | Starling Rosario | Una vez antes de la entrega final |

### 4.5 Plantillas para Casos de Prueba

**Plantilla estándar de caso de prueba:**

```
Caso de Prueba: [CP-XX]
Historia de Usuario: [US-XX]
Módulo: [Nombre del módulo]
Tipo: [Unitaria / Integración / E2E / Manual]
Prioridad: [Alta / Media / Baja]
Precondiciones: [Estado del sistema antes de ejecutar]
Pasos de Ejecución:
  1. [Paso 1]
  2. [Paso 2]
  ...
Datos de Entrada: [Datos específicos usados]
Resultado Esperado: [Comportamiento correcto]
Resultado Obtenido: [Llenar al ejecutar]
Estado: [PASS / FAIL]
Evidencia: [Captura de pantalla o log]
Fecha de Ejecución: [DD/MM/AAAA]
```

**Ejemplos de casos de prueba documentados:**

---

**CP-01: Registro exitoso de usuario**
- **Historia:** US-01
- **Módulo:** Autenticación
- **Tipo:** Integración (PHPUnit)
- **Prioridad:** Alta
- **Precondiciones:** Base de datos vacía de usuarios
- **Datos de Entrada:** `{ name: "Juan Pérez", email: "juan@test.com", password: "12345678", password_confirmation: "12345678" }`
- **Resultado Esperado:** HTTP 201, respuesta con token de acceso y datos del usuario
- **Estado:** PASS

---

**CP-02: Registro con email duplicado**
- **Historia:** US-01
- **Módulo:** Autenticación
- **Tipo:** Integración (PHPUnit)
- **Prioridad:** Alta
- **Precondiciones:** Existe un usuario con email "juan@test.com"
- **Datos de Entrada:** `{ name: "Otro", email: "juan@test.com", password: "12345678", password_confirmation: "12345678" }`
- **Resultado Esperado:** HTTP 422, mensaje de error "El correo ya está en uso"
- **Estado:** PASS

---

**CP-03: Login con credenciales incorrectas**
- **Historia:** US-02
- **Módulo:** Autenticación
- **Tipo:** Integración (PHPUnit)
- **Prioridad:** Alta
- **Datos de Entrada:** `{ email: "juan@test.com", password: "wrongpass" }`
- **Resultado Esperado:** HTTP 401, mensaje "Credenciales inválidas"
- **Estado:** PASS

---

**CP-04: Acceso a ruta protegida sin token**
- **Historia:** US-02, RNF-01
- **Módulo:** Autenticación / Seguridad
- **Tipo:** Integración (PHPUnit)
- **Prioridad:** Alta
- **Datos de Entrada:** GET /api/cart (sin header Authorization)
- **Resultado Esperado:** HTTP 401 Unauthenticated
- **Estado:** PASS

---

**CP-05: Agregar producto al carrito**
- **Historia:** US-08
- **Módulo:** Carrito
- **Tipo:** Integración (PHPUnit)
- **Prioridad:** Alta
- **Precondiciones:** Usuario autenticado, producto con ID 1 existente
- **Datos de Entrada:** POST /api/cart `{ product_id: 1, quantity: 2 }`
- **Resultado Esperado:** HTTP 200, carrito actualizado con el producto
- **Estado:** PASS

---

**CP-06: Flujo completo de compra (E2E)**
- **Historia:** US-01, US-04, US-08, US-10
- **Módulo:** Flujo completo
- **Tipo:** E2E (Cypress)
- **Prioridad:** Alta
- **Precondiciones:** Sistema corriendo en localhost
- **Pasos:**
  1. Visitar la página principal
  2. Hacer clic en "Registrarse"
  3. Llenar formulario con datos de prueba
  4. Verificar redirección al catálogo
  5. Hacer clic en un producto
  6. Hacer clic en "Agregar al carrito"
  7. Ir al carrito
  8. Hacer clic en "Comprar"
  9. Llenar datos de envío
  10. Confirmar pedido
- **Resultado Esperado:** Página de confirmación con número de orden visible
- **Estado:** PASS

---

### 4.6 Equipo de Pruebas y Responsabilidades

| Rol | Nombre | Responsabilidades |
|-----|--------|------------------|
| QA Lead / Tester | Starling Daniel Rosario Franco | Diseñar y ejecutar todos los casos de prueba, documentar resultados, reportar y corregir bugs encontrados, mantener actualizada la suite de pruebas automatizadas |

**Proceso de reporte de defectos:**
1. Detectar el defecto durante la ejecución de pruebas.
2. Documentar en Jira con: descripción, pasos para reproducir, resultado esperado vs obtenido, captura de pantalla, severidad.
3. Asignar al desarrollador (en este caso, el mismo estudiante).
4. Corregir el bug y marcar la tarea como resuelta.
5. Ejecutar regresión del caso de prueba afectado.

### 4.7 Plan de Automatización de Pruebas

**Estrategia de automatización:**
Se implementa una pirámide de pruebas con dos niveles automatizados:

```
       /\
      /E2E\       ← Cypress: 2-3 flujos críticos
     /______\
    /  Unit/  \   ← PHPUnit: todos los endpoints principales
   / Integration\
  /______________\
  Manual (Postman) ← Exploración y validación durante desarrollo
```

**Pruebas PHPUnit (Backend):**
- `AuthTest`: registro, login, logout, token inválido
- `ProductTest`: listar, buscar, filtrar, detalle
- `CartTest`: agregar, actualizar, eliminar, ver carrito
- `OrderTest`: checkout, listar órdenes, cambiar estado
- Cobertura objetivo: 70% de los controladores principales

**Pruebas Cypress (E2E):**
- `flujo_compra.cy.js`: registro → catálogo → carrito → checkout → confirmación
- `admin_products.cy.js`: login admin → crear producto → verificar en catálogo

**Ejecución continua:**
- Las pruebas PHPUnit se ejecutan con: `php artisan test`
- Las pruebas Cypress se ejecutan con: `npx cypress run`
- Ambas se pueden integrar en un pipeline de GitHub Actions para ejecución automática en cada push.

---

### 4.8 Ejecución y Demostración de Automatización

Esta sección presenta la evidencia de la ejecución de las pruebas automatizadas implementadas en el proyecto ShopEasy. Las pruebas fueron ejecutadas en el entorno de desarrollo local con las siguientes versiones: **PHP 8.2.12**, **Laravel 11.51.0**, **PHPUnit 11.5.55** y **Cypress 13.x**, con base de datos PostgreSQL 17.

#### 4.8.1 Ejecución de Pruebas PHPUnit (Backend)

Comando ejecutado desde la carpeta `backend-laravel11/`:

```bash
php artisan test --testdox
```

**Resultado obtenido:**

```
PHPUnit 11.5.55 by Sebastian Bergmann and contributors.

Runtime:       PHP 8.2.12
Configuration: C:\ProyectoFinal\backend-laravel11\phpunit.xml

   PASS  Tests\Unit\ExampleTest
  ✓ that true is true

   PASS  Tests\Feature\AuthTest
  ✓ user can register with valid data                               0.60s
  ✓ register fails with duplicate email                             0.19s
  ✓ register fails with short password                              0.05s
  ✓ user can login with valid credentials                           0.10s
  ✓ login fails with wrong password                                 0.05s
  ✓ authenticated user can logout                                   0.18s
  ✓ protected route returns 401 without token                       0.04s

   PASS  Tests\Feature\CartTest
  ✓ user can add product to cart                                    0.08s
  ✓ adding existing product increments quantity                     0.08s
  ✓ user can view their cart                                        0.06s
  ✓ user can update cart item quantity                              0.07s
  ✓ updating quantity to zero removes item                          0.18s
  ✓ user can remove item from cart                                  0.09s

   PASS  Tests\Feature\OrderTest
  ✓ user can place order from cart                                  0.08s
  ✓ checkout with empty cart returns error                          0.16s
  ✓ user can list their orders                                      0.06s
  ✓ admin can update order status                                   0.06s
  ✓ user cannot see another users order                             0.19s

   PASS  Tests\Feature\ProductTest
  ✓ anyone can list products                                        0.05s
  ✓ products can be searched by name                                0.05s
  ✓ products can be filtered by category                            0.05s
  ✓ anyone can view product detail                                  0.05s
  ✓ inactive product returns 404                                    0.05s
  ✓ admin can create product                                        0.06s
  ✓ customer cannot create product                                  0.06s
  ✓ admin can delete product without orders                         0.18s

  Tests:    27 passed (78 assertions)
  Duration: 2.93s
```

**Resumen:** 27 pruebas ejecutadas en 4 suites (Auth, Cart, Order, Product), **27 exitosas (PASS)**, 0 fallidas, 78 assertions verificadas. Tiempo total: 2.93 segundos.

---

#### 4.8.2 Defecto encontrado y corregido durante las pruebas

Durante la ejecución inicial de pruebas se detectó y corregió el siguiente defecto:

| Campo | Detalle |
|-------|---------|
| **ID** | BUG-01 |
| **Descripción** | Al llamar `POST /api/login` desde el frontend en React, el servidor respondía con error CSRF token mismatch (HTTP 419) |
| **Causa** | El middleware `statefulApi()` en `bootstrap/app.php` requería cookie de sesión CSRF, incompatible con autenticación Bearer token |
| **Solución** | Eliminado `$middleware->statefulApi()` del bootstrap. La API utiliza exclusivamente autenticación por token Sanctum |
| **Severidad** | Alta |
| **Estado** | Resuelto |
| **Prueba de regresión** | `AuthTest::test_user_can_login_with_valid_credentials` — PASS |

---

#### 4.8.3 Casos de prueba PHPUnit por módulo

**Módulo Auth (7 pruebas — CP-01 al CP-07):**

| CP | Método de prueba | Historia | Resultado |
|----|-----------------|----------|-----------|
| CP-01 | `test_user_can_register_with_valid_data` | US-01 | PASS |
| CP-02 | `test_register_fails_with_duplicate_email` | US-01 | PASS |
| CP-03 | `test_register_fails_with_short_password` | US-01 | PASS |
| CP-04 | `test_user_can_login_with_valid_credentials` | US-02 | PASS |
| CP-05 | `test_login_fails_with_wrong_password` | US-02 | PASS |
| CP-06 | `test_authenticated_user_can_logout` | US-03 | PASS |
| CP-07 | `test_protected_route_returns_401_without_token` | RNF-01 | PASS |

**Módulo Cart (6 pruebas — CP-08 al CP-13):**

| CP | Método de prueba | Historia | Resultado |
|----|-----------------|----------|-----------|
| CP-08 | `test_user_can_add_product_to_cart` | US-08 | PASS |
| CP-09 | `test_adding_existing_product_increments_quantity` | US-08 | PASS |
| CP-10 | `test_user_can_view_their_cart` | US-09 | PASS |
| CP-11 | `test_user_can_update_cart_item_quantity` | US-09 | PASS |
| CP-12 | `test_updating_quantity_to_zero_removes_item` | US-09 | PASS |
| CP-13 | `test_user_can_remove_item_from_cart` | US-09 | PASS |

**Módulo Order (5 pruebas — CP-14 al CP-18):**

| CP | Método de prueba | Historia | Resultado |
|----|-----------------|----------|-----------|
| CP-14 | `test_user_can_place_order_from_cart` | US-10 | PASS |
| CP-15 | `test_checkout_with_empty_cart_returns_error` | US-10 | PASS |
| CP-16 | `test_user_can_list_their_orders` | US-10 | PASS |
| CP-17 | `test_admin_can_update_order_status` | US-12 | PASS |
| CP-18 | `test_user_cannot_see_another_users_order` | RNF-01 | PASS |

**Módulo Product (8 pruebas — CP-19 al CP-26):**

| CP | Método de prueba | Historia | Resultado |
|----|-----------------|----------|-----------|
| CP-19 | `test_anyone_can_list_products` | US-04 | PASS |
| CP-20 | `test_products_can_be_searched_by_name` | US-06 | PASS |
| CP-21 | `test_products_can_be_filtered_by_category` | US-07 | PASS |
| CP-22 | `test_anyone_can_view_product_detail` | US-05 | PASS |
| CP-23 | `test_inactive_product_returns_404` | US-05 | PASS |
| CP-24 | `test_admin_can_create_product` | US-11 | PASS |
| CP-25 | `test_customer_cannot_create_product` | US-11 | PASS |
| CP-26 | `test_admin_can_delete_product_without_orders` | US-11 | PASS |

---

#### 4.8.4 Ejecución de Pruebas Cypress (End-to-End)

Las pruebas E2E validan los flujos completos de usuario ejecutándose en el navegador contra los servidores reales (backend en `localhost:8000`, frontend en `localhost:5173`).

Comando ejecutado desde la carpeta `frontend/`:

```bash
npx cypress run --reporter spec
```

**Archivos de prueba:**
- `tests/cypress/e2e/flujo_compra.cy.js` — Flujo completo de compra
- `tests/cypress/e2e/admin_products.cy.js` — Panel de administración

**Resultado obtenido:**

```
  Running:  flujo_compra.cy.js

  ShopEasy - Flujo Completo de Compra
    ✓ CP-06: Flujo completo - registro, agregar al carrito y hacer checkout
    ✓ Login con credenciales incorrectas muestra mensaje de error
    ✓ Ruta protegida /checkout redirige al login si no está autenticado

  3 passing

  Running:  admin_products.cy.js

  ShopEasy - Panel de Administración
    ✓ Admin puede acceder al panel de administración
    ✓ Admin puede crear un nuevo producto desde el panel
    ✓ Cliente normal no puede acceder al panel admin

  3 passing
```

**Resumen:** 6 pruebas E2E ejecutadas en 2 archivos spec, **6 exitosas (PASS)**, 0 fallidas.

---

#### 4.8.5 Resumen General de Automatización

| Suite | Herramienta | Archivo | Pruebas | PASS | FAIL |
|-------|-------------|---------|---------|------|------|
| Autenticación | PHPUnit 11 | AuthTest.php | 7 | 7 | 0 |
| Carrito | PHPUnit 11 | CartTest.php | 6 | 6 | 0 |
| Órdenes | PHPUnit 11 | OrderTest.php | 5 | 5 | 0 |
| Productos | PHPUnit 11 | ProductTest.php | 8 | 8 | 0 |
| Flujo de compra E2E | Cypress 13 | flujo_compra.cy.js | 3 | 3 | 0 |
| Panel admin E2E | Cypress 13 | admin_products.cy.js | 3 | 3 | 0 |
| **TOTAL** | | | **32** | **32** | **0** |

Todos los casos de prueba automatizados pasaron satisfactoriamente, validando los flujos críticos del sistema definidos en el Release 1.0. La cobertura incluye los módulos de autenticación, catálogo, carrito, órdenes y administración.

---

## 5. CONCLUSIONES

El desarrollo de ShopEasy representó la integración práctica de los conocimientos adquiridos durante el curso de Programación III. La aplicación de la metodología Scrum como marco de trabajo organizó el proceso de desarrollo en iteraciones claras y medibles, permitiendo visibilidad constante del avance del proyecto.

Entre los principales aprendizajes del proyecto se destacan:

1. **La importancia de la planificación inicial:** Invertir tiempo en definir el alcance, las historias de usuario y los criterios de aceptación evitó retrabajos significativos durante el desarrollo.

2. **La arquitectura API REST + SPA:** La separación del backend (Laravel) y el frontend (React) resultó en un sistema más mantenible y escalable, donde ambas capas se pueden desarrollar y desplegar de forma independiente.

3. **El valor de las pruebas automatizadas:** Las pruebas PHPUnit permitieron detectar regresiones de forma inmediata al modificar funcionalidades existentes, reduciendo el tiempo de debugging manual.

4. **Scrum como metodología individual:** Aunque Scrum está diseñado para equipos, sus principios de inspección y adaptación son igualmente aplicables en proyectos individuales, ayudando a mantener el enfoque y la priorización adecuada.

El sistema resultante cumple con todos los requerimientos definidos para el Release 1.0, sentando las bases para futuras iteraciones que podrían incorporar pasarelas de pago, notificaciones por correo electrónico y un módulo de reportes avanzados.

---

## 6. BIBLIOGRAFÍA

1. Schwaber, K., & Sutherland, J. (2020). *The Scrum Guide - The Definitive Guide to Scrum: The Rules of the Game*. Scrum.org. Recuperado de https://scrumguides.org

2. Laravel LLC. (2024). *Laravel 11.x Documentation*. Recuperado de https://laravel.com/docs/11.x

3. Meta Open Source. (2024). *React - The library for web and native user interfaces*. Recuperado de https://react.dev/

4. The PostgreSQL Global Development Group. (2024). *PostgreSQL 17 Documentation*. Recuperado de https://www.postgresql.org/docs/17/

5. Cypress.io. (2024). *Cypress Documentation*. Recuperado de https://docs.cypress.io

6. PHPUnit. (2024). *PHPUnit Manual*. Recuperado de https://phpunit.de/documentation.html

7. Cohn, M. (2004). *User Stories Applied: For Agile Software Development*. Addison-Wesley Professional.

8. Beck, K., et al. (2001). *Manifesto for Agile Software Development*. Recuperado de https://agilemanifesto.org/

---



