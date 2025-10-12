# 📦 Guía de Instalación y Uso - AlbercaCamina

## 🎯 Contenido del Proyecto

Este archivo contiene el proyecto completo de la página web **AlbercaCamina**, listo para descargar, modificar y publicar.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **pnpm** (gestor de paquetes) - Se instala automáticamente con Node.js o ejecuta: `npm install -g pnpm`
- Un editor de código como **Visual Studio Code** - [Descargar aquí](https://code.visualstudio.com/)

## 🚀 Instalación Paso a Paso

### 1. Descomprimir el Proyecto

Descarga el archivo `alberca-camina-completo.tar.gz` y descomprímelo:

**En Windows:**
- Usa 7-Zip o WinRAR para extraer el archivo
- O usa Git Bash: `tar -xzf alberca-camina-completo.tar.gz`

**En Mac/Linux:**
```bash
tar -xzf alberca-camina-completo.tar.gz
```

### 2. Navegar al Directorio del Proyecto

```bash
cd alberca-camina
```

### 3. Instalar Dependencias

```bash
pnpm install
```

Este comando instalará todas las librerías necesarias (React, Tailwind CSS, Framer Motion, etc.)

### 4. Iniciar el Servidor de Desarrollo

```bash
pnpm run dev
```

La página web se abrirá automáticamente en: `http://localhost:5173/`

## ✏️ Cómo Modificar Enlaces y Contenido

### Modificar Enlaces de WeWard

Abre el archivo `src/App.jsx` y busca los siguientes enlaces:

```javascript
// Enlace principal de la comunidad AlbercaCamina
https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223

// Enlaces del footer
https://www.wewardapp.com/es
https://www.wewardapp.com/es/mission
https://www.wewardapp.com/es/communities
```

**Para cambiar el enlace de la comunidad:**

1. Busca todas las apariciones de: `https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223`
2. Reemplázalas con tu nuevo enlace
3. Guarda el archivo

### Modificar Textos

Todos los textos están en `src/App.jsx`. Puedes buscar y modificar:

- Títulos de secciones
- Descripciones
- Nombres de botones
- Estadísticas de la comunidad

### Cambiar Imágenes

Las imágenes están en `src/assets/`. Para reemplazarlas:

1. Coloca tus nuevas imágenes en la carpeta `src/assets/`
2. Mantén los mismos nombres o actualiza las importaciones en `src/App.jsx`:

```javascript
import heroImage from './assets/hero.jpg'
import communityImage from './assets/community.jpg'
import solidarityImage from './assets/solidarity.jpg'
import phoneImage from './assets/phone.jpg'
import rewardsImage from './assets/rewards.jpg'
```

### Modificar Colores y Estilos

Los colores principales están definidos en `src/App.css`. Puedes cambiar:

- Colores del gradiente
- Colores de fondo
- Colores de botones
- Fuentes y tamaños

También puedes usar las clases de Tailwind CSS directamente en `src/App.jsx`.

## 🌐 Publicar la Página Web

### Opción 1: Construir para Producción

```bash
pnpm run build
```

Este comando genera una carpeta `dist/` con todos los archivos optimizados listos para publicar.

### Opción 2: Publicar en Vercel (Recomendado)

1. Crea una cuenta gratuita en [Vercel](https://vercel.com/)
2. Instala Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Desde la carpeta del proyecto, ejecuta:
   ```bash
   vercel
   ```
4. Sigue las instrucciones en pantalla
5. ¡Tu página estará en línea en minutos!

### Opción 3: Publicar en Netlify

1. Crea una cuenta gratuita en [Netlify](https://www.netlify.com/)
2. Arrastra la carpeta `dist/` a Netlify Drop
3. ¡Tu página estará publicada instantáneamente!

### Opción 4: Publicar en GitHub Pages

1. Sube el proyecto a un repositorio de GitHub
2. Ve a Settings → Pages
3. Selecciona la rama y carpeta `dist/`
4. Guarda y espera unos minutos

## 📁 Estructura del Proyecto

```
alberca-camina/
├── public/                 # Archivos públicos estáticos
├── src/
│   ├── assets/            # Imágenes del proyecto
│   │   ├── hero.jpg
│   │   ├── community.jpg
│   │   ├── solidarity.jpg
│   │   ├── phone.jpg
│   │   └── rewards.jpg
│   ├── components/
│   │   └── ui/            # Componentes de interfaz (shadcn/ui)
│   ├── App.jsx            # ⭐ Componente principal (EDITA AQUÍ)
│   ├── App.css            # Estilos personalizados
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── dist/                  # Build de producción (se genera con pnpm run build)
├── index.html             # HTML principal
├── package.json           # Dependencias del proyecto
├── vite.config.js         # Configuración de Vite
└── README.md              # Documentación del proyecto
```

## 🛠️ Comandos Útiles

```bash
# Iniciar servidor de desarrollo
pnpm run dev

# Construir para producción
pnpm run build

# Previsualizar el build de producción
pnpm run preview

# Limpiar caché y reinstalar dependencias
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## 🎨 Personalización Avanzada

### Cambiar el Nombre del Proyecto

1. Edita `package.json` y cambia el campo `"name"`
2. Edita `index.html` y cambia el `<title>`

### Añadir Nuevas Secciones

1. Abre `src/App.jsx`
2. Crea una nueva sección siguiendo el patrón de las existentes
3. Añade el enlace en el menú de navegación

### Modificar Animaciones

Las animaciones usan Framer Motion. Puedes ajustar:

```javascript
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}
```

## 🐛 Solución de Problemas

### Error: "Cannot find module"
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### La página no se actualiza
- Guarda el archivo
- Recarga el navegador (Ctrl+R o Cmd+R)
- Si persiste, reinicia el servidor: Ctrl+C y luego `pnpm run dev`

### Error al construir
```bash
pnpm run build --force
```

## 📞 Soporte

Si tienes problemas o preguntas:

1. Revisa la documentación de [Vite](https://vitejs.dev/)
2. Consulta la documentación de [React](https://react.dev/)
3. Revisa los ejemplos de [Tailwind CSS](https://tailwindcss.com/)

## 📝 Notas Importantes

- **Siempre guarda los archivos** antes de ver los cambios
- **El servidor de desarrollo se recarga automáticamente** al guardar
- **Usa Git** para mantener un historial de cambios
- **Haz backups** antes de hacer cambios importantes
- **Prueba en diferentes navegadores** antes de publicar

## 🎉 ¡Listo!

Ahora tienes todo lo necesario para:
- ✅ Ejecutar el proyecto localmente
- ✅ Modificar enlaces y contenido
- ✅ Personalizar diseño y colores
- ✅ Publicar en internet

**¡Éxito con tu proyecto AlbercaCamina!** 🚶‍♂️💚

---

**Desarrollado con ❤️ para la comunidad AlbercaCamina**
