import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import OrderLocation from '../components/OrderLocation';
import OrderSummary from '../components/OrderSummary';

import ProductsList from '../components/ProductsList';
import StepsHeader from '../components/StepsHeader';
import { fetchProducts } from '../service/Product.service';

import '../styles/pages/Orders.scss';
import { OrderLocationData } from '../types/OrderLocationData';
import { Product } from '../types/Product';
import { checkIsSelected } from '../utils/helpers';

const Orders = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));

    console.table(orderLocation);
  }, []);

  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  return (
    <>
      <div className="orders-container">
        <StepsHeader />
        <ProductsList
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation
          onChangeLocation={location => setOrderLocation(location)}
        />
        <OrderSummary
          amount={selectedProducts.length}
          totalPrice={totalPrice}
        />
      </div>
      <Footer />
    </>
  );
}

export default Orders;
