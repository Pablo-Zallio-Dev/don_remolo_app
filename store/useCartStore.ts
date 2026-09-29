import { CartItem, Product } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartStore {
      cart: CartItem[],
      addToCart: (product: Product) => void,
      removeFromCart: (productId: number) => void,
      clearCart: () => void,
      getTotalItems: () => number,
      getTotalPrice: () => number
}

export const useCartStore = create<CartStore>()(
      persist(
            (set, get) => ({
                  cart: [],
                  addToCart: (product: Product) => {
                        const currentCart = get().cart;
                        const existingIndex = currentCart.findIndex(
                              (item) => item.product.id === product.id
                        );
                        if (existingIndex !== -1) {
                              const updatedCart = [...currentCart];
                              updatedCart[existingIndex].quantity += 1;

                              set({ cart: updatedCart })
                        } else {
                              set({
                                    cart: [...currentCart, { product, quantity: 1 }]
                              })
                        }
                  },
                  removeFromCart: (productId: number) => {
                        const currentCart = get().cart
                        const existingIndex = currentCart.findIndex(
                              (item) => item.product.id === productId
                        )
                        if (existingIndex !== -1) {
                              const itemToUpdate = currentCart[existingIndex]

                              if (itemToUpdate.quantity > 1) {
                                    const updateCart = currentCart.map((item, index) =>
                                          index === existingIndex
                                                ? { ...item, quantity: item.quantity - 1 }
                                                : item
                                    )
                                    set({ cart: updateCart })
                              } else {
                                    const updateCart = currentCart.filter(
                                          (item) => item.product.id !== productId
                                    )

                                    set({ cart: updateCart })
                              }
                        }
                  },
                  clearCart: () => set({ cart: [] }),
                  getTotalItems: () => {
                        return get().cart.reduce((total, item) => total + item.quantity, 0);
                  },
                  getTotalPrice: () => {
                        return get().cart.reduce(
                              (total, item) => total + item.product.price * item.quantity,
                              0
                        );
                  },


            }),
            {
                  name: 'cart-storage',
            }
      )
)