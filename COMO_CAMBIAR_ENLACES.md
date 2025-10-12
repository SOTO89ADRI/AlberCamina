# 🔗 Guía Rápida: Cómo Cambiar Enlaces en AlbercaCamina

Esta guía te muestra exactamente dónde y cómo modificar los enlaces de la página web.

## 📍 Ubicación del Archivo Principal

**Archivo a editar:** `src/App.jsx`

Este es el único archivo que necesitas modificar para cambiar todos los enlaces.

## 🎯 Enlaces a Modificar

### 1. Enlace Principal de la Comunidad AlbercaCamina

**Enlace actual:**
```
https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223
```

**Dónde aparece:**
- Botón "Descargar App" en el menú de navegación
- Botón "Únete Ahora" en el Hero
- Botón "Instalar WeWard y Empezar a Sumar Pasos Solidarios"
- Botón "Unirme a la Comunidad AlbercaCamina"
- Botón "Únete Ahora Gratis" en el CTA final

**Cómo cambiarlo:**

1. Abre `src/App.jsx` en tu editor de código
2. Usa la función "Buscar y Reemplazar" (Ctrl+H o Cmd+H)
3. Busca: `https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223`
4. Reemplaza con: `TU_NUEVO_ENLACE_AQUI`
5. Haz clic en "Reemplazar todo"
6. Guarda el archivo (Ctrl+S o Cmd+S)

**Ejemplo de código:**

```javascript
// ANTES
onClick={() => window.open('https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223', '_blank')}

// DESPUÉS
onClick={() => window.open('https://tu-nuevo-enlace.com', '_blank')}
```

### 2. Enlaces del Footer

**Enlaces actuales:**

```javascript
// WeWard Oficial
https://www.wewardapp.com/es

// Misión WeWard
https://www.wewardapp.com/es/mission

// Comunidades
https://www.wewardapp.com/es/communities
```

**Cómo cambiarlos:**

1. Busca la sección del Footer en `src/App.jsx` (línea ~550 aproximadamente)
2. Encuentra estas líneas:

```javascript
<a href="https://www.wewardapp.com/es" target="_blank" rel="noopener noreferrer">
  WeWard Oficial
</a>
```

3. Cambia el valor de `href` por tu nuevo enlace
4. Guarda el archivo

### 3. Enlace de Compartir en WhatsApp

**Ubicación:** Botón "Compartir en WhatsApp" en el CTA final

**Código actual:**

```javascript
onClick={() => {
  const text = "¡Únete a AlbercaCamina! Camina cada día y ayuda a quienes más lo necesitan. https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223"
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}}
```

**Cómo modificar el mensaje:**

1. Busca `const text =` en `src/App.jsx`
2. Cambia el texto entre comillas
3. Asegúrate de incluir tu nuevo enlace en el mensaje
4. Guarda el archivo

## 🔍 Búsqueda Rápida de Enlaces

Abre `src/App.jsx` y busca estas palabras clave:

- `window.open` - Encuentra todos los botones con enlaces externos
- `href=` - Encuentra todos los enlaces del footer
- `wewardapp.go.link` - Encuentra el enlace de la comunidad
- `wewardapp.com` - Encuentra los enlaces de WeWard oficial

## ✅ Lista de Verificación

Después de cambiar los enlaces, verifica:

- [ ] Botón "Descargar App" en el menú
- [ ] Botón "Únete Ahora" en el Hero
- [ ] Botón "Instalar WeWard..." en la sección ¿Qué es?
- [ ] Botón "Unirme a la Comunidad..." en la sección ¿Cómo Unirse?
- [ ] Botón "Únete Ahora Gratis" en el CTA final
- [ ] Botón "Compartir en WhatsApp"
- [ ] Enlaces del footer (WeWard Oficial, Misión, Comunidades)

## 🧪 Probar los Cambios

1. Guarda el archivo `src/App.jsx`
2. El servidor de desarrollo se recargará automáticamente
3. Haz clic en cada botón para verificar que funciona
4. Verifica que los enlaces se abran en una nueva pestaña

## 📝 Ejemplo Completo de Cambio

**Escenario:** Quieres cambiar el enlace de la comunidad a `https://mi-nueva-comunidad.com/unete`

**Paso a paso:**

1. Abre `src/App.jsx`
2. Presiona Ctrl+H (Windows/Linux) o Cmd+H (Mac)
3. En "Buscar": `https://wewardapp.go.link/ranking/community?adj_t=1pedl4qd&id=133223`
4. En "Reemplazar": `https://mi-nueva-comunidad.com/unete`
5. Haz clic en "Reemplazar todo"
6. Guarda el archivo
7. Verifica en el navegador que todos los botones funcionan

## 🆘 Solución de Problemas

### Los enlaces no cambian

- Asegúrate de guardar el archivo (Ctrl+S o Cmd+S)
- Recarga el navegador (Ctrl+R o Cmd+R)
- Verifica que editaste el archivo correcto: `src/App.jsx`

### Los botones no funcionan

- Verifica que el enlace esté entre comillas: `'https://...'`
- Asegúrate de que el enlace sea válido
- Revisa la consola del navegador (F12) para ver errores

### El mensaje de WhatsApp no cambia

- Busca `const text =` en el archivo
- Verifica que el texto esté entre comillas
- Guarda el archivo y recarga el navegador

## 💡 Consejos

- **Haz una copia de seguridad** antes de hacer cambios importantes
- **Usa la función de búsqueda** (Ctrl+F) para encontrar enlaces rápidamente
- **Prueba cada enlace** después de hacer cambios
- **Usa enlaces HTTPS** para mayor seguridad
- **Mantén el formato** `target="_blank" rel="noopener noreferrer"` para enlaces externos

## 📞 ¿Necesitas Ayuda?

Si tienes problemas para cambiar los enlaces:

1. Verifica que estás editando el archivo correcto: `src/App.jsx`
2. Asegúrate de que el servidor de desarrollo esté corriendo: `pnpm run dev`
3. Revisa que no haya errores de sintaxis (comillas, paréntesis, etc.)
4. Consulta la documentación de React si es necesario

---

**¡Listo!** Ahora puedes cambiar todos los enlaces de tu página web AlbercaCamina de forma fácil y rápida. 🎉
