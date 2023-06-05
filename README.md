# Prueba técnica Front End CooL - MrTban | Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth 2023

![prueba técnica MrTban](https://res.cloudinary.com/dhfrzje8b/image/upload/v1685972724/capturas/Main_u7nnxe.png)

#

![](https://res.cloudinary.com/dhfrzje8b/image/upload/v1685975050/capturas/MrTbanPruebaTecnica_amhqff.png)

#

## Características:

- Diseño con Tailwind
- Animaciones y efectos Tailwind
- Full responsive
- Autenticación de credenciales
- Autenticación de Google
- Carga de imágenes mediante Cloudinary CDN
- Validación y gestión de formularios del cliente mediante react-hook-form
- Gestión de errores del servidor con react-toast
- Page loading state
- Page empty state
- Creación y eliminación de destinos
- Algoritmo de búsqueda avanzada por categoría y ubicación en el mapa
  - Por ejemplo, filtraremos los destinos que tengan una categoria a la que desee viajar
- Sistema de favoritos
- Filtros de URL compartibles

  - Por ejemplo, si selecciona una categoría y una ubicación, podrá compartir la URL con un amigo que haya cerrado sesión en otro navegador y verá los mismos resultados.

- Como escribir rutas POST y DELETE en manejadores de rutas (app/api)
- Como obtener datos en server react components accediendo directamente a la base de datos (SIN API!)
- Cómo manejar archivos como error.tsx y loading.tsx que son nuevos archivos de plantillas de Next 13 para unificar la carga y el manejo de errores
- ¡Cómo manejar las relaciones entre componentes Server y Child!
- Cuenta con modales para diferentes tareas

  - Por ejemplo, el registro de cuenta e inicio de sesión, creación de destinos y busqueda.

#

## Requisitos previos

**Node version 18.x**

### Clonar repositorio

```shell
git clone https://github.com/MrTban/prueba-tecnica-cool.git
```

### Instalar paquetes

```shell
npm i
```

### Setup Prisma | crea el cliente de prisma para acceder a la db

```shell
npx prisma generate
```

### Iniciar la aplicación

```shell
npm run dev
```

#

## Comandos disponibles

Ejecutar comandos con `npm [command]`

| command   | description                              |
| :-------- | :--------------------------------------- |
| `i`       | Install dependencies and packages        |
| `run dev` | Starts a development instance of the app |

Ejecutar comandos con `npx [command]`

| command           | description               |
| :---------------- | :------------------------ |
| `prisma generate` | Generate prisma client db |
