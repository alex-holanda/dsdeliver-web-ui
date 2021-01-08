import '../styles/components/ProductCard.scss';
import { Product } from '../types/Product';
import { formatPrice } from '../utils/helpers';

type Props = {
  product: Product;
  onSelectProduct: (product: Product) => void;
  isSelected: boolean;
}

const ProductCard = ({ product, onSelectProduct, isSelected }: Props) => {
  return (
    <div
       onClick={() => onSelectProduct(product)}
      className={`order-card-container ${isSelected ? 'selected' : ''}`}
    >
      <h3 className="order-card-title">
        {product.name}
      </h3>

      <img src={product.imageUri} alt={product.name} className="order-card-image" />

      <h3 className="order-card-price">
        {
          formatPrice(product.price)
        }
      </h3>

      <div className="order-card-description">
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
