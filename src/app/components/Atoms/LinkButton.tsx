'use client'
import Link from 'next/link'
import React from 'react'

export interface LinkButtonProps {
  href?: string
  style?: React.CSSProperties
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  children: React.ReactNode

}

export default function LinkButton({
  href,
  children,
  style,
  className,
  onClick
}:LinkButtonProps) {

  return (
    <>
      <Link 
      className={className}
      style={style}
      href={href || ''}
      onClick={onClick || undefined}
      >
        {children}
      </Link>
    </>
  )
}