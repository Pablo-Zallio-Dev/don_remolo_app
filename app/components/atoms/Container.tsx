import React from 'react'

export default function Container({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <div className={`w-full max-w-6xl px-4 py-3 sm:px-6 mx-auto ${className}`}>{children}</div>
  )
}
