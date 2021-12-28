import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import React, { useEffect } from 'react';
import { Cart, changeQuantity, deleteCartItem, fetchCarts } from './cart.reducer';

const ProductCart = () => {
  const dispatch = useAppDispatch();
  const productCart = useAppSelector(state => state.cart.cartList);

  const onChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>, item: Cart) => {
    const tmp = { ...item, quantity: parseInt(event.target.value.replace(/[0^9]/g, ''), 10) };
    if (isNaN(tmp.quantity)) {
      dispatch(deleteCartItem(item.id));
    }
    if (tmp.quantity !== item.quantity) {
      dispatch(changeQuantity(tmp));
    }
  };

  const subQuantity = (item: Cart) => {
    const tmp = { ...item, quantity: item.quantity - 1 };
    if (tmp.quantity === 0) {
      dispatch(deleteCartItem(item.id));
    }
    dispatch(changeQuantity(tmp));
  };

  const addQuantity = (item: Cart) => {
    const tmp = { ...item, quantity: item.quantity + 1 };
    dispatch(changeQuantity(tmp));
  };

  useEffect(() => {
    dispatch(fetchCarts());
  }, [dispatch]);

  const formatPrice = (price: number) => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };
  return (
    <div className="product-cart-view">
      <div className="cart-title">
        {/* <label className="aladin-checkbox aladin-checkbox--checked"> */}
        <input className="" type="checkbox" onChange={event => console.log(event)} />
        {/* <div className="aladin-checkbox__box"></div> */}
        {/* </label> */}
      </div>
      <div className="shop-cart">
        <label className="aladin-checkbox">
          <input type="checkbox" />
          <a href="/">shop name</a>
        </label>
        <hr />
        {productCart.map(item => (
          <div key={item.id} className="shop-cart-item">
            <label className="aladin-checkbox">
              <input type="checkbox" />
            </label>
            <img src={item.imgSrc} alt="" />
            <div className="cart-item-content">
              <a className="item-name">{item.name}</a>
              <div className="item-info">{item.info}</div>
              <div className="item-note">{item.note}</div>
            </div>
            <div className="cart-item-price">
              <div className="item-price">{`đ ${formatPrice(item.price)}`}</div>
              <div className="item-action">
                <button className="button-del" onClick={() => dispatch(deleteCartItem(item.id))}>
                  <DeleteOutlined />
                </button>
              </div>
            </div>
            <div className="cart-item-quantity">
              <button className="button-sub" onClick={() => subQuantity(item)}>
                <MinusOutlined />
              </button>
              <input
                type={'text'}
                value={item.quantity}
                onChange={event => {
                  onChangeQuantity(event, item);
                }}
              />
              <button className="button-add" onClick={() => addQuantity(item)}>
                <PlusOutlined />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
