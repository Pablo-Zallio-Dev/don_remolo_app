import { useCartStore } from '@/store/useCartStore'
import { Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import PortalOrder from './PortalOrder'

export default function PortalCart() {

      const [allProductsCart, setAllProductsCart] = useState(false)
      const [mounted, setMounted] = useState(false)

      const cart = useCartStore((state) => state.cart)
      const getTotalPrice = useCartStore((state) => state.getTotalPrice)
      const clearCart = useCartStore((state) => state.clearCart)

      const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
      const totalPrice = getTotalPrice()

      useEffect(() => {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setMounted(true)
      }, [])


      useEffect(() => {
            if (allProductsCart) {
                  document.body.style.overflow = 'hidden'
            } else {
                  document.body.style.overflow = 'unset'
            }

            return () => {
                  document.body.style.overflow = 'unset'
            }
      }, [allProductsCart])

      // Si no hay ítems en el carrito, no mostramos la barra flotante ni el portal
      if (totalItems === 0) return null


      return (
            <article className=" fixed bottom-0 flex justify-center items-center w-full p-4 border-t border-border bg-background  ">
                  <div className=" flex justify-between items-center w-10/12 sm:w-1/2 xl:w-1/4 h-14 px-4 bg-primary rounded-2xl ">
                        <span className=" flex justify-center items-center h-8 w-8 bg-primary-foreground/25 font-bold text-primary-foreground rounded-lg ">{totalItems}</span>
                        <button className=" text-primary-foreground font-medium text-sm md:text-base lg:cursor-pointer " onClick={() => setAllProductsCart(!allProductsCart)} >Ver carrito</button>
                        <p className=" text-primary-foreground font-medium ">{totalPrice.toFixed(2)}€</p>
                        <button className=" flex justify-center items-center h-8 w-8 bg-primary-foreground/25 font-bold text-primary-foreground rounded-lg " onClick={clearCart}><Trash size={16} /></button>

                  </div>
                  {
                        allProductsCart && createPortal(
                              <PortalOrder onClose={() => setAllProductsCart(false)} />,
                              document.body
                        )
                  }
            </article>
      )
}
