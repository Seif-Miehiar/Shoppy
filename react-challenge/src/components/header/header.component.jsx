import React from 'react';
// import { Link } from 'react-router-dom';
import "./header.css"
// creating functional component.

const Header = () => (

  <div class="header">
  {/* <Link to="/" class="logo">Shoppy</Link> */}
  <div class="header-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Shop</a>
    <a href="#about">Cart</a>
  </div>
</div>

)

export default Header