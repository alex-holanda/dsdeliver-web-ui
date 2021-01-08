import { useEffect, useState } from 'react';
import OrderLocation from '../components/OrderLocation';

import ProductsList from '../components/ProductsList';
import StepsHeader from '../components/StepsHeader';
import { fetchProducts } from '../service/Product.service';

import '../styles/pages/Orders.scss';
import { OrderLocationData } from '../types/OrderLocationData';
import { Product } from '../types/Product';

const Orders = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));

      console.table(orderLocation);
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList products={products} />
      <OrderLocation
        onChangeLocation={location => setOrderLocation(location)}
      />
    </div>
  );
}

export default Orders;
