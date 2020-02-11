declare module GetProduct.bs {
  export type Product = {
    id: number
    name: string
    price: number
  }
  export function getAllProduct(): Product
}
