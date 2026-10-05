import { useCartStore } from '@/store/useCartStore';
import { Product } from '@/types';
import { Minus, Plus } from 'lucide-react'
import React from 'react'

interface QuantityCounterProps {
      product: Product;
}
export default function QuantityCounter({ product }: QuantityCounterProps) {

      const addToCart = useCartStore((state) => state.addToCart);
      const removeFromCart = useCartStore((state) => state.removeFromCart);

      // Obtenemos el carrito actual para buscar la cantidad del producto actual
      const cart = useCartStore((state) => state.cart);
      const cartItem = cart.find((item) => item.product.id === product.id);
      const quantity = cartItem ? cartItem.quantity : 0;

      return (
            <div className=" flex items-center p-1 bg-secondary rounded-lg ">
                  <button className=" flex justify-center items-center w-9 h-9 lg:hover:bg-accent rounded-lg cursor-pointer active:bg-accent "
                        onClick={() => removeFromCart(product.id)}
                        disabled={quantity === 0}
                        aria-label="Restar unidad">
                        <Minus size={16} />
                  </button>
                  <span className=" w-7 text-center font-black text-sm ">{quantity}</span>
                  <button className=" flex justify-center items-center h-9 w-9 bg-primary text-primary-foreground lg:hover:bg-primary/90 rounded-lg cursor-pointer transition-colors duration-300 active:bg-primary/90 "
                        onClick={() => addToCart(product)}
                        aria-label="Añadir unidad">
                        <Plus size={16} />
                  </button>
            </div>
      )
}
