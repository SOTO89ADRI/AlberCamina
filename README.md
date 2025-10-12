# 🚶‍♂️ AlbercaCamina - Camina Cada Día, Ayuda Cada Día

Una página web moderna y funcional para promover una comunidad solidaria que transforma pasos diarios en ayuda para quienes más lo necesitan, a través de la aplicación WeWard.

![AlbercaCamina](https://img.shields.io/badge/AlbercaCamina-Solidaridad-green)
![React](https://img.shields.io/badge/React-18-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8)
![Vite](https://img.shields.io/badge/Vite-6-646cff)

## ✨ Características

- 🎨 **Diseño Moderno**: Gradientes vibrantes y animaciones suaves
- 📱 **Responsive**: Funciona perfectamente en móviles, tablets y escritorio
- ⚡ **Rápido**: Construido con Vite para máximo rendimiento
- 🎭 **Animaciones**: Efectos suaves con Framer Motion
- 🖼️ **Imágenes Optimizadas**: Todas las imágenes son libres de autor
- 🧭 **Navegación Intuitiva**: Menú fijo con scroll suave
- 🎯 **CTAs Efectivos**: Múltiples llamadas a la acción estratégicas

## 🚀 Inicio Rápido

### Requisitos

- Node.js 18 o superior
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar o descomprimir el proyecto
cd alberca-camina

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm run dev
```

La página se abrirá en `http://localhost:5173/`

## 📦 Scripts Disponibles

```bash
# Desarrollo
pnpm run dev          # Inicia el servidor de desarrollo

# Producción
pnpm run build        # Construye para producción
pnpm run preview      # Previsualiza el build de producción
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework de JavaScript
- **Vite 6** - Build tool y dev server
- **Tailwind CSS 3** - Framework de estilos
- **shadcn/ui** - Componentes de UI
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **React Router DOM** - Navegación

## 📂 Estructura del Proyecto

```
alberca-camina/
├── src/
│   ├── assets/           # Imágenes
│   ├── components/ui/    # Componentes de UI
│   ├── App.jsx          # Componente principal ⭐
│   ├── App.css          # Estilos personalizados
│   └── main.jsx         # Punto de entrada
├── public/              # Archivos estáticos
├── dist/                # Build de producción
└── index.html           # HTML principal
```

## 🎨 Personalización

### Modificar Enlaces

Edita `src/App.jsx` y busca los enlaces de WeWard:

```javascript
// Enlace principal de la comunidad
https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223
```

### Cambiar Colores

Los colores principales están en `src/App.css` y puedes usar las clases de Tailwind CSS en `src/App.jsx`.

### Reemplazar Imágenes

Coloca tus imágenes en `src/assets/` y actualiza las importaciones en `src/App.jsx`.

## 🌐 Despliegue

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

1. Ejecuta `pnpm run build`
2. Arrastra la carpeta `dist/` a Netlify Drop

### GitHub Pages

1. Sube el proyecto a GitHub
2. Configura GitHub Pages desde Settings → Pages
3. Selecciona la carpeta `dist/`

## 📱 Secciones de la Página

1. **Hero** - Presentación impactante con CTAs
2. **¿Qué es WeWard?** - Explicación de la aplicación
3. **Propósito** - Visión y objetivos de AlbercaCamina
4. **¿Cómo Unirse?** - Proceso en 3 pasos
5. **Beneficios** - Razones para unirse
6. **Nuestra Comunidad** - Estadísticas y testimonios
7. **CTA Final** - Llamada a la acción principal
8. **Footer** - Enlaces y recursos

## 🎯 Funcionalidades

- ✅ Navegación suave entre secciones
- ✅ Menú responsive para móviles
- ✅ Botones funcionales con enlaces a WeWard
- ✅ Compartir en WhatsApp
- ✅ Animaciones al hacer scroll
- ✅ Efectos hover en elementos interactivos

## 📄 Licencia

Este proyecto fue creado para la comunidad AlbercaCamina.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Para más información sobre la comunidad AlbercaCamina, visita:
- [WeWard Oficial](https://www.wewardapp.com/es)
- [Comunidad AlbercaCamina](https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223)

---

**Desarrollado con ❤️ para la comunidad AlbercaCamina**

¡Camina cada día, ayuda cada día! 🚶‍♂️💚
