import React from 'react'

export default function OverTitle({children}: {children: string}) {
  return (
    <div className=" flex items-center gap-2 ">
      <div className=" w-2 h-2 bg-primary rounded-full "></div>
      <h2 className=" text-sm font-bold text-primary ">{children}</h2>
    </div>
  )
}
