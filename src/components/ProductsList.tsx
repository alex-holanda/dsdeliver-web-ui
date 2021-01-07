import { useEffect, useState } from 'react';

import { Product } from '../types/Product';
import { fetchProducts } from '../service/Product.service';
import ProductCard from './ProductCard';

import '../styles/components/ProductsList.scss';

type Props = {
  products: Product[]
}

const ProductsList = ({ products }: Props) => {

  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {
          products.map(product => {
            return (
              <ProductCard
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
