import Link from 'next/link'
import React from 'react'

export interface LinkButtonProps {
  href: string
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export default function LinkButton({
  href,
  children,
  style,
  className
}:LinkButtonProps) {

  return (
    <>
      <Link 
      className={className}
      style={style}
      href={href}>
        {children}
      </Link>
    </>
  )
}