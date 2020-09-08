import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./header/header"; 
import NotFound from './notFound/NotFound';
import Signin from './signin/Signin';
import Signup from './signup/Signup';
import Home from './home/Home';
import UserDashboard from "./userDashboard/userDashboard";
import AdminDashboard from "./adminDashboard/adminDashboard";
import AdminRoute from './adminRoute/adminRoute';
import UserRoute from "./userRoute/userRoute"

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <UserRoute exact path="/user/dashboard" component={UserDashboard} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
)

export default App;
