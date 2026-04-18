# Zyna LATAM 🌎

Directorio de herramientas de IA para la comunidad hispanohablante.

## Estructura

```
zyna-latam/
├── server.js          ← Backend Node + Express
├── package.json
├── public/
│   └── index.html     ← Frontend HTML + CSS + JS
└── README.md
```

## Correr localmente

```bash
npm install
npm start
# → http://localhost:3000
```

## Endpoints

|Ruta                             |Descripción                    |
|---------------------------------|-------------------------------|
|`GET /api/tools`                 |Lista todas las herramientas   |
|`GET /api/tools?categoria=Código`|Filtrar por categoría          |
|`GET /api/tools?q=imagen`        |Buscar por texto               |
|`GET /api/categorias`            |Lista de categorías disponibles|

-----

## Deploy en Render (GRATIS)

1. Sube este proyecto a un repositorio de GitHub
1. Ve a [render.com](https://render.com) → **New Web Service**
1. Conecta tu repo de GitHub
1. Configura:
- **Environment:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
1. Click en **Deploy** ✅

El plan Free de Render incluye:

- 750 horas/mes gratis
- HTTPS automático
- Deploy automático en cada push

-----

## Deploy en Railway (alternativa gratis)

1. Ve a [railway.app](https://railway.app)
1. **New Project → Deploy from GitHub repo**
1. Railway detecta Node automáticamente
1. Variables de entorno: ninguna requerida
1. Deploy en ~2 minutos ✅

-----

## Agregar más herramientas

Edita el array `tools` en `server.js`. Cada herramienta tiene:

```js
{
  id: 19,
  nombre: "Nombre de la herramienta",
  descripcion: "Descripción breve en español.",
  link: "https://...",
  categoria: "Asistente", // Asistente | Imágenes | Audio | Video | Código | Búsqueda | Productividad | Diseño | Traducción
  gratis: true,           // true o false
  logo: "🤖"              // Emoji representativo
}
```
