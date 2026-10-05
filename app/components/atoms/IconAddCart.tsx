import { Plus } from 'lucide-react'
import React from 'react'

interface IconAddCartProps {
  onClick?: () => void
}

export default function IconAddCart({ onClick }: IconAddCartProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Añadir al carrito"
      className="flex justify-center items-center text-primary-foreground w-11 h-11 bg-primary rounded-xl lg:hover:bg-primary/85 transition-colors duration-100 cursor-pointer active:scale-95"
    >
      <Plus size={16} />
    </button>
  )
}