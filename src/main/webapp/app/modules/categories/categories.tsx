import './categories.scss';
import React from 'react';
import Product from './product';
import { Breadcrumb } from 'antd';

const Category = () => {
  return (
    <>
      <div className="filter-container">Product</div>
      <div className="product-list-view">
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="/">Homepage</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/category">category</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="product-list-card">
          <div className="product-list-card-header">
            <div className="tabs-link active">Product</div>
          </div>
          <div className="product-list-card-body"></div>
          <Product />
        </div>
      </div>
    </>
  );
};

export default Category;
