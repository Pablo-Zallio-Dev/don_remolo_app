import { useCartStore } from '@/store/useCartStore'
import { MessageCircle, Trash } from 'lucide-react'
import { useForm } from "react-hook-form";

import React from 'react'
import { generateWhatsAppLink, OrderFormData } from '@/lib/whatsapp';

export default function FormOder() {

      const { register, handleSubmit, formState: { errors } } = useForm<OrderFormData>()

      const clearCart = useCartStore((state) => state.clearCart)
      const cart = useCartStore((state) => state.cart)
      const getTotalPrice = useCartStore((state) => state.getTotalPrice)
      const totalPrice = getTotalPrice()


      const onSubmit = (data: OrderFormData) => {
            const whatsappUrl = generateWhatsAppLink(data, cart, totalPrice)

            // Abre WhatsApp en una pestaña nueva
            window.open(whatsappUrl, '_blank')

            clearCart()

      }

      return (
            <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-3 ">
                  <div className=" relative flex flex-col gap-1 ">
                        <label htmlFor="nombres" className=" text-sm font-medium ">Nombre y Apellido</label>
                        <input id='nombres' type="text" className=" py-1 px-3 border border-border rounded-lg shadow-md focus:outline-1  focus:outline-primary "
                              {
                              ...register("nombres", {
                                    required: "El nombre y apellido son requeridos",
                              })
                              } />
                        {
                              errors.nombres?.message && (<p className=" absolute -bottom-6 right-0 z-200 text-sm text-primary font-medium ">{String(errors.nombres.message)}</p>)
                        }
                  </div>
                  <div className=" relative flex flex-col gap-1 ">
                        <label htmlFor="direccion" className=" text-sm font-medium ">Dirección de entrega</label>
                        <input id='direccion' type="text" className=" py-1 px-3 border border-border rounded-lg shadow-md focus:outline-1  focus:outline-primary "
                              {
                              ...register("direccion", {
                                    required: "La direccion es obligatoria"
                              })
                              } />
                        {
                              errors.direccion?.message && (<p className=" absolute -bottom-6 right-0 z-200 text-sm text-primary font-medium ">{String(errors.direccion.message)}</p>)
                        }
                  </div>
                  <div className=" flex flex-col gap-1 ">
                        <label htmlFor="" className=" text-sm font-medium ">Notas / Aclaraciones (Opcional)</label>
                        <textarea rows={3}  id="notas" className="py-1 px-3 border border-border rounded-lg shadow-md resize-none focus:outline-1  focus:outline-primary" placeholder='Ej.: timbre 2b'
                        {
                              ...register("notas")
                        }></textarea>
                  </div>
                  <button type='submit' className=' flex justify-center items-center gap-4 h-14 px-4 bg-primary rounded-2xl text-secondary '>
                        <MessageCircle size={16} />
                        <span className=" font-semibold ">Enviar pedido por whatsapp</span>
                  </button>
                  <button type='button' className=' flex justify-center items-center gap-4 h-14 px-4 bg-white text-primary rounded-2xl border border-border shadow-md ' onClick={clearCart}>
                        <Trash size={16} />
                        <span className=" font-semibold ">Cancelar pedido</span>
                  </button>
            </form>
      )
}
