import { kv } from '@vercel/kv';

// Esta es la función API sin servidor
export default async function handler(request, response) {
  try {
    // 'visitas-albercamina' es la "llave" donde guardamos nuestro contador.
    // kv.incr() aumenta el valor en 1 y devuelve el nuevo número.
    // Es una operación atómica, lo que evita errores si hay muchas visitas a la vez.
    const visits = await kv.incr('visitas-albercamina');

    // Enviamos el nuevo número de visitas como respuesta.
    response.status(200).send(String(visits));

  } catch (error) {
    // Si algo sale mal (ej: no se puede conectar a la base de datos),
    // registramos el error en el servidor y enviamos una respuesta de error.
    console.error('Error en el contador:', error);
    response.status(500).send('Error al obtener el contador');
  }
}