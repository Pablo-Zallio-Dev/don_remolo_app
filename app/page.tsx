// app/page.tsx
export const dynamic = 'force-dynamic' // Desactiva el almacenamiento en caché estático
import { createClient } from '@/lib/supabase/server'
import CatalogSection from './components/organisms/CatalogSection'
import HeroSection from './components/organisms/HeroSection'

export default async function Home() {
  const supabase = await createClient()

  // Traer categorías
  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('*')

  // Traer productos
  const { data: products, error: prodError } = await supabase
    .from('products')
    .select('*')
    .eq('is_available', true)

  // LOGS PARA DEPURAR
  console.log('--- DEPURACIÓN SUPABASE ---')
  console.log('Categorías recibidas:', categories, 'Error:', catError)
  console.log('Productos recibidos:', products, 'Error:', prodError)

  return (
    <main>
      <HeroSection />
      <CatalogSection 
        categories={categories || []} 
        products={products || []} 
      />
    </main>
  )
}