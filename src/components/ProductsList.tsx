import { Product } from '../types/Product';
import ProductCard from './ProductCard';

import '../styles/components/ProductsList.scss';
import { checkIsSelected } from '../utils/helpers';

type Props = {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  selectedProducts: Product[];
}

const ProductsList = ({ products, onSelectProduct, selectedProducts }: Props) => {

  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {
          products.map(product => {
            return (
              <ProductCard
                isSelected={checkIsSelected(selectedProducts, product)}
                onSelectProduct={onSelectProduct}
                key={product.id}
                product={product}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default ProductsList;
