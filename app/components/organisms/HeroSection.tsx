import React from 'react'
import Container from '../atoms/Container'
import OverTitle from '../atoms/OverTitle'
import Title from '../atoms/Title'
import TextHead from '../atoms/TextHead'

export default function HeroSection() {
  return (
    <Container className='   pt-10  '>
      <div className=" flex flex-col gap-3 pb-7 border-b border-border">
      <OverTitle>Horno encendido · reparto disponible</OverTitle>
      <Title>Tu pizza favorita, recién hecha.</Title>
      <TextHead>Masa lenta, ingredientes honestos y ese borde crujiente que no se comparte.</TextHead>
      </div>
    </Container>
  )
}
