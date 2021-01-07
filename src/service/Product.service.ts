import api from "../utils/api"

export const fetchProducts = () => {
  return api.get('/products');
}
