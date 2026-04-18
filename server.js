const express = require(“express”);
const cors = require(“cors”);
const path = require(“path”);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, “public”)));

// ─── DATOS: Herramientas de IA para LATAM ───────────────────────────────────
const tools = [
{
id: 1,
nombre: “ChatGPT”,
descripcion: “El asistente de IA más popular del mundo. Ideal para redacción, código, análisis y conversación natural.”,
link: “https://chat.openai.com”,
categoria: “Asistente”,
gratis: true,
logo: “💬”
},
{
id: 2,
nombre: “Claude”,
descripcion: “Asistente de IA de Anthropic. Excelente para análisis profundo, escritura larga y razonamiento complejo.”,
link: “https://claude.ai”,
categoria: “Asistente”,
gratis: true,
logo: “🤖”
},
{
id: 3,
nombre: “Gemini”,
descripcion: “IA de Google integrada con el ecosistema de Google Workspace. Multimodal y potente.”,
link: “https://gemini.google.com”,
categoria: “Asistente”,
gratis: true,
logo: “✨”
},
{
id: 4,
nombre: “Midjourney”,
descripcion: “Generador de imágenes por IA líder en calidad artística. Ideal para diseño y arte digital.”,
link: “https://midjourney.com”,
categoria: “Imágenes”,
gratis: false,
logo: “🎨”
},
{
id: 5,
nombre: “DALL·E 3”,
descripcion: “Generador de imágenes de OpenAI integrado en ChatGPT. Crea ilustraciones realistas desde texto.”,
link: “https://openai.com/dall-e-3”,
categoria: “Imágenes”,
gratis: true,
logo: “🖼️”
},
{
id: 6,
nombre: “Stable Diffusion”,
descripcion: “Modelo open-source para generación de imágenes. Se puede correr localmente o en la nube.”,
link: “https://stability.ai”,
categoria: “Imágenes”,
gratis: true,
logo: “🌀”
},
{
id: 7,
nombre: “ElevenLabs”,
descripcion: “Clonación y síntesis de voz con IA. Crea voces realistas en español e inglés.”,
link: “https://elevenlabs.io”,
categoria: “Audio”,
gratis: true,
logo: “🎙️”
},
{
id: 8,
nombre: “Suno”,
descripcion: “Genera música completa con letra y melodía a partir de una descripción de texto.”,
link: “https://suno.ai”,
categoria: “Audio”,
gratis: true,
logo: “🎵”
},
{
id: 9,
nombre: “Runway”,
descripcion: “Suite de herramientas de video con IA. Genera y edita videos profesionales.”,
link: “https://runwayml.com”,
categoria: “Video”,
gratis: true,
logo: “🎬”
},
{
id: 10,
nombre: “Kling AI”,
descripcion: “Generador de video IA de alta calidad con movimientos realistas y control preciso.”,
link: “https://klingai.com”,
categoria: “Video”,
gratis: true,
logo: “📹”
},
{
id: 11,
nombre: “GitHub Copilot”,
descripcion: “Asistente de código IA integrado en VS Code y otros editores. Autocompletado inteligente.”,
link: “https://github.com/features/copilot”,
categoria: “Código”,
gratis: false,
logo: “👨‍💻”
},
{
id: 12,
nombre: “Cursor”,
descripcion: “Editor de código potenciado por IA. Refactoriza, genera y depura código con lenguaje natural.”,
link: “https://cursor.sh”,
categoria: “Código”,
gratis: true,
logo: “⌨️”
},
{
id: 13,
nombre: “Perplexity”,
descripcion: “Motor de búsqueda con IA que cita fuentes. Ideal para investigación rápida y actualizada.”,
link: “https://perplexity.ai”,
categoria: “Búsqueda”,
gratis: true,
logo: “🔍”
},
{
id: 14,
nombre: “Notion AI”,
descripcion: “IA integrada en Notion para redactar, resumir y organizar notas y documentos.”,
link: “https://notion.so/product/ai”,
categoria: “Productividad”,
gratis: false,
logo: “📝”
},
{
id: 15,
nombre: “Gamma”,
descripcion: “Crea presentaciones, documentos y páginas web con IA en segundos.”,
link: “https://gamma.app”,
categoria: “Productividad”,
gratis: true,
logo: “📊”
},
{
id: 16,
nombre: “Canva AI”,
descripcion: “Diseño gráfico con herramientas de IA integradas. Muy popular en LATAM.”,
link: “https://canva.com”,
categoria: “Diseño”,
gratis: true,
logo: “🖌️”
},
{
id: 17,
nombre: “Adobe Firefly”,
descripcion: “Herramientas de IA generativa de Adobe para imágenes, texto y diseño.”,
link: “https://firefly.adobe.com”,
categoria: “Diseño”,
gratis: true,
logo: “🔥”
},
{
id: 18,
nombre: “DeepL”,
descripcion: “Traducción con IA de alta precisión. Muy superior a Google Translate para matices del español.”,
link: “https://deepl.com”,
categoria: “Traducción”,
gratis: true,
logo: “🌎”
}
];

// ─── ENDPOINT PRINCIPAL ──────────────────────────────────────────────────────
app.get(”/api/tools”, (req, res) => {
const { categoria, q } = req.query;
let resultado = […tools];

if (categoria && categoria !== “Todas”) {
resultado = resultado.filter(t => t.categoria === categoria);
}

if (q) {
const query = q.toLowerCase();
resultado = resultado.filter(
t =>
t.nombre.toLowerCase().includes(query) ||
t.descripcion.toLowerCase().includes(query) ||
t.categoria.toLowerCase().includes(query)
);
}

res.json({
total: resultado.length,
tools: resultado
});
});

app.get(”/api/categorias”, (req, res) => {
const cats = [“Todas”, …new Set(tools.map(t => t.categoria))];
res.json(cats);
});

// Fallback → index.html
app.get(”*”, (req, res) => {
res.sendFile(path.join(__dirname, “public”, “index.html”));
});

app.listen(PORT, () => {
console.log(`🚀 Zyna LATAM corriendo en http://localhost:${PORT}`);
});
