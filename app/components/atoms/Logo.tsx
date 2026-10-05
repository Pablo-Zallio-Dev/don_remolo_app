import { MapPin } from 'lucide-react'
import React from 'react'

export default function Logo() {
      return (
            <section className=" flex items-center gap-3 ">
                  <div className=' flex justify-center items-center w-11 h-11 rounded-full bg-primary '>
                        <p className=" font-black text-xl text-primary-foreground ">P</p>
                  </div>
                  <div className=" flex flex-col justify-center ">
                        <h2 className=" font-black text-lg ">Pizza Don Remolo</h2>
                        <div className=" flex items-center gap-1 ">
                              <MapPin size={14} className=' text-primary ' />
                              <p className=" text-text text-xs ">Calle Mayor, 24</p>
                        </div>
                  </div>

            </section>
      )
}
