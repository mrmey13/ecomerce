import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Category from './modules/categories/categories';
import Cart from './modules/cart/cart';

const Account = Loadable({
  loader: () => import(/* webpackChunkName: "account" */ 'app/modules/account'),
  loading: () => <div>loading ...</div>,
});

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
  loading: () => <div>loading ...</div>,
});

const Routes = () => {
  return (
    <div className="view-center">
      <div className="main-container">
        <Switch>
          <Route path="/category" component={Category} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </div>
  );
};

export default Routes;
