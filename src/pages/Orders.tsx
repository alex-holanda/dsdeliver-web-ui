import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Footer from '../components/Footer';
import OrderLocation from '../components/OrderLocation';
import OrderSummary from '../components/OrderSummary';

import ProductsList from '../components/ProductsList';
import StepsHeader from '../components/StepsHeader';
import { saveOrder } from '../service/Order.service';
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

  const handleSubmit = () => {

    const productsIds = selectedProducts.map(({id}) => ({productId: id}));
    console.log(productsIds);

    const payload = {
      ...orderLocation!,
      products: productsIds
    }

    saveOrder(payload).then((response) => {
      toast.error(`Pedido enviado com sucesso! nº ${response.data.id});
      setSelectedProducts([]);
    }).catch(() => {
      toast.warning('Erro ao enviar pedido');
    });
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
          onSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </>
  );
}

export default Orders;
