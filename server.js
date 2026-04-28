const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ─── DATA REAL (MUCHAS TOOLS) ─────────────────────────────

const tools = [
  {
    id: 1,
    nombre: "ChatGPT",
    slug: "chatgpt",
    descripcion: "Asistente de IA para escribir, programar y responder preguntas.",
    categoria: "Asistente",
    gratis: true,
    popular: 99,
    nuevo: false,
    featured: true,
    tags: ["chatbot", "ia"]
  },
  {
    id: 2,
    nombre: "Claude",
    slug: "claude",
    descripcion: "IA para análisis y escritura avanzada.",
    categoria: "Asistente",
    gratis: true,
    popular: 95,
    nuevo: false,
    featured: true,
    tags: ["ia", "texto"]
  },
  {
    id: 3,
    nombre: "Midjourney",
    slug: "midjourney",
    descripcion: "Generador de imágenes con IA.",
    categoria: "Imágenes",
    gratis: false,
    popular: 97,
    nuevo: false,
    featured: true,
    tags: ["imagenes", "arte"]
  },
  {
    id: 4,
    nombre: "Runway",
    slug: "runway",
    descripcion: "Creación de video con IA.",
    categoria: "Video",
    gratis: true,
    popular: 90,
    nuevo: true,
    featured: false,
    tags: ["video", "ia"]
  },
  {
    id: 5,
    nombre: "Suno",
    slug: "suno",
    descripcion: "Generador de música con IA.",
    categoria: "Audio",
    gratis: true,
    popular: 92,
    nuevo: true,
    featured: false,
    tags: ["musica", "ia"]
  },
  {
    id: 6,
    nombre: "Perplexity",
    slug: "perplexity",
    descripcion: "Buscador inteligente con IA.",
    categoria: "Búsqueda",
    gratis: true,
    popular: 94,
    nuevo: false,
    featured: false,
    tags: ["busqueda", "ia"]
  },
  {
    id: 7,
    nombre: "Cursor",
    slug: "cursor",
    descripcion: "Editor de código con IA integrada.",
    categoria: "Código",
    gratis: false,
    popular: 91,
    nuevo: false,
    featured: false,
    tags: ["codigo", "ia"]
  },
  {
    id: 8,
    nombre: "Canva AI",
    slug: "canva-ai",
    descripcion: "Diseño gráfico con IA.",
    categoria: "Diseño",
    gratis: true,
    popular: 96,
    nuevo: false,
    featured: false,
    tags: ["diseño", "ia"]
  }
];

// ─── ENDPOINTS ────────────────────────────────────────────

app.get("/api/tools", (req, res) => {
  const { categoria, q, orden } = req.query;
  let resultado = [...tools];

  if (categoria && categoria !== "Todas") {
    resultado = resultado.filter(t => t.categoria === categoria);
  }

  if (q) {
    const query = q.toLowerCase();
    resultado = resultado.filter(t =>
      t.nombre.toLowerCase().includes(query) ||
      t.descripcion.toLowerCase().includes(query) ||
      t.tags.some(tag => tag.includes(query))
    );
  }

  if (orden === "popular") {
    resultado.sort((a, b) => b.popular - a.popular);
  } else if (orden === "nuevo") {
    resultado.sort((a, b) => (b.nuevo ? 1 : 0) - (a.nuevo ? 1 : 0));
  } else if (orden === "gratis") {
    resultado.sort((a, b) => (b.gratis ? 1 : 0) - (a.gratis ? 1 : 0));
  }

  res.json({ total: resultado.length, tools: resultado });
});

app.get("/api/tools/:slug", (req, res) => {
  const tool = tools.find(t => t.slug === req.params.slug);
  if (!tool) return res.status(404).json({ error: "No encontrada" });
  res.json(tool);
});

// 🔥 FIX IMPORTANTE AQUÍ
app.get("/api/categorias", (req, res) => {
  const categorias = {};

  tools.forEach(t => {
    categorias[t.categoria] = (categorias[t.categoria] || 0) + 1;
  });

  const resultado = [
    { nombre: "Todas", count: tools.length },
    ...Object.entries(categorias).map(([nombre, count]) => ({ nombre, count }))
  ];

  res.json(resultado);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server corriendo`);
});