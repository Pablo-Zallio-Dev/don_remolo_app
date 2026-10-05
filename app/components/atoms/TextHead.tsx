import React from 'react'

export default function TextHead({children}: {children: string}) {
  return (
      <p className=" max-w-xl font-medium text-text">{children}</p>
)
}
