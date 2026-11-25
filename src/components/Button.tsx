
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  href?: string
  onClick?: () => void
  className?: string
}

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
}: ButtonProps) => {

  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 transition-all duration-300'

  const variants = {
    primary: 'bg-terracotta text-white hover:bg-terracotta/80',
    outline: 'border border-white text-white hover:bg-white hover:text-black',
  }

  const styles = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  )
}

export default Button
