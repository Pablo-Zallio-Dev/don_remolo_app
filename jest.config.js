const nextJest = require('next/jest')

// Le indicamos a Next.js la ruta de la app para cargar next.config.js y las variables de entorno
const createJestConfig = nextJest({
  dir: './',
})

// Configuración personalizada de Jest
/** @type {import('jest').Config} */
const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Si usas alias como `@/lib/...` en tsconfig.json:
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

module.exports = createJestConfig(config)