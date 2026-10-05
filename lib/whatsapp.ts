import { CartItem } from "@/types"

export interface OrderFormData {
      nombres: string
      direccion: string
      notas?: string
}



export function generateWhatsAppLink(
      formData: OrderFormData,
      cart: CartItem[],
      totalPrice: number
) {
      const phoneNumber = '34696075650'

      const itemsList = cart
            .map(
                  (item) =>
                        `• ${item.quantity}x ${item.product.name} - ${(item.product.price * item.quantity).toFixed(2)}€`
            )
            .join('\n')

      const message = `🍕 *NUEVO PEDIDO - PIZZERÍA* 🍕

👤 *Cliente:* ${formData.nombres}
📍 *Dirección:* ${formData.direccion}
${formData.notas ? `📝 *Notas:* ${formData.notas}\n` : ''}
----------------------------------
🛒 *DETALLE DEL PEDIDO:*
${itemsList}

----------------------------------
💰 *TOTAL A PAGAR:* ${totalPrice.toFixed(2)}€
💵 *Método de pago:* Efectivo contra entrega
🛵 *Envío:* Delivery propio del negocio`

      return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
}