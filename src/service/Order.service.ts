import { OrderPayload } from '../types/OrderPayload';
import api from '../utils/api';

export function saveOrder(payload: OrderPayload) {
  return api.post('/orders', payload);
}

