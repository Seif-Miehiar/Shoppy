import React from 'react';
import Header from "./components/header/header.component"
import ShopPage from "./components/shop/shoppage.component"
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Switch>
        <Route exact path='/' component={Header} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
