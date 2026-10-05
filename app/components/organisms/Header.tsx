import React from 'react'
import Logo from '../atoms/Logo'
import IconCart from '../atoms/IconCart'
import Container from '../atoms/Container'

export default function Header() {
      return (
            <section className='border-b border-border '>
                  <Container className=' flex items-center justify-between  '>
                        <Logo />
                        <IconCart />
                  </Container>
            </section>

      )
}
