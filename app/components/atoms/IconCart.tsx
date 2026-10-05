'use client'

import { useCartStore } from '@/store/useCartStore'
import { ShoppingBag } from 'lucide-react'
import React from 'react'

export default function IconCart() {
  const cart = useCartStore((state) => state.cart)

  // Calculamos la suma total directamente a partir de la lista
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <button
      type="button"
      aria-label="Ver carrito de compras"
      className="relative flex justify-center items-center w-11 h-11 rounded-full border border-border bg-white lg:hover:bg-accent transition-colors duration-150 cursor-pointer active:scale-95"
    >
      <ShoppingBag size={16} />

      {/* Se renderiza la burbuja solo cuando hay al menos 1 producto */}
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 grid place-items-center w-5 h-5 bg-primary text-[10px] font-black text-primary-foreground rounded-full">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </button>
  )
}