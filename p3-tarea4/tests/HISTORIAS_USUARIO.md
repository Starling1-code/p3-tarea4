# Historias de Usuario - Sistema de Gestión de Usuarios

## Historia 1: Autenticación de Usuario

**Como** usuario del sistema  
**Quiero** iniciar sesión con mis credenciales  
**Para** acceder al dashboard

### Criterios de Aceptación
- ✅ Login exitoso con credenciales válidas
- ✅ Redirección al dashboard tras login exitoso
- ✅ El token se almacena y persiste la sesión

### Criterios de Rechazo
- ❌ Rechaza email inexistente
- ❌ Rechaza contraseña incorrecta

---

## Historia 2: Crear Nuevo Usuario

**Como** administrador  
**Quiero** crear nuevos usuarios  
**Para** agregar usuarios al sistema

### Criterios de Aceptación
- ✅ Se puede crear usuario con nombre, email y contraseña válidos
- ✅ El nuevo usuario aparece inmediatamente en la tabla

### Criterios de Rechazo
- ❌ No se permite crear usuario sin completar todos los campos

---

## Historia 3: Editar Usuario Existente

**Como** administrador  
**Quiero** editar información de usuarios  
**Para** actualizar datos de usuarios

### Criterios de Aceptación
- ✅ Se puede editar nombre y email de un usuario
- ✅ Los cambios se guardan e inmediatamente reflejan en la tabla

### Criterios de Rechazo
- ❌ No se permite guardar con campos requeridos vacíos

---

## Historia 4: Eliminar Usuario

**Como** administrador  
**Quiero** eliminar usuarios del sistema  
**Para** remover usuarios innecesarios

### Criterios de Aceptación
- ✅ Se puede eliminar un usuario con confirmación
- ✅ El usuario desaparece inmediatamente de la tabla

### Criterios de Rechazo
- ❌ No se elimina el usuario si se cancela la confirmación

---

## Historia 5: Listar Todos los Usuarios

**Como** administrador  
**Quiero** ver el listado de usuarios  
**Para** gestionar el equipo

### Criterios de Aceptación
- ✅ El dashboard muestra tabla con ID, Nombre, Email
- ✅ Se pueden ver botones de Editar y Eliminar en cada fila

### Criterios de Rechazo
- ❌ La tabla no muestra contraseñas u datos sensibles

---

## Credenciales de Prueba

| Email | Contraseña |
|-------|-----------|
| usuario@test.com | 123456789 |
