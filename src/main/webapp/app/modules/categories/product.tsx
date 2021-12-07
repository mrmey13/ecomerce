import './categories.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { Rate } from 'antd';

const Product = () => {
  return (
    <div className="product-card">
      <div className="product-image">asdas</div>
      <div className="product-name">
        <Link to="/category">Ten san pham vippro cuc chat</Link>
      </div>
      <div className="product-price">
        <span className="discount-price">100000đ</span>
        <span className="main-price">200000đ</span>
      </div>
      <div className="product-selled">
        <span className="product-rate">
          <Rate allowHalf value={3.6} disabled />
        </span>
        <span className="product-sold">Đã bán: 150</span>
      </div>
    </div>
  );
};

export default Product;
