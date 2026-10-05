/// <reference types="jest" />
import React from 'react'
import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import QuantityCounter from '../QuantityCounter'
import { useCartStore } from '@/store/useCartStore'


describe('QuantityCounter', () => {
      // Limpiamos el carrito antes de cada test para empezar desde 0
      beforeEach(() => {
            act(() => {
                  useCartStore.getState().clearCart()
            })


      })
      const mockProduct = {
            id: 1,
            name: 'Pizza Mozzarella',
            price: 10,
            description: 'Rica pizza',
            image_url: '',
            is_available: true,
            category_id: 1,
      }

      it('debe mostrar 0 cuando el producto no está en el carrito', () => {
            render(<QuantityCounter product={mockProduct} />)

            expect(screen.getByText('0')).toBeInTheDocument()
      })

      it('debe incrementar la cantidad al hacer clic en el botón Añadir unidad', async () => {
            const user = userEvent.setup()

            render(<QuantityCounter product={mockProduct} />)

            const addButton = screen.getByRole('button', { name: /añadir unidad/i })
            await user.click(addButton)

            expect(screen.getByText('1')).toBeInTheDocument()

            const cart = useCartStore.getState().cart
            expect(cart).toHaveLength(1)
            expect(cart[0].quantity).toBe(1)
      })
})