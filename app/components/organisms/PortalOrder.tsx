import { useCartStore } from '@/store/useCartStore'
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import BadgeOrderInfo from '../atoms/BadgeOrderInfo'
import FormOder from './FormOder'

export default function PortalOrder({ onClose }: { onClose: () => void }) {

      const cart = useCartStore((state) => state.cart)
      const getTotalPrice = useCartStore((state) => state.getTotalPrice)
      const totalPrice = getTotalPrice()
      return (
            <section className=" fixed top-0 z-100 w-full h-full bg-black/50 transition-opacity animate-in fade-in duration-300 ">
                  <section className="absolute bottom-0 flex justify-center w-full pt-6 bg-background rounded-t-2xl max-h-[90vh] overflow-y-auto transform transition-transform animate-in slide-in-from-bottom duration-400 ease-out" onClick={(e) => e.stopPropagation()}>
                        <section className=" flex flex-col gap-4 w-10/12 sm:w-1/2 xl:w-1/4 pb-6 ">
                              <button className=" flex items-center gap-1 text-text cursor-pointer " onClick={onClose}>
                                    <ArrowLeft size={16} />
                                    <span className="font-bold text-sm ">Volver</span>
                              </button>
                              <h3 className="font-black text-2xl">Confirmar pedido</h3>
                              <div className=" border border-border bg-white rounded-xl ">
                                    {
                                          cart.map((product) => (
                                                <section key={product.product.id} className=" border-b border-border py-3 px-4 ">
                                                      <div className=" flex justify-between items-center text-sm font-semibold ">
                                                            <p className="  border-border ">{product.quantity} x {product.product.name}</p>
                                                            <p className=" font-black "> {(product.product.price * product.quantity).toFixed(2)}€ </p>
                                                      </div>
                                                </section>
                                          ))
                                    }
                                    <div className="flex justify-between py-3 px-4 text-sm font-black  ">
                                          <span className="  ">Total</span>
                                          <span className=" text-primary ">{totalPrice.toFixed(2)}€</span>
                                    </div>
                              </div>
                              <BadgeOrderInfo />
                              <FormOder />
                        </section>
                  </section>
            </section>
      )
}
