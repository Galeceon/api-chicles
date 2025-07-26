# API Proyecto (Chicles y Sabores) - Backend + Frontend

API RESTful con autenticación JWT, refresh tokens, roles de usuario y CRUD para chicles y sabores, **incluyendo frontend Angular completo**.

## 📁 Estructura del Proyecto

```
API proyecto/
├── controllers/          # Controladores del backend
├── middlewares/         # Middlewares de autenticación
├── models/             # Modelos de datos
├── routes/             # Rutas de la API
├── frontend-chicles/   # Aplicación Angular
│   ├── src/
│   │   ├── app/
│   │   │   ├── pages/      # Componentes de páginas
│   │   │   ├── services/   # Servicios de API
│   │   │   └── helpers/    # Interceptores HTTP
│   │   └── main.ts
│   └── package.json
├── index.js            # Servidor principal
└── README.md
```

## 🚀 Inicio rápido

### Backend
```bash
# Instalar dependencias del backend
npm install

# Iniciar servidor
node index.js
```

El servidor estará en `http://localhost:3000`

### Frontend
```bash
# Navegar al directorio del frontend
cd frontend-chicles

# Instalar dependencias del frontend
npm install

# Iniciar aplicación Angular
ng serve
```

La aplicación estará en `http://localhost:4200`

## 🎯 Funcionalidades

### Backend (API REST)
- ✅ Autenticación JWT con refresh tokens
- ✅ Roles de usuario (admin/usuario)
- ✅ CRUD completo para chicles y sabores
- ✅ Middleware de autenticación y autorización
- ✅ Base de datos SQLite

### Frontend (Angular)
- ✅ Sistema de autenticación (login/register)
- ✅ Navegación entre páginas
- ✅ CRUD completo para chicles y sabores
- ✅ Interfaz responsiva con Bootstrap
- ✅ Botones de agregar/eliminar solo para admins
- ✅ Interceptor HTTP para tokens automáticos
- ✅ Componentes standalone (arquitectura moderna)

## 📡 Endpoints de la API

### Autenticación
- `POST /api/auth/register` — Registro `{ username, password, role? }`
- `POST /api/auth/login` — Login `{ username, password }`
- `POST /api/auth/refresh` — Renovar token `{ refreshToken }`

### Chicles
- `GET /api/gums` — Listar todos (requiere autenticación)
- `GET /api/gums/:id` — Obtener por ID (requiere autenticación)
- `POST /api/gums` — Crear (solo admin) `{ name, description }`
- `PUT /api/gums/:id` — Modificar (solo admin) `{ name, description }`
- `DELETE /api/gums/:id` — Eliminar (solo admin)

### Sabores
- `GET /api/flavors` — Listar todos (requiere autenticación)
- `GET /api/flavors/:id` — Obtener por ID (requiere autenticación)
- `POST /api/flavors` — Crear (solo admin) `{ gumId, name }`
- `PUT /api/flavors/:id` — Modificar (solo admin) `{ name }`
- `DELETE /api/flavors/:id` — Eliminar (solo admin)

## 🎨 Características del Frontend

### Páginas
- **Login:** Autenticación de usuarios
- **Register:** Registro de nuevos usuarios
- **Gums:** Lista de chicles con funcionalidad CRUD
- **Flavors:** Lista de sabores con funcionalidad CRUD

### Funcionalidades por Rol
- **Usuario:** Ver listas de chicles y sabores
- **Admin:** Crear, eliminar chicles y sabores

### Tecnologías Frontend
- **Angular 17** con componentes standalone
- **Bootstrap 5** para diseño responsivo
- **Bootstrap Icons** para iconografía
- **HTTP Interceptors** para manejo automático de tokens
- **Angular Router** para navegación

## 🧪 Uso en Postman

1. **Registrar usuario:**
   ```
   POST /api/auth/register
   Body: { "username": "admin", "password": "123456", "role": "admin" }
   ```

2. **Login:**
   ```
   POST /api/auth/login
   Body: { "username": "admin", "password": "123456" }
   ```

3. **Listar chicles (con token):**
   ```
   GET /api/gums
   Headers: Authorization: Bearer <accessToken>
   ```

4. **Crear chicle (solo admin):**
   ```
   POST /api/gums
   Headers: Authorization: Bearer <accessToken>
   Body: { "name": "Trident", "description": "Chicle sin azúcar" }
   ```

5. **Renovar token:**
   ```
   POST /api/auth/refresh
   Body: { "refreshToken": "<refreshToken>" }
   ```

## 🔐 Roles y permisos
- **Usuario:** Puede ver chicles y sabores (con autenticación)
- **Admin:** Puede crear, modificar y eliminar todo

## ⚙️ Configuración

### Backend
1. **Crear archivo `.env`:**
   ```env
   JWT_SECRET=supersecreto123
   JWT_REFRESH_SECRET=superrefresh123
   TOKEN_EXPIRES_IN=15m
   REFRESH_TOKEN_EXPIRES_IN=7d
   PORT=3000
   ```

2. **La base de datos SQLite se crea automáticamente** al ejecutar el servidor.

### Frontend
1. **Configuración automática:** Angular CLI configura automáticamente Bootstrap y dependencias
2. **Variables de entorno:** La URL de la API está configurada en los servicios

## 🚀 Despliegue

### Backend
```bash
# Instalar dependencias
npm install

# Iniciar servidor
node index.js
```

### Frontend
```bash
# Navegar al directorio
cd frontend-chicles

# Instalar dependencias
npm install

# Construir para producción
ng build

# Servir archivos estáticos
# Los archivos estarán en dist/frontend-chicles/
```

## 📝 Notas de Desarrollo

- **Arquitectura:** Backend Node.js/Express + Frontend Angular
- **Base de datos:** SQLite (desarrollo) / PostgreSQL (producción recomendado)
- **Autenticación:** JWT con refresh tokens
- **Frontend:** Componentes standalone de Angular 17
- **UI/UX:** Bootstrap 5 con diseño responsivo

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request 