# 🛍️ Pizzeria Don Remolo

> Aplicación web intuitiva y accesible para la gestión y realización de pedidos online sin necesidad de registro previo. Permite a los clientes explorar el menú organizado por categorías, gestionar su carrito en tiempo real con persistencia de datos y enviar la orden formateada directamente al WhatsApp del local.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)

## ✨ Características principales

- 📦 **Catálogo de productos:** cargado desde una base de datos en Supabase, fácil de actualizar sin tocar el código.
- 🛒 **Carrito de compras con persistencia:** el carrito se conserva al recargar o cerrar la pestaña.
- 📝 **Formulario de pedido con validación:** campos validados antes de enviar el pedido.
- 💬 **Envío directo a WhatsApp:** el pedido se genera y se envía por WhatsApp en un clic.
- 🧪 **Suite de pruebas completa:** pruebas unitarias y de integración, 100 % pasando.

## 🧰 Tecnologías utilizadas

| Categoría | Tecnología |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) |
| Lenguaje | [TypeScript](https://www.typescriptlang.org/) |
| Estilos | [Tailwind CSS](https://tailwindcss.com/) |
| Estado global | [Zustand](https://zustand-demo.pmnd.rs/) (con persistencia local) |
| Formularios | [React Hook Form](https://react-hook-form.com/) |
| Base de datos | [Supabase](https://supabase.com/) (PostgreSQL) |
| Testing | [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/react) |
| Gestor de paquetes | [pnpm](https://pnpm.io/) |

## 🚀 Instalación y ejecución

### Requisitos previos

- [Node.js](https://nodejs.org/) 18.18 o superior
- [pnpm](https://pnpm.io/installation) instalado (`npm install -g pnpm`)
- Un proyecto en [Supabase](https://supabase.com/) con la tabla de productos creada

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/[tu-usuario]/[nombre-del-repo].git
cd [nombre-del-repo]

# 2. Instala las dependencias
pnpm install

# 3. Configura las variables de entorno
cp .env.example .env.local

# 4. Inicia el servidor de desarrollo
pnpm dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

### Variables de entorno

Completa `.env.local` con las credenciales de tu proyecto de Supabase (las encuentras en *Project Settings → API*):

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
```

## 🧪 Ejecución de pruebas

```bash
pnpm test
```

El proyecto incluye pruebas unitarias (componentes, store, utilidades) y de integración (flujo carrito → formulario → WhatsApp), todas pasando.

## 📁 Estructura de carpetas

```
.
├── src/
│   ├── app/            # Rutas y layouts (App Router)
│   ├── components/     # Componentes reutilizables de UI
│   ├── store/          # Estado global con Zustand
│   ├── lib/            # Utilidades y cliente de Supabase
│   └── types/          # Tipos de TypeScript
├── __tests__/          # Pruebas unitarias y de integración
├── public/             # Recursos estáticos
├── .env.example        # Plantilla de variables de entorno
├── jest.config.ts      # Configuración de Jest
└── package.json
```

## 📄 Licencia

Distribuido bajo licencia [MIT](LICENSE).