# API Proyecto (Chicles y Sabores)

API RESTful con autenticación JWT, refresh tokens, roles de usuario y CRUD para chicles y sabores.

## Inicio rápido

```bash
npm install
node index.js
```

El servidor estará en `http://localhost:3000`

## Endpoints

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

## Uso en Postman

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

## Roles y permisos
- **Usuario:** Puede ver chicles y sabores (con autenticación)
- **Admin:** Puede crear, modificar y eliminar todo

## Configuración

1. **Crear archivo `.env`:**
   ```env
   JWT_SECRET=supersecreto123
   JWT_REFRESH_SECRET=superrefresh123
   TOKEN_EXPIRES_IN=15m
   REFRESH_TOKEN_EXPIRES_IN=7d
   PORT=3000
   ```

2. **La base de datos SQLite se crea automáticamente** al ejecutar el servidor. 