import { Banknote, Motorbike } from 'lucide-react'
import React from 'react'

export default function BadgeOrderInfo() {
  return (
    <section className="flex flex-col gap-2 p-4 border border-primary/30 bg-secondary rounded-xl ">
      <div className=" flex items-center gap-2 ">
            <Motorbike className=' text-primary ' />
            <p className=" font-black text-sm  ">Delivery propio del negocio</p>
      </div>
      <div className=" flex items-center gap-2 ">
            <Banknote className=' text-primary ' /> 
            <p className=" font-black text-sm  ">Pago exclusivo en efectivo al recibir</p>
      </div>
    </section>
  )
}
