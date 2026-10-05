import React from 'react'

export default function Title({children}: {children: string}) {
  return (
    <h1 className=" max-w-2xl font-black text-4xl sm:text-5xl ">{children}</h1>
  )
}
