const express = require(“express”);
const cors = require(“cors”);
const path = require(“path”);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, “public”)));

// ─── 55+ HERRAMIENTAS DE IA REALES ────────────────────────────────────────────
const tools = [

// ══ ASISTENTES ══
{
id: 1, nombre: “ChatGPT”, slug: “chatgpt”,
descripcion: “El asistente de IA más usado del mundo. Redacta, analiza, programa y responde cualquier pregunta en español con naturalidad.”,
link: “https://chat.openai.com”,
utm: “https://chat.openai.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=chat.openai.com”,
logo: “💬”, categoria: “Asistente”, gratis: true,
popular: 99, nuevo: false, featured: true,
tags: [“chatbot”, “redacción”, “código”, “español”, “openai”]
},
{
id: 2, nombre: “Claude”, slug: “claude”,
descripcion: “Asistente de Anthropic con razonamiento profundo. Ideal para analizar documentos largos, escribir y debatir ideas complejas.”,
link: “https://claude.ai”,
utm: “https://claude.ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=claude.ai”,
logo: “🤖”, categoria: “Asistente”, gratis: true,
popular: 95, nuevo: false, featured: true,
tags: [“chatbot”, “análisis”, “documentos”, “anthropic”]
},
{
id: 3, nombre: “Gemini”, slug: “gemini”,
descripcion: “IA de Google integrada con Gmail, Docs y Drive. Entiende imágenes, audio y texto. Disponible en español.”,
link: “https://gemini.google.com”,
utm: “https://gemini.google.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=gemini.google.com”,
logo: “✨”, categoria: “Asistente”, gratis: true,
popular: 90, nuevo: false, featured: false,
tags: [“google”, “multimodal”, “productividad”, “español”]
},
{
id: 4, nombre: “Copilot (Microsoft)”, slug: “copilot-microsoft”,
descripcion: “IA de Microsoft basada en GPT-4. Integrada en Windows, Edge, Office y Bing. Gratis para todos.”,
link: “https://copilot.microsoft.com”,
utm: “https://copilot.microsoft.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=copilot.microsoft.com”,
logo: “🪟”, categoria: “Asistente”, gratis: true,
popular: 85, nuevo: false, featured: false,
tags: [“microsoft”, “office”, “windows”, “gpt-4”]
},
{
id: 5, nombre: “Perplexity”, slug: “perplexity”,
descripcion: “Motor de búsqueda con IA que cita fuentes reales. Ideal para investigar y obtener respuestas actualizadas con referencias.”,
link: “https://perplexity.ai”,
utm: “https://perplexity.ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=perplexity.ai”,
logo: “🔍”, categoria: “Asistente”, gratis: true,
popular: 88, nuevo: false, featured: false,
tags: [“búsqueda”, “investigación”, “fuentes”, “web”]
},
{
id: 6, nombre: “Meta AI”, slug: “meta-ai”,
descripcion: “Asistente de IA de Meta integrado en WhatsApp, Instagram y Facebook. Disponible en español para toda LATAM.”,
link: “https://www.meta.ai”,
utm: “https://www.meta.ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=meta.ai”,
logo: “🔵”, categoria: “Asistente”, gratis: true,
popular: 82, nuevo: false, featured: false,
tags: [“meta”, “whatsapp”, “instagram”, “facebook”, “español”]
},
{
id: 7, nombre: “Grok”, slug: “grok”,
descripcion: “IA de xAI (Elon Musk) integrada en X (Twitter). Accede a información en tiempo real y responde con humor y sin filtros.”,
link: “https://grok.com”,
utm: “https://grok.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=grok.com”,
logo: “⚡”, categoria: “Asistente”, gratis: true,
popular: 78, nuevo: false, featured: false,
tags: [“xai”, “twitter”, “tiempo real”, “elon musk”]
},
{
id: 8, nombre: “Le Chat (Mistral)”, slug: “le-chat”,
descripcion: “Asistente de IA europeo de Mistral. Rápido, privado y multilingüe. Excelente alternativa a ChatGPT con enfoque en privacidad.”,
link: “https://chat.mistral.ai”,
utm: “https://chat.mistral.ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=mistral.ai”,
logo: “🌊”, categoria: “Asistente”, gratis: true,
popular: 70, nuevo: false, featured: false,
tags: [“mistral”, “privacidad”, “europeo”, “multilingüe”]
},

// ══ IMÁGENES ══
{
id: 9, nombre: “Midjourney”, slug: “midjourney”,
descripcion: “El generador de imágenes más potente del mercado. Crea arte digital, ilustraciones y diseños de calidad profesional desde texto.”,
link: “https://midjourney.com”,
utm: “https://midjourney.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=midjourney.com”,
logo: “🎨”, categoria: “Imágenes”, gratis: false,
popular: 97, nuevo: false, featured: true,
tags: [“arte”, “imágenes”, “diseño”, “discord”, “ilustración”]
},
{
id: 10, nombre: “DALL·E 3”, slug: “dalle-3”,
descripcion: “Generador de imágenes de OpenAI integrado en ChatGPT Plus. Crea imágenes realistas y artísticas desde descripciones de texto.”,
link: “https://openai.com/dall-e-3”,
utm: “https://openai.com/dall-e-3?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=openai.com”,
logo: “🖼️”, categoria: “Imágenes”, gratis: false,
popular: 84, nuevo: false, featured: false,
tags: [“imágenes”, “openai”, “texto a imagen”, “realista”]
},
{
id: 11, nombre: “Stable Diffusion”, slug: “stable-diffusion”,
descripcion: “Modelo open-source para generación de imágenes. Gratis, personalizable y puede correrse localmente en tu computadora.”,
link: “https://stability.ai”,
utm: “https://stability.ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=stability.ai”,
logo: “🌀”, categoria: “Imágenes”, gratis: true,
popular: 79, nuevo: false, featured: false,
tags: [“open source”, “local”, “imágenes”, “gratis”]
},
{
id: 12, nombre: “Adobe Firefly”, slug: “adobe-firefly”,
descripcion: “IA generativa de Adobe integrada en Photoshop y Illustrator. Genera, edita y retoca imágenes con lenguaje natural.”,
link: “https://firefly.adobe.com”,
utm: “https://firefly.adobe.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=adobe.com”,
logo: “🔥”, categoria: “Imágenes”, gratis: true,
popular: 80, nuevo: false, featured: false,
tags: [“adobe”, “photoshop”, “illustrator”, “edición”]
},
{
id: 13, nombre: “Leonardo AI”, slug: “leonardo-ai”,
descripcion: “Plataforma de generación de imágenes con modelos especializados para videojuegos, concept art y diseño de personajes.”,
link: “https://leonardo.ai”,
utm: “https://leonardo.ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=leonardo.ai”,
logo: “🦁”, categoria: “Imágenes”, gratis: true,
popular: 75, nuevo: false, featured: false,
tags: [“videojuegos”, “concept art”, “personajes”, “modelos”]
},
{
id: 14, nombre: “Ideogram”, slug: “ideogram”,
descripcion: “Generador de imágenes especializado en texto dentro de imágenes. El mejor para crear logos, posters y diseños con tipografía.”,
link: “https://ideogram.ai”,
utm: “https://ideogram.ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=ideogram.ai”,
logo: “🔤”, categoria: “Imágenes”, gratis: true,
popular: 72, nuevo: false, featured: false,
tags: [“texto en imágenes”, “logos”, “posters”, “tipografía”]
},
{
id: 15, nombre: “Flux (Black Forest Labs)”, slug: “flux”,
descripcion: “Modelo de imagen de nueva generación, rival de Midjourney. Calidad fotorrealista excepcional. Accesible vía Replicate y otros.”,
link: “https://replicate.com/black-forest-labs/flux-1.1-pro”,
utm: “https://replicate.com/black-forest-labs/flux-1.1-pro?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=replicate.com”,
logo: “⚡”, categoria: “Imágenes”, gratis: false,
popular: 76, nuevo: true, featured: false,
tags: [“fotorrealista”, “nuevo”, “flux”, “replicate”]
},
{
id: 16, nombre: “Canva AI”, slug: “canva-ai”,
descripcion: “Diseño gráfico con IA integrada. La herramienta más popular en LATAM para crear contenido para redes sociales y marketing.”,
link: “https://canva.com”,
utm: “https://canva.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=canva.com”,
logo: “🖌️”, categoria: “Imágenes”, gratis: true,
popular: 94, nuevo: false, featured: false,
tags: [“diseño”, “redes sociales”, “plantillas”, “marketing”, “latam”]
},

// ══ VIDEO ══
{
id: 17, nombre: “Runway”, slug: “runway”,
descripcion: “Suite profesional de video con IA. Genera videos desde texto o imágenes, elimina fondos y edita con efectos cinematográficos.”,
link: “https://runwayml.com”,
utm: “https://runwayml.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=runwayml.com”,
logo: “🎬”, categoria: “Video”, gratis: true,
popular: 86, nuevo: false, featured: false,
tags: [“video”, “texto a video”, “edición”, “cinematográfico”]
},
{
id: 18, nombre: “Kling AI”, slug: “kling-ai”,
descripcion: “Generador de video chino de alta calidad. Movimientos realistas, escenas largas y control preciso de personajes.”,
link: “https://klingai.com”,
utm: “https://klingai.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=klingai.com”,
logo: “📹”, categoria: “Video”, gratis: true,
popular: 74, nuevo: true, featured: false,
tags: [“video”, “realismo”, “personajes”, “chino”]
},
{
id: 19, nombre: “Sora (OpenAI)”, slug: “sora”,
descripcion: “Generador de video de OpenAI. Crea videos de hasta 1 minuto con calidad cinematográfica desde una descripción de texto.”,
link: “https://sora.com”,
utm: “https://sora.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=sora.com”,
logo: “🎥”, categoria: “Video”, gratis: false,
popular: 88, nuevo: true, featured: false,
tags: [“video”, “openai”, “cinematográfico”, “texto a video”]
},
{
id: 20, nombre: “Pika Labs”, slug: “pika-labs”,
descripcion: “Genera y edita videos cortos con IA. Ideal para reels, animaciones y contenido para redes sociales.”,
link: “https://pika.art”,
utm: “https://pika.art?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=pika.art”,
logo: “⚡”, categoria: “Video”, gratis: true,
popular: 73, nuevo: false, featured: false,
tags: [“video”, “reels”, “animación”, “redes sociales”]
},
{
id: 21, nombre: “HeyGen”, slug: “heygen”,
descripcion: “Crea videos con avatares IA que hablan en español. Perfecto para marketing, cursos y contenido corporativo sin cámara.”,
link: “https://heygen.com”,
utm: “https://heygen.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=heygen.com”,
logo: “🧑‍💼”, categoria: “Video”, gratis: true,
popular: 80, nuevo: false, featured: false,
tags: [“avatar”, “marketing”, “corporativo”, “español”, “cursos”]
},
{
id: 22, nombre: “Synthesia”, slug: “synthesia”,
descripcion: “Plataforma de videos con presentadores IA en más de 130 idiomas incluyendo español. Para capacitación y comunicación empresarial.”,
link: “https://synthesia.io”,
utm: “https://synthesia.io?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=synthesia.io”,
logo: “🎙️”, categoria: “Video”, gratis: false,
popular: 75, nuevo: false, featured: false,
tags: [“presentador”, “capacitación”, “español”, “empresarial”]
},
{
id: 23, nombre: “Luma Dream Machine”, slug: “luma-dream-machine”,
descripcion: “Genera videos en HD de calidad cinematográfica desde texto o imágenes. Movimientos de cámara naturales y fluidos.”,
link: “https://lumalabs.ai/dream-machine”,
utm: “https://lumalabs.ai/dream-machine?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=lumalabs.ai”,
logo: “🌙”, categoria: “Video”, gratis: true,
popular: 71, nuevo: true, featured: false,
tags: [“video”, “HD”, “cámara”, “cinematográfico”]
},

// ══ AUDIO ══
{
id: 24, nombre: “ElevenLabs”, slug: “elevenlabs”,
descripcion: “La mejor plataforma de voz IA. Clona cualquier voz en minutos y genera narración en español con entonación natural.”,
link: “https://elevenlabs.io”,
utm: “https://elevenlabs.io?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=elevenlabs.io”,
logo: “🎙️”, categoria: “Audio”, gratis: true,
popular: 90, nuevo: false, featured: true,
tags: [“voz”, “clonación”, “español”, “narración”, “podcast”]
},
{
id: 25, nombre: “Suno”, slug: “suno”,
descripcion: “Genera canciones completas con letra, melodía y producción desde una frase. El Midjourney de la música.”,
link: “https://suno.ai”,
utm: “https://suno.ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=suno.ai”,
logo: “🎵”, categoria: “Audio”, gratis: true,
popular: 85, nuevo: false, featured: false,
tags: [“música”, “canciones”, “letra”, “producción musical”]
},
{
id: 26, nombre: “Udio”, slug: “udio”,
descripcion: “Rival de Suno para generación de música. Calidad de producción profesional en múltiples géneros y estilos.”,
link: “https://udio.com”,
utm: “https://udio.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=udio.com”,
logo: “🎶”, categoria: “Audio”, gratis: true,
popular: 74, nuevo: false, featured: false,
tags: [“música”, “géneros”, “producción”, “calidad”]
},
{
id: 27, nombre: “Whisper (OpenAI)”, slug: “whisper”,
descripcion: “Transcripción de audio a texto con precisión extraordinaria. Soporta español latinoamericano y más de 90 idiomas.”,
link: “https://openai.com/research/whisper”,
utm: “https://openai.com/research/whisper?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=openai.com”,
logo: “📝”, categoria: “Audio”, gratis: true,
popular: 76, nuevo: false, featured: false,
tags: [“transcripción”, “español”, “audio a texto”, “open source”]
},
{
id: 28, nombre: “Descript”, slug: “descript”,
descripcion: “Edita audio y video como si fuera texto. Elimina silencios, clona tu voz y genera transcripciones automáticas.”,
link: “https://descript.com”,
utm: “https://descript.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=descript.com”,
logo: “✂️”, categoria: “Audio”, gratis: true,
popular: 72, nuevo: false, featured: false,
tags: [“edición”, “podcast”, “transcripción”, “voz”]
},
{
id: 29, nombre: “Adobe Podcast”, slug: “adobe-podcast”,
descripcion: “Mejora la calidad de tu voz con IA en segundos. Elimina ruido de fondo y hace que cualquier micrófono suene profesional.”,
link: “https://podcast.adobe.com”,
utm: “https://podcast.adobe.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=adobe.com”,
logo: “🎚️”, categoria: “Audio”, gratis: true,
popular: 78, nuevo: false, featured: false,
tags: [“podcast”, “calidad”, “ruido”, “micrófono”, “adobe”]
},

// ══ CÓDIGO ══
{
id: 30, nombre: “GitHub Copilot”, slug: “github-copilot”,
descripcion: “El asistente de código más usado del mundo. Integrado en VS Code, completa funciones enteras y genera código desde comentarios.”,
link: “https://github.com/features/copilot”,
utm: “https://github.com/features/copilot?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=github.com”,
logo: “👨‍💻”, categoria: “Código”, gratis: false,
popular: 93, nuevo: false, featured: false,
tags: [“código”, “vscode”, “github”, “autocompletado”]
},
{
id: 31, nombre: “Cursor”, slug: “cursor”,
descripcion: “Editor de código IA que entiende todo tu proyecto. Refactoriza, genera y corrige bugs con lenguaje natural. El favorito de devs.”,
link: “https://cursor.sh”,
utm: “https://cursor.sh?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=cursor.sh”,
logo: “⌨️”, categoria: “Código”, gratis: true,
popular: 91, nuevo: false, featured: false,
tags: [“código”, “editor”, “refactorizar”, “vscode”]
},
{
id: 32, nombre: “v0 by Vercel”, slug: “v0-vercel”,
descripcion: “Genera interfaces React, Next.js y Tailwind desde texto. Crea componentes profesionales listos para producción en segundos.”,
link: “https://v0.dev”,
utm: “https://v0.dev?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=v0.dev”,
logo: “▲”, categoria: “Código”, gratis: true,
popular: 82, nuevo: false, featured: false,
tags: [“react”, “nextjs”, “ui”, “frontend”, “tailwind”]
},
{
id: 33, nombre: “Lovable”, slug: “lovable”,
descripcion: “Crea apps web completas con IA desde una descripción. Frontend, backend y base de datos. Deploy con un clic.”,
link: “https://lovable.dev”,
utm: “https://lovable.dev?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=lovable.dev”,
logo: “💜”, categoria: “Código”, gratis: true,
popular: 78, nuevo: true, featured: false,
tags: [“apps”, “fullstack”, “deploy”, “sin código”]
},
{
id: 34, nombre: “Bolt.new”, slug: “bolt-new”,
descripcion: “Construye apps completas desde el navegador con IA. Soporta React, Next.js, Node.js y Supabase. Sin instalar nada.”,
link: “https://bolt.new”,
utm: “https://bolt.new?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=bolt.new”,
logo: “⚡”, categoria: “Código”, gratis: true,
popular: 80, nuevo: true, featured: false,
tags: [“apps”, “navegador”, “react”, “node”, “supabase”]
},
{
id: 35, nombre: “Replit AI”, slug: “replit-ai”,
descripcion: “IDE en el navegador con agente IA que construye y deploya apps completas. Ideal para empezar sin instalar nada.”,
link: “https://replit.com”,
utm: “https://replit.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=replit.com”,
logo: “🔄”, categoria: “Código”, gratis: true,
popular: 77, nuevo: false, featured: false,
tags: [“ide”, “deploy”, “navegador”, “agente”]
},
{
id: 36, nombre: “Windsurf (Codeium)”, slug: “windsurf”,
descripcion: “Editor de código IA con modelo Cascade que razona sobre todo tu proyecto. Alternativa gratuita a Cursor con flujos agénticos.”,
link: “https://codeium.com/windsurf”,
utm: “https://codeium.com/windsurf?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=codeium.com”,
logo: “🏄”, categoria: “Código”, gratis: true,
popular: 74, nuevo: true, featured: false,
tags: [“código”, “editor”, “cascade”, “agéntico”, “gratis”]
},

// ══ PRODUCTIVIDAD ══
{
id: 37, nombre: “Notion AI”, slug: “notion-ai”,
descripcion: “IA integrada en Notion para redactar, resumir, traducir y organizar notas. El asistente perfecto para equipos y proyectos.”,
link: “https://notion.so/product/ai”,
utm: “https://notion.so/product/ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=notion.so”,
logo: “📝”, categoria: “Productividad”, gratis: false,
popular: 82, nuevo: false, featured: false,
tags: [“notas”, “organización”, “equipos”, “resumir”]
},
{
id: 38, nombre: “Gamma”, slug: “gamma”,
descripcion: “Crea presentaciones, one-pagers y sitios web profesionales con IA en menos de 2 minutos. Sin PowerPoint.”,
link: “https://gamma.app”,
utm: “https://gamma.app?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=gamma.app”,
logo: “📊”, categoria: “Productividad”, gratis: true,
popular: 78, nuevo: false, featured: false,
tags: [“presentaciones”, “slides”, “web”, “one-pager”]
},
{
id: 39, nombre: “Otter.ai”, slug: “otter-ai”,
descripcion: “Transcribe reuniones de Zoom, Meet y Teams en tiempo real. Genera resúmenes automáticos y extrae tareas de cada reunión.”,
link: “https://otter.ai”,
utm: “https://otter.ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=otter.ai”,
logo: “🦦”, categoria: “Productividad”, gratis: true,
popular: 75, nuevo: false, featured: false,
tags: [“reuniones”, “transcripción”, “zoom”, “meet”, “tareas”]
},
{
id: 40, nombre: “Zapier AI”, slug: “zapier-ai”,
descripcion: “Automatiza flujos de trabajo entre más de 7000 apps con IA. Conecta Gmail, Slack, Notion, HubSpot y miles de herramientas más.”,
link: “https://zapier.com/ai”,
utm: “https://zapier.com/ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=zapier.com”,
logo: “⚡”, categoria: “Productividad”, gratis: true,
popular: 80, nuevo: false, featured: false,
tags: [“automatización”, “integraciones”, “workflows”, “sin código”]
},
{
id: 41, nombre: “Make (Integromat)”, slug: “make”,
descripcion: “Automatización visual de flujos de trabajo con IA. Alternativa a Zapier con más flexibilidad y plan gratuito más generoso.”,
link: “https://make.com”,
utm: “https://make.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=make.com”,
logo: “🔧”, categoria: “Productividad”, gratis: true,
popular: 74, nuevo: false, featured: false,
tags: [“automatización”, “visual”, “workflows”, “integraciones”]
},
{
id: 42, nombre: “Reclaim AI”, slug: “reclaim-ai”,
descripcion: “Organiza tu calendario automáticamente con IA. Protege tiempo para trabajo profundo, reuniones y hábitos.”,
link: “https://reclaim.ai”,
utm: “https://reclaim.ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=reclaim.ai”,
logo: “📅”, categoria: “Productividad”, gratis: true,
popular: 68, nuevo: false, featured: false,
tags: [“calendario”, “tiempo”, “hábitos”, “reuniones”]
},

// ══ DISEÑO ══
{
id: 43, nombre: “Framer AI”, slug: “framer-ai”,
descripcion: “Crea sitios web profesionales con IA desde una descripción. Diseño, animaciones y publicación en un solo lugar.”,
link: “https://framer.com”,
utm: “https://framer.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=framer.com”,
logo: “🖥️”, categoria: “Diseño”, gratis: true,
popular: 78, nuevo: false, featured: false,
tags: [“web”, “animaciones”, “diseño”, “publicación”]
},
{
id: 44, nombre: “Looka”, slug: “looka”,
descripcion: “Crea tu logo y branding completo con IA en minutos. Genera paleta de colores, tipografía y kit de marca listo para usar.”,
link: “https://looka.com”,
utm: “https://looka.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=looka.com”,
logo: “🎯”, categoria: “Diseño”, gratis: false,
popular: 72, nuevo: false, featured: false,
tags: [“logo”, “branding”, “identidad”, “marca”]
},
{
id: 45, nombre: “Uizard”, slug: “uizard”,
descripcion: “Diseña apps y webs a partir de bocetos o texto con IA. Convierte ideas en wireframes y prototipos interactivos rápido.”,
link: “https://uizard.io”,
utm: “https://uizard.io?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=uizard.io”,
logo: “📱”, categoria: “Diseño”, gratis: true,
popular: 68, nuevo: false, featured: false,
tags: [“wireframes”, “prototipos”, “apps”, “bocetos”]
},
{
id: 46, nombre: “Khroma”, slug: “khroma”,
descripcion: “Genera paletas de colores personalizadas con IA basadas en tus preferencias. El asistente de color para diseñadores.”,
link: “https://khroma.co”,
utm: “https://khroma.co?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=khroma.co”,
logo: “🎨”, categoria: “Diseño”, gratis: true,
popular: 62, nuevo: false, featured: false,
tags: [“colores”, “paleta”, “diseño”, “personalización”]
},

// ══ ESCRITURA ══
{
id: 47, nombre: “Jasper AI”, slug: “jasper-ai”,
descripcion: “Plataforma de copywriting con IA para marketing. Genera textos para anuncios, emails, blogs y redes sociales en español.”,
link: “https://jasper.ai”,
utm: “https://jasper.ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=jasper.ai”,
logo: “✍️”, categoria: “Escritura”, gratis: false,
popular: 76, nuevo: false, featured: false,
tags: [“copywriting”, “marketing”, “emails”, “anuncios”, “español”]
},
{
id: 48, nombre: “Copy.ai”, slug: “copy-ai”,
descripcion: “Genera copy para marketing, ventas y redes sociales con IA. Más de 90 plantillas en español listas para usar.”,
link: “https://copy.ai”,
utm: “https://copy.ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=copy.ai”,
logo: “📋”, categoria: “Escritura”, gratis: true,
popular: 72, nuevo: false, featured: false,
tags: [“copywriting”, “ventas”, “plantillas”, “español”]
},
{
id: 49, nombre: “Grammarly”, slug: “grammarly”,
descripcion: “Corrector de escritura con IA para inglés y español. Mejora gramática, estilo y tono en emails, documentos y redes.”,
link: “https://grammarly.com”,
utm: “https://grammarly.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=grammarly.com”,
logo: “✅”, categoria: “Escritura”, gratis: true,
popular: 82, nuevo: false, featured: false,
tags: [“gramática”, “corrección”, “inglés”, “español”, “estilo”]
},
{
id: 50, nombre: “Wordtune”, slug: “wordtune”,
descripcion: “Reescribe y mejora tus textos con IA. Cambia el tono, expande ideas o resume párrafos con un clic.”,
link: “https://wordtune.com”,
utm: “https://wordtune.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=wordtune.com”,
logo: “🔄”, categoria: “Escritura”, gratis: true,
popular: 68, nuevo: false, featured: false,
tags: [“reescritura”, “tono”, “resumir”, “expandir”]
},

// ══ TRADUCCIÓN ══
{
id: 51, nombre: “DeepL”, slug: “deepl”,
descripcion: “La traducción con IA más precisa del mercado. Superior a Google Translate para matices del español latinoamericano.”,
link: “https://deepl.com”,
utm: “https://deepl.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=deepl.com”,
logo: “🌎”, categoria: “Traducción”, gratis: true,
popular: 85, nuevo: false, featured: false,
tags: [“traducción”, “español”, “documentos”, “precisión”]
},
{
id: 52, nombre: “Google Translate”, slug: “google-translate”,
descripcion: “El traductor más usado del mundo. Traduce texto, voz, imágenes y páginas web en más de 100 idiomas incluyendo español.”,
link: “https://translate.google.com”,
utm: “https://translate.google.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=translate.google.com”,
logo: “🌐”, categoria: “Traducción”, gratis: true,
popular: 90, nuevo: false, featured: false,
tags: [“traducción”, “voz”, “imágenes”, “google”, “100 idiomas”]
},

// ══ EDUCACIÓN ══
{
id: 53, nombre: “Khanmigo (Khan Academy)”, slug: “khanmigo”,
descripcion: “Tutor personal con IA de Khan Academy. Aprende matemáticas, ciencias e historia con un asistente que explica paso a paso.”,
link: “https://khanacademy.org/khan-labs”,
utm: “https://khanacademy.org/khan-labs?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=khanacademy.org”,
logo: “🎓”, categoria: “Educación”, gratis: true,
popular: 76, nuevo: false, featured: false,
tags: [“educación”, “tutor”, “matemáticas”, “ciencias”, “gratis”]
},
{
id: 54, nombre: “Duolingo Max”, slug: “duolingo-max”,
descripcion: “Aprende inglés y otros idiomas con IA. El plan Max incluye explicaciones de errores y conversaciones con IA en tiempo real.”,
link: “https://duolingo.com”,
utm: “https://duolingo.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=duolingo.com”,
logo: “🦉”, categoria: “Educación”, gratis: true,
popular: 88, nuevo: false, featured: false,
tags: [“idiomas”, “inglés”, “aprendizaje”, “conversación”]
},
{
id: 55, nombre: “Quizlet AI”, slug: “quizlet-ai”,
descripcion: “Estudia con flashcards y tests generados por IA. Crea material de estudio desde tus apuntes o documentos en segundos.”,
link: “https://quizlet.com”,
utm: “https://quizlet.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=quizlet.com”,
logo: “📚”, categoria: “Educación”, gratis: true,
popular: 78, nuevo: false, featured: false,
tags: [“flashcards”, “estudio”, “apuntes”, “tests”]
},

// ══ NEGOCIOS ══
{
id: 56, nombre: “HubSpot AI”, slug: “hubspot-ai”,
descripcion: “CRM con IA integrada para ventas y marketing. Genera emails, analiza llamadas y predice qué clientes tienen más probabilidad de comprar.”,
link: “https://hubspot.com”,
utm: “https://hubspot.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=hubspot.com”,
logo: “🧲”, categoria: “Negocios”, gratis: true,
popular: 80, nuevo: false, featured: false,
tags: [“crm”, “ventas”, “marketing”, “emails”, “clientes”]
},
{
id: 57, nombre: “Tidio”, slug: “tidio”,
descripcion: “Chatbot con IA para tu sitio web. Responde preguntas de clientes 24/7 en español y aumenta las ventas automáticamente.”,
link: “https://tidio.com”,
utm: “https://tidio.com?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=tidio.com”,
logo: “💬”, categoria: “Negocios”, gratis: true,
popular: 72, nuevo: false, featured: false,
tags: [“chatbot”, “soporte”, “ventas”, “español”, “web”]
},
{
id: 58, nombre: “Beautiful.ai”, slug: “beautiful-ai”,
descripcion: “Crea presentaciones de negocios profesionales con IA que diseña automáticamente cada slide. Ideal para pitches e inversores.”,
link: “https://beautiful.ai”,
utm: “https://beautiful.ai?utm_source=zyna&utm_medium=directorio&utm_campaign=latam”,
logoUrl: “https://www.google.com/s2/favicons?sz=64&domain=beautiful.ai”,
logo: “💼”, categoria: “Negocios”, gratis: false,
popular: 68, nuevo: false, featured: false,
tags: [“presentaciones”, “pitch”, “inversores”, “diseño automático”]
}
];

// ─── ENDPOINTS ────────────────────────────────────────────────────────────────

app.get(”/api/tools”, (req, res) => {
const { categoria, q, orden } = req.query;
let resultado = […tools];

if (categoria && categoria !== “Todas”)
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

if (orden === “popular”)     resultado.sort((a, b) => b.popular - a.popular);
else if (orden === “nuevo”)  resultado.sort((a, b) => (b.nuevo ? 1 : 0) - (a.nuevo ? 1 : 0) || b.popular - a.popular);
else if (orden === “gratis”) resultado.sort((a, b) => (b.gratis ? 1 : 0) - (a.gratis ? 1 : 0) || b.popular - a.popular);
else resultado.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.popular - a.popular);

res.json({ total: resultado.length, tools: resultado });
});

app.get(”/api/tools/:slug”, (req, res) => {
const tool = tools.find(t => t.slug === req.params.slug);
if (!tool) return res.status(404).json({ error: “No encontrada” });
res.json(tool);
});

app.get(”/api/categorias”, (req, res) => {
const nombres = [“Todas”, …new Set(tools.map(t => t.categoria))];
res.json(nombres.map(c => ({
nombre: c,
count: c === “Todas” ? tools.length : tools.filter(t => t.categoria === c).length
})));
});

app.get(”*”, (req, res) => {
res.sendFile(path.join(__dirname, “public”, “index.html”));
});

app.listen(PORT, () => console.log(`🚀 Zyna LATAM v3 → http://localhost:${PORT} — ${tools.length} herramientas`));