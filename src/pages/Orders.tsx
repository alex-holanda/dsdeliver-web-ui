import { useEffect, useState } from 'react';

import ProductsList from '../components/ProductsList';
import StepsHeader from '../components/StepsHeader';
import { fetchProducts } from '../service/Product.service';

import '../styles/pages/Orders.scss';
import { Product } from '../types/Product';

const Orders = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList products={products} />
    </div>
  );
}

export default Orders;
