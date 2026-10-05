'use client'
import React, { useState } from 'react'
import CategoryNav from './CategoryNav'
import ProductGrid from './ProductGrid'
import { Category, Product } from '@/types'
import { useCartStore } from '@/store/useCartStore'
import { createPortal } from 'react-dom'
import PortalCart from './PortalCart'

interface CatalogSectionProps {
  categories: Category[]
  products: Product[]
}

export default function CatalogSection({ categories, products }: CatalogSectionProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null) // null = Todos
  const cart = useCartStore((state) => state.cart)

  const filteredProducts = selectedCategoryId === null
    ? products
    : products.filter((product) => product.category_id === selectedCategoryId)


  return (
    <>
      <CategoryNav 
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={setSelectedCategoryId} 
      />
      <ProductGrid products={filteredProducts} />
      {
            cart.length > 0 &&
            createPortal(
                  <PortalCart />,
                  document.body
            )
      }
    </>
  )
}