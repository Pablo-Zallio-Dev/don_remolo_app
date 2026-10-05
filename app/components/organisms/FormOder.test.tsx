/// <reference types="jest" />
import '@testing-library/jest-dom'
import React from 'react'
import { render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormOder from './FormOder'
import { useCartStore } from '@/store/useCartStore'

window.open = jest.fn()

describe('FormOrder', () => {
      beforeEach(() => {
            act(() => { useCartStore.getState().clearCart() })
            jest.clearAllMocks()
      })

      it('debe mostrar mensajes de error cuando se intenta enviar el formulario vacío', async () => {
            const user = userEvent.setup()
            render(<FormOder />)

            const submitButton = screen.getByRole('button', { name: /enviar pedido por whatsapp/i })

            await user.click(submitButton)

            expect(await screen.findByText(/El nombre y apellido son requeridos/i)).toBeInTheDocument()
            expect(await screen.findByText(/La direccion es obligatoria/i)).toBeInTheDocument()
      })

      it('debe procesar el pedido y abrir WhatsApp cuando los datos son válidos', async () => {

            const user = userEvent.setup()

            act(() => {
                  useCartStore.getState().addToCart({
                        id: 1,
                        name: 'Producto de prueba',
                        price: 100,
                        image_url: '',
                        is_available: true,
                        category_id: 1,
                  })
            })

            render(<FormOder />)

            await user.type(screen.getByLabelText(/nombre/i), 'Juan Perez')
            await user.type(screen.getByLabelText(/dirección de entrega/i), 'calle falsa 123')

            const submitButton = screen.getByRole('button', { name: /enviar pedido por whatsapp/i })

            await user.click(submitButton)

            await waitFor(() => {
                  expect(window.open).toHaveBeenCalledWith(
                        expect.stringContaining('https://api.whatsapp.com'),
                        '_blank'
                  )
                  expect(useCartStore.getState().cart).toHaveLength(0)
            })
      })
})

