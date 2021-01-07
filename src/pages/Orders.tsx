
import ProductsList from '../components/ProductsList';
import StepsHeader from '../components/StepsHeader';

import '../styles/pages/Orders.scss';

const Orders = () => {
  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList />
    </div>
  );
}

export default Orders;
