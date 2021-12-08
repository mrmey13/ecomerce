import './categories.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { Rate } from 'antd';

export type Product = {
  id: number;
  name: string;
  image: string;
  url: string;
  mainPrice: number;
  discountPrice?: number;
  rating: number;
  sold?: number;
};

const Product = ({ product }: { product: Product }) => {
  const formatPrice = price => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };

  return (
    <div className="product-card">
      <Link to={product.url}>
        <div className="product-image">
          <img src={product.image} alt="Logo" />
        </div>
      </Link>
      <div className="product-card-body">
        <div className="product-name">
          <Link to={product.url}>{product.name}</Link>
        </div>
        <div className="product-price">
          {product.discountPrice && <span className="discount-price">{`${formatPrice(product.discountPrice)}đ`}</span>}
          <span className="main-price">{`${formatPrice(1000)}đ`}</span>
        </div>
        <div className="product-selled">
          <span className="product-rate">
            <Rate allowHalf value={product.rating} disabled />
          </span>
          {product.sold && <span className="product-sold">Đã bán: {product.sold}</span>}
        </div>
      </div>
    </div>
  );
};

export default Product;
