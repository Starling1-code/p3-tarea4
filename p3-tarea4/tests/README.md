# Pruebas Automatizadas con Selenium

Sistema de Gestión de Usuarios - Automatización de Pruebas

## 📋 Descripción

Este proyecto contiene pruebas automatizadas utilizando Selenium WebDriver con JavaScript para validar la funcionalidad del Sistema de Gestión de Usuarios.

### Historias de Usuario Automatizadas

1. **H1 - Autenticación de Usuario**: Login con credenciales válidas
2. **H2 - Crear Nuevo Usuario**: Crear usuarios con datos CRUD
3. **H3 - Editar Usuario Existente**: Modificar nombre y email
4. **H4 - Eliminar Usuario**: Remover usuarios del sistema
5. **H5 - Listar Todos los Usuarios**: Ver tabla con todos los usuarios

## 🚀 Instalación

### Requisitos Previos

- Node.js (v16 o superior)
- npm
- Chrome/Chromium instalado
- Backend ejecutándose en `http://localhost:3000`
- Frontend ejecutándose en `http://localhost:5174`

### Pasos de Instalación

```bash
cd tests
npm install
```

## 🧪 Ejecución de Pruebas

### Ejecutar todas las pruebas

```bash
npm test
```

### Ejecutar pruebas específicas

```bash
# Historia 1 - Login
npm run test:login

# Historia 2 - Crear Usuario
npm run test:create

# Historia 3 - Editar Usuario
npm run test:edit

# Historia 4 - Eliminar Usuario
npm run test:delete

# Historia 5 - Listar Usuarios
npm run test:list
```

## 📊 Resultados

### Ubicación de Reportes

Los reportes se generan automáticamente en:

- **Reporte HTML**: `../reporte.html`
- **Screenshots**: `../screenshots/` (organizados por historia)
- **Resultados JSON**: `../results.json`

### Estructura del Reporte

El reporte HTML incluye:

- ✅ Resumen de pruebas (Total, Exitosas, Fallidas)
- 📝 Detalles por historia de usuario
- 📸 Screenshots de cada escenario
- ⏱️ Timestamps y duración

## 📝 Tipos de Pruebas por Historia

Cada historia incluye tres tipos de pruebas:

### Camino Feliz (Happy Path)
- Validar flujo exitoso con datos válidos
- Verificar funcionalidad esperada

### Prueba Negativa
- Validar rechazo de datos inválidos
- Verificar manejo de errores

### Prueba de Límites (Boundary)
- Validar comportamiento en casos extremos
- Verificar restricciones y validaciones

## 🎯 Criterios de Aceptación

### H1 - Autenticación
- ✅ Login exitoso con credenciales válidas
- ❌ Rechazo de email inexistente
- ❌ Rechazo de contraseña incorrecta

### H2 - Crear Usuario
- ✅ Creación exitosa con datos válidos
- ❌ Rechazo de campos vacíos
- ❌ Rechazo de email duplicado

### H3 - Editar Usuario
- ✅ Edición exitosa de nombre y email
- ❌ Campo de contraseña deshabilitado
- ❌ Rechazo de campos vacíos

### H4 - Eliminar Usuario
- ✅ Eliminación exitosa con confirmación
- ❌ Cancelación de eliminación
- ⚠️ Actualización correcta del contador

### H5 - Listar Usuarios
- ✅ Visualización de tabla completa
- ❌ Sin exposición de datos sensibles
- ✅ Estructura correcta de columnas

## 🔐 Credenciales de Prueba

| Email | Contraseña |
|-------|-----------|
| usuario@test.com | 123456789 |
| usuario2@test.com | 12345 |

## 📁 Estructura del Proyecto

```
tests/
├── base.js                 # Clase base con utilidades comunes
├── h1-login.test.js        # Pruebas de autenticación
├── h2-create-user.test.js  # Pruebas de creación
├── h3-edit-user.test.js    # Pruebas de edición
├── h4-delete-user.test.js  # Pruebas de eliminación
├── h5-list-users.test.js   # Pruebas de listado
├── runner.js               # Ejecutor de pruebas
├── package.json            # Dependencias
└── README.md               # Este archivo
```

## 🛠️ Herramientas Utilizadas

- **Selenium WebDriver**: Automatización de navegador
- **JavaScript (ES6+)**: Lenguaje de programación
- **Node.js**: Runtime de JavaScript
- **Chrome WebDriver**: Controlador del navegador

## 📊 Métricas de Calidad

- **Cobertura**: 5 historias de usuario
- **Casos de prueba**: 15 (3 por historia)
- **Coverage**: CRUD completo + Login
- **Tipos de prueba**: Happy Path, Negativa, Límites

## ⚠️ Notas Importantes

1. Las pruebas se ejecutan de forma secuencial
2. Cada prueba toma sus propias capturas de pantalla
3. Los reportes se sobrescriben en cada ejecución
4. Los datos de BD pueden cambiar entre ejecuciones
5. Se recomienda ejecutar con una BD limpia

## 🐛 Troubleshooting

### Error: "chrome not found"

```bash
npm install chromedriver
```

### Error: "Connection refused"

Asegúrate de que:
- Backend está ejecutándose en `http://localhost:3000`
- Frontend está ejecutándose en `http://localhost:5174`

### Error: "Element not found"

- Aumentar timeouts en `base.js`
- Verificar selectores CSS en navegador
- Revisar salida de screenshots

## 📞 Soporte

Para reportar problemas o sugerencias:
- Revisar logs en consola
- Consultar screenshots generados
- Verificar reporte HTML

## 📄 Licencia

Este proyecto es parte de la Tarea 4: Pruebas Automatizadas con Selenium
