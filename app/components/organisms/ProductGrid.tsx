import { Product } from '@/types';
import React from 'react'
import Container from '../atoms/Container';
import Card from './Card';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({products}: ProductGridProps) {
  return (
      <Container className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {
                  products.map((product) => (
                        <Card key={product.id} product={product} />

                  ))
            }

      </Container>
  )
}
