const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const tools = [
{
id: 1, nombre: "ChatGPT", slug: "chatgpt",
descripcion: "El asistente de IA más popular del mundo. Ideal para redacción, código, análisis y conversación natural en español.",
link: "https://chat.openai.com",
utm: "https://chat.openai.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=chat.openai.com",
logo: "💬", categoria: "Asistente", gratis: true,
popular: 98, nuevo: false, featured: true,
tags: ["chatbot", "redacción", "código", "español"]
},
{
id: 2, nombre: "Claude", slug: "claude",
descripcion: "Asistente de Anthropic. Excelente para análisis profundo, documentos largos y razonamiento complejo.",
link: "https://claude.ai",
utm: "https://claude.ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=claude.ai",
logo: "🤖", categoria: "Asistente", gratis: true,
popular: 92, nuevo: false, featured: true,
tags: ["chatbot", "análisis", "documentos"]
},
{
id: 3, nombre: "Gemini", slug: "gemini",
descripcion: "IA de Google integrada con Gmail, Docs y Drive. Multimodal y disponible en español.",
link: "https://gemini.google.com",
utm: "https://gemini.google.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=gemini.google.com",
logo: "✨", categoria: "Asistente", gratis: true,
popular: 88, nuevo: false, featured: false,
tags: ["google", "multimodal", "productividad"]
},
{
id: 4, nombre: "Midjourney", slug: "midjourney",
descripcion: "Generador de imágenes líder en calidad artística. Crea ilustraciones, conceptos y arte digital.",
link: "https://midjourney.com",
utm: "https://midjourney.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=midjourney.com",
logo: "🎨", categoria: "Imágenes", gratis: false,
popular: 95, nuevo: false, featured: true,
tags: ["arte", "imágenes", "diseño", "discord"]
},
{
id: 5, nombre: "DALL·E 3", slug: "dalle-3",
descripcion: "Generador de imágenes de OpenAI integrado en ChatGPT. Crea ilustraciones realistas desde texto.",
link: "https://openai.com/dall-e-3",
utm: "https://openai.com/dall-e-3?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=openai.com",
logo: "🖼️", categoria: "Imágenes", gratis: true,
popular: 80, nuevo: false, featured: false,
tags: ["imágenes", "openai", "texto a imagen"]
},
{
id: 6, nombre: "Stable Diffusion", slug: "stable-diffusion",
descripcion: "Modelo open-source para generación de imágenes. Se puede correr localmente o en la nube.",
link: "https://stability.ai",
utm: "https://stability.ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=stability.ai",
logo: "🌀", categoria: "Imágenes", gratis: true,
popular: 75, nuevo: false, featured: false,
tags: ["open source", "local", "imágenes"]
},
{
id: 7, nombre: "ElevenLabs", slug: "elevenlabs",
descripcion: "Clonación y síntesis de voz con IA. Genera voces hiper-realistas en español e inglés.",
link: "https://elevenlabs.io",
utm: "https://elevenlabs.io?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=elevenlabs.io",
logo: "🎙️", categoria: "Audio", gratis: true,
popular: 85, nuevo: false, featured: false,
tags: ["voz", "audio", "español", "clonación"]
},
{
id: 8, nombre: "Suno", slug: "suno",
descripcion: "Genera música completa con letra y melodía a partir de una descripción de texto.",
link: "https://suno.ai",
utm: "https://suno.ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=suno.ai",
logo: "🎵", categoria: "Audio", gratis: true,
popular: 78, nuevo: false, featured: false,
tags: ["música", "letras", "audio generativo"]
},
{
id: 9, nombre: "Runway", slug: "runway",
descripcion: "Suite de video con IA. Genera, edita y convierte texto a video de calidad profesional.",
link: "https://runwayml.com",
utm: "https://runwayml.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=runwayml.com",
logo: "🎬", categoria: "Video", gratis: true,
popular: 82, nuevo: false, featured: false,
tags: ["video", "texto a video", "edición"]
},
{
id: 10, nombre: "Kling AI", slug: "kling-ai",
descripcion: "Generador de video IA de alta calidad con movimientos realistas y control preciso de escenas.",
link: "https://klingai.com",
utm: "https://klingai.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=klingai.com",
logo: "📹", categoria: "Video", gratis: true,
popular: 70, nuevo: true, featured: false,
tags: ["video", "realismo", "nuevo"]
},
{
id: 11, nombre: "GitHub Copilot", slug: "github-copilot",
descripcion: "Asistente de código IA integrado en VS Code. Autocompletado inteligente y generación de funciones.",
link: "https://github.com/features/copilot",
utm: "https://github.com/features/copilot?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=github.com",
logo: "👨‍💻", categoria: "Código", gratis: false,
popular: 90, nuevo: false, featured: false,
tags: ["código", "vscode", "github", "autocompletado"]
},
{
id: 12, nombre: "Cursor", slug: "cursor",
descripcion: "Editor de código potenciado por IA. Refactoriza, genera y depura código con lenguaje natural.",
link: "https://cursor.sh",
utm: "https://cursor.sh?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=cursor.sh",
logo: "⌨️", categoria: "Código", gratis: true,
popular: 87, nuevo: false, featured: false,
tags: ["código", "editor", "refactorizar"]
},
{
id: 13, nombre: "Perplexity", slug: "perplexity",
descripcion: "Motor de búsqueda con IA que cita fuentes. Ideal para investigación rápida y actualizada.",
link: "https://perplexity.ai",
utm: "https://perplexity.ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=perplexity.ai",
logo: "🔍", categoria: "Búsqueda", gratis: true,
popular: 83, nuevo: false, featured: false,
tags: ["búsqueda", "investigación", "fuentes"]
},
{
id: 14, nombre: "Notion AI", slug: "notion-ai",
descripcion: "IA integrada en Notion para redactar, resumir y organizar notas y documentos de trabajo.",
link: "https://notion.so/product/ai",
utm: "https://notion.so/product/ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=notion.so",
logo: "📝", categoria: "Productividad", gratis: false,
popular: 79, nuevo: false, featured: false,
tags: ["notas", "productividad", "organización"]
},
{
id: 15, nombre: "Gamma", slug: "gamma",
descripcion: "Crea presentaciones, documentos y páginas web profesionales con IA en segundos.",
link: "https://gamma.app",
utm: "https://gamma.app?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=gamma.app",
logo: "📊", categoria: "Productividad", gratis: true,
popular: 74, nuevo: false, featured: false,
tags: ["presentaciones", "slides", "documentos"]
},
{
id: 16, nombre: "Canva AI", slug: "canva-ai",
descripcion: "Diseño gráfico con IA integrada. La más usada en LATAM para redes sociales y marketing.",
link: "https://canva.com",
utm: "https://canva.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=canva.com",
logo: "🖌️", categoria: "Diseño", gratis: true,
popular: 93, nuevo: false, featured: false,
tags: ["diseño", "redes sociales", "plantillas"]
},
{
id: 17, nombre: "Adobe Firefly", slug: "adobe-firefly",
descripcion: "Herramientas de IA generativa de Adobe. Genera y edita imágenes dentro de Photoshop.",
link: "https://firefly.adobe.com",
utm: "https://firefly.adobe.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=adobe.com",
logo: "🔥", categoria: "Diseño", gratis: true,
popular: 76, nuevo: false, featured: false,
tags: ["adobe", "photoshop", "imágenes"]
},
{
id: 18, nombre: "DeepL", slug: "deepl",
descripcion: "Traducción con IA de alta precisión. Superior a Google Translate para matices del español latinoamericano.",
link: "https://deepl.com",
utm: "https://deepl.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=deepl.com",
logo: "🌎", categoria: "Traducción", gratis: true,
popular: 81, nuevo: false, featured: false,
tags: ["traducción", "español", "documentos"]
},
{
id: 19, nombre: "Lovable", slug: "lovable",
descripcion: "Crea apps web completas con IA desde una descripción en texto. Deploy automático incluido.",
link: "https://lovable.dev",
utm: "https://lovable.dev?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=lovable.dev",
logo: "💜", categoria: "Código", gratis: true,
popular: 72, nuevo: true, featured: false,
tags: ["apps", "no-code", "deploy"]
},
{
id: 20, nombre: "v0 by Vercel", slug: "v0-vercel",
descripcion: "Genera interfaces React y Next.js con IA. El favorito de developers frontend en LATAM.",
link: "https://v0.dev",
utm: "https://v0.dev?utm_source=zyna&utm_medium=directorio&utm_campaign=latam",
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain=v0.dev",
logo: "▲", categoria: "Código", gratis: true,
popular: 77, nuevo: true, featured: false,
tags: ["react", "nextjs", "ui", "frontend"]
}
];

app.get("/api/tools", (req, res) => {
const { categoria, q, orden } = req.query;
let resultado = [...tools];
if (categoria && categoria !== "Todas")
resultado = resultado.filter(t => t.categoria === categoria);
if (q) {
const query = q.toLowerCase();
resultado = resultado.filter(t =>
t.nombre.toLowerCase().includes(query) ||
t.descripcion.toLowerCase().includes(query) ||
t.categoria.toLowerCase().includes(query) ||
t.tags.some(tag => tag.includes(query))
);
}
if (orden === "popular") resultado.sort((a, b) => b.popular - a.popular);
else if (orden === "nuevo") resultado.sort((a, b) => (b.nuevo ? 1 : 0) - (a.nuevo ? 1 : 0) || b.popular - a.popular);
else if (orden === "gratis") resultado.sort((a, b) => (b.gratis ? 1 : 0) - (a.gratis ? 1 : 0) || b.popular - a.popular);
else resultado.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.popular - a.popular);
res.json({ total: resultado.length, tools: resultado });
});

app.get("/api/tools/:slug", (req, res) => {
const tool = tools.find(t => t.slug === req.params.slug);
if (!tool) return res.status(404).json({ error: "No encontrada" });
res.json(tool);
});

app.get("/api/categorias", (req, res) => {
const nombres = ["Todas", ...new Set(tools.map(t => t.categoria))];
res.json(nombres.map(c => ({
nombre: c,
count: c === "Todas" ? tools.length : tools.filter(t => t.categoria === c).length
})));
});

app.get("*", (req, res) => {
res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log(`🚀 Zyna LATAM → http://localhost:${PORT}`));
