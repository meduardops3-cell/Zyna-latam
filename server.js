const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ─── DATA (50 HERRAMIENTAS) ─────────────────────────────

const tools = [
{ id:1,nombre:"ChatGPT",slug:"chatgpt",descripcion:"Asistente IA.",categoria:"Asistente",gratis:true,popular:99,nuevo:false,featured:true,tags:["ia"]},
{ id:2,nombre:"Claude",slug:"claude",descripcion:"IA avanzada.",categoria:"Asistente",gratis:true,popular:95,nuevo:false,featured:true,tags:["ia"]},
{ id:3,nombre:"Gemini",slug:"gemini",descripcion:"IA de Google.",categoria:"Asistente",gratis:true,popular:94,nuevo:false,featured:false,tags:["ia"]},
{ id:4,nombre:"Perplexity",slug:"perplexity",descripcion:"Buscador IA.",categoria:"Búsqueda",gratis:true,popular:93,nuevo:false,featured:false,tags:["ia"]},
{ id:5,nombre:"Midjourney",slug:"midjourney",descripcion:"Imágenes IA.",categoria:"Imágenes",gratis:false,popular:97,nuevo:false,featured:true,tags:["ia"]},
{ id:6,nombre:"DALL·E",slug:"dalle",descripcion:"Imágenes IA.",categoria:"Imágenes",gratis:true,popular:96,nuevo:false,featured:false,tags:["ia"]},
{ id:7,nombre:"Leonardo AI",slug:"leonardo",descripcion:"Arte IA.",categoria:"Imágenes",gratis:true,popular:90,nuevo:false,featured:false,tags:["ia"]},
{ id:8,nombre:"Stable Diffusion",slug:"stable",descripcion:"Modelo open source.",categoria:"Imágenes",gratis:true,popular:92,nuevo:false,featured:false,tags:["ia"]},
{ id:9,nombre:"Runway",slug:"runway",descripcion:"Video IA.",categoria:"Video",gratis:true,popular:91,nuevo:true,featured:false,tags:["ia"]},
{ id:10,nombre:"Pika",slug:"pika",descripcion:"Video IA.",categoria:"Video",gratis:true,popular:89,nuevo:true,featured:false,tags:["ia"]},
{ id:11,nombre:"Sora",slug:"sora",descripcion:"Video IA.",categoria:"Video",gratis:false,popular:99,nuevo:true,featured:true,tags:["ia"]},
{ id:12,nombre:"Suno",slug:"suno",descripcion:"Música IA.",categoria:"Audio",gratis:true,popular:92,nuevo:true,featured:false,tags:["ia"]},
{ id:13,nombre:"ElevenLabs",slug:"elevenlabs",descripcion:"Voz IA.",categoria:"Audio",gratis:true,popular:95,nuevo:false,featured:false,tags:["ia"]},
{ id:14,nombre:"PlayHT",slug:"playht",descripcion:"Text to speech.",categoria:"Audio",gratis:true,popular:88,nuevo:false,featured:false,tags:["ia"]},
{ id:15,nombre:"Cursor",slug:"cursor",descripcion:"Código IA.",categoria:"Código",gratis:false,popular:91,nuevo:false,featured:false,tags:["ia"]},
{ id:16,nombre:"Copilot",slug:"copilot",descripcion:"Código IA.",categoria:"Código",gratis:false,popular:96,nuevo:false,featured:true,tags:["ia"]},
{ id:17,nombre:"Codeium",slug:"codeium",descripcion:"Código IA.",categoria:"Código",gratis:true,popular:89,nuevo:false,featured:false,tags:["ia"]},
{ id:18,nombre:"Replit AI",slug:"replit",descripcion:"Programar IA.",categoria:"Código",gratis:true,popular:90,nuevo:false,featured:false,tags:["ia"]},
{ id:19,nombre:"Canva AI",slug:"canva",descripcion:"Diseño IA.",categoria:"Diseño",gratis:true,popular:96,nuevo:false,featured:false,tags:["ia"]},
{ id:20,nombre:"Adobe Firefly",slug:"firefly",descripcion:"Diseño IA.",categoria:"Diseño",gratis:true,popular:95,nuevo:false,featured:false,tags:["ia"]},
{ id:21,nombre:"Looka",slug:"looka",descripcion:"Logos IA.",categoria:"Diseño",gratis:false,popular:85,nuevo:false,featured:false,tags:["ia"]},
{ id:22,nombre:"Khroma",slug:"khroma",descripcion:"Colores IA.",categoria:"Diseño",gratis:true,popular:80,nuevo:false,featured:false,tags:["ia"]},
{ id:23,nombre:"Notion AI",slug:"notion",descripcion:"Productividad IA.",categoria:"Productividad",gratis:true,popular:95,nuevo:false,featured:false,tags:["ia"]},
{ id:24,nombre:"Gamma",slug:"gamma",descripcion:"Presentaciones IA.",categoria:"Productividad",gratis:true,popular:92,nuevo:false,featured:false,tags:["ia"]},
{ id:25,nombre:"Tome",slug:"tome",descripcion:"Slides IA.",categoria:"Productividad",gratis:true,popular:90,nuevo:false,featured:false,tags:["ia"]},
{ id:26,nombre:"Taskade",slug:"taskade",descripcion:"Organización IA.",categoria:"Productividad",gratis:true,popular:88,nuevo:false,featured:false,tags:["ia"]},
{ id:27,nombre:"DeepL",slug:"deepl",descripcion:"Traducción IA.",categoria:"Traducción",gratis:true,popular:97,nuevo:false,featured:false,tags:["ia"]},
{ id:28,nombre:"Google Translate",slug:"translate",descripcion:"Traducción.",categoria:"Traducción",gratis:true,popular:95,nuevo:false,featured:false,tags:["ia"]},
{ id:29,nombre:"Wordtune",slug:"wordtune",descripcion:"Escritura IA.",categoria:"Asistente",gratis:true,popular:90,nuevo:false,featured:false,tags:["ia"]},
{ id:30,nombre:"Jasper",slug:"jasper",descripcion:"Marketing IA.",categoria:"Asistente",gratis:false,popular:92,nuevo:false,featured:false,tags:["ia"]},
{ id:31,nombre:"Writesonic",slug:"writesonic",descripcion:"Texto IA.",categoria:"Asistente",gratis:true,popular:89,nuevo:false,featured:false,tags:["ia"]},
{ id:32,nombre:"Copy.ai",slug:"copyai",descripcion:"Copywriting IA.",categoria:"Asistente",gratis:true,popular:91,nuevo:false,featured:false,tags:["ia"]},
{ id:33,nombre:"Framer AI",slug:"framer",descripcion:"Web IA.",categoria:"Diseño",gratis:true,popular:90,nuevo:false,featured:false,tags:["ia"]},
{ id:34,nombre:"Durable",slug:"durable",descripcion:"Web IA.",categoria:"Diseño",gratis:true,popular:88,nuevo:false,featured:false,tags:["ia"]},
{ id:35,nombre:"Uizard",slug:"uizard",descripcion:"UI IA.",categoria:"Diseño",gratis:true,popular:87,nuevo:false,featured:false,tags:["ia"]},
{ id:36,nombre:"Remove.bg",slug:"removebg",descripcion:"Quitar fondo.",categoria:"Imágenes",gratis:true,popular:93,nuevo:false,featured:false,tags:["ia"]},
{ id:37,nombre:"Cleanup.pictures",slug:"cleanup",descripcion:"Editar fotos.",categoria:"Imágenes",gratis:true,popular:88,nuevo:false,featured:false,tags:["ia"]},
{ id:38,nombre:"Clipdrop",slug:"clipdrop",descripcion:"Fotos IA.",categoria:"Imágenes",gratis:true,popular:90,nuevo:false,featured:false,tags:["ia"]},
{ id:39,nombre:"HeyGen",slug:"heygen",descripcion:"Avatares IA.",categoria:"Video",gratis:false,popular:93,nuevo:true,featured:false,tags:["ia"]},
{ id:40,nombre:"Synthesia",slug:"synthesia",descripcion:"Video IA.",categoria:"Video",gratis:false,popular:95,nuevo:false,featured:false,tags:["ia"]},
{ id:41,nombre:"Descript",slug:"descript",descripcion:"Audio/video IA.",categoria:"Audio",gratis:true,popular:92,nuevo:false,featured:false,tags:["ia"]},
{ id:42,nombre:"Otter",slug:"otter",descripcion:"Transcripción IA.",categoria:"Audio",gratis:true,popular:91,nuevo:false,featured:false,tags:["ia"]},
{ id:43,nombre:"Zapier AI",slug:"zapier",descripcion:"Automatización.",categoria:"Productividad",gratis:true,popular:93,nuevo:false,featured:false,tags:["ia"]},
{ id:44,nombre:"Make",slug:"make",descripcion:"Automatización.",categoria:"Productividad",gratis:true,popular:90,nuevo:false,featured:false,tags:["ia"]},
{ id:45,nombre:"LangChain",slug:"langchain",descripcion:"Framework IA.",categoria:"Código",gratis:true,popular:92,nuevo:false,featured:false,tags:["ia"]},
{ id:46,nombre:"HuggingFace",slug:"huggingface",descripcion:"Modelos IA.",categoria:"Código",gratis:true,popular:95,nuevo:false,featured:false,tags:["ia"]},
{ id:47,nombre:"Poe",slug:"poe",descripcion:"Multi IA.",categoria:"Asistente",gratis:true,popular:93,nuevo:false,featured:false,tags:["ia"]},
{ id:48,nombre:"Phind",slug:"phind",descripcion:"Buscar código.",categoria:"Código",gratis:true,popular:90,nuevo:false,featured:false,tags:["ia"]},
{ id:49,nombre:"Andi",slug:"andi",descripcion:"Buscador IA.",categoria:"Búsqueda",gratis:true,popular:85,nuevo:false,featured:false,tags:["ia"]},
{ id:50,nombre:"You.com",slug:"you",descripcion:"Buscador IA.",categoria:"Búsqueda",gratis:true,popular:88,nuevo:false,featured:false,tags:["ia"]}
];

// ─── API ─────────────────────────────

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
  console.log("🚀 Server listo");
});