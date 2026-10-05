import { describe, it, expect } from "@jest/globals";
import { generateWhatsAppLink } from "./whatsapp";

describe("generateWhatsAppLink", () => {
  it("Debe generar una URL de WhatsApp válida con los productos y datos del usuario ", () => {
    const mockCustomer = {
      nombres: "Juan Pérez",
      direccion: "Calle Falsa 123",
      notas: "Sin cebolla",
    };

    const mockCart = [
      {
        product: { id: 1, name: "Pizza Mozzarella", price: 15, description: '', image_url:'', is_available: true, category_id: 1 },
        quantity: 2,
      },
    ];
    const mockTotal = 30;

    const result = generateWhatsAppLink(mockCustomer, mockCart, mockTotal);

    expect(result).toContain('https://api.whatsapp.com/send')
    const decodedMessage = decodeURIComponent(result)
    expect(decodedMessage).toContain('Juan Pérez')
    expect(decodedMessage).toContain('Calle Falsa 123')
    expect(decodedMessage).toContain('Sin cebolla')
    expect(decodedMessage).toContain('Pizza Mozzarella')
    expect(decodedMessage).toContain('30')
  });
});