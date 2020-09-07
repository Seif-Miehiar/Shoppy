import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./header/header"; 
import NotFound from './notFound/NotFound';
import Signin from './signin/Signin';
import Signup from './signup/Signup';
import Home from './home/Home';

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
)

export default App;
