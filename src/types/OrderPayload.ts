import { OrderLocationData } from "./OrderLocationData"

type ProductId = {
  productId: number;
}

export type OrderPayload = {
  products: ProductId[];
} & OrderLocationData;
