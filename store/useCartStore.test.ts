import { describe, it, expect, beforeEach } from '@jest/globals'
import { act } from '@testing-library/react'
import { useCartStore } from './useCartStore'

describe('useCartStore', () => {
      beforeEach(() => {
            act(() => {
                  useCartStore.getState().clearCart()

            })
      })
      it('Deberia agregarse un producto al carrito', () => {
            const mockProduct = {
                  id: 1,
                  name: 'Pizza Mozzarella',
                  price: 10,
                  description: '',
                  image_url: '',
                  is_available: true,
                  category_id: 1,
            }
            act(() => {
                  useCartStore.getState().addToCart(mockProduct)
            })

            const state = useCartStore.getState()

            expect(state.cart).toHaveLength(1)
            expect(state.cart[0].product.name).toBe('Pizza Mozzarella')
            expect(state.cart[0].quantity).toBe(1)
            expect(state.cart[0].product.price).toBe(10)
      })

      it('debe incrementar la cantidad si el producto ya existe en el carrito', () => {
            const mockProduct = {
                  id: 1,
                  name: 'Pizza Mozzarella',
                  price: 10,
                  description: '',
                  image_url: '',
                  is_available: true,
                  category_id: 1,
            }

            // ACT: Agregamos el MISMO producto dos veces seguidas
            act(() => {
                  useCartStore.getState().addToCart(mockProduct)
                  useCartStore.getState().addToCart(mockProduct)
            })

            // ASSERT: No debe duplicar la fila, solo aumentar la cantidad
            const state = useCartStore.getState()
            expect(state.cart).toHaveLength(1)
            expect(state.cart[0].quantity).toBe(2)
      })
})
