'use client'
import Image from 'next/image'
import React from 'react'
import QuantityCounter from '../atoms/QuantityCounter'
import { Product } from '@/types';
import { useCartStore } from '@/store/useCartStore';
import IconAddCart from '../atoms/IconAddCart';

interface CardProps {
      product: Product;
}

export default function Card({ product }: CardProps) {

      const cart = useCartStore((state) => state.cart)
      const addToCart = useCartStore((state) => state.addToCart)

      const cartItem = cart.find((item) => item.product.id === product.id)
      const quantity = cartItem ? cartItem.quantity : 0
      return (
            <article className="w-full h-full flex flex-col bg-white border border-border rounded-2xl overflow-hidden group lg:hover:-translate-y-1 transition-all duration-300">
                  {/* Imagen con altura fija */}
                  <div className="relative h-55 shrink-0">
                        <Image
                              src={product.image_url || '/logo-don-remolo.webp'}
                              alt={product.name}
                              fill
                              className={`${product.image_url ? 'object-cover' : 'object-contain'} group-hover:scale-105 transition-transform duration-300`}
                        />
                  </div>

                  {/* Contenedor de contenido que ocupa el espacio restante (flex-1) */}
                  <div className="flex flex-col flex-1 p-4">
                        {/* Título y Descripción arriba */}
                        <div>
                              <h3 className="font-black text-xl">{product.name}</h3>
                              <p className="text-sm text-text line-clamp-2 mt-1">{product.description}</p>
                        </div>

                        {/* Fila inferior empujada al fondo con mt-auto */}
                        <div className="flex items-center justify-between mt-auto pt-3">
                              <h3 className="font-black text-xl">{product.price.toFixed(2)}€</h3>
                              {quantity === 0 ? (
                                    <IconAddCart onClick={() => addToCart(product)} />
                              ) : (
                                    <QuantityCounter product={product} />
                              )}
                        </div>
                  </div>
            </article>
      )
}