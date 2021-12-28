import './cart.scss';
import React, { useEffect } from 'react';
import ProductCart from './product-cart';
import PlaceOrder from './place-order';
import Product from '../categories/product';
import { fakeData } from '../categories/fakeData';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { fetchCarts } from './cart.reducer';

const Cart = () => {
  return (
    <div className="view-center">
      <div className="cart-view">
        <div className="flex-container">
          <ProductCart />
          <PlaceOrder />
        </div>
        <div className="product-list-suggest">
          <div className="product-list-title">Gợi ý cho bạn</div>
          <div className="product-list-content">
            {fakeData.slice(0, 12).map((item, index) => (
              <Product key={index} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
