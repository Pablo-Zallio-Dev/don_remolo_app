export interface Category {
      id: number,
      created_at?: string,
      name: string,
      slug: string
}

export interface Product{
      id: number,
      name: string,
      price: number,
      description?: string,
      image_url: string | null,
      is_available: boolean,
      category_id: number,

}
export interface CartItem {
      product: Product
      quantity: number
}