import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import "./home.css"

const Home = () => {

  return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://c0.wallpaperflare.com/preview/447/552/983/ecommerce-online-shop-euro.jpg"
      alt=""
    />

    <Carousel.Caption>
      <h1 style={{color:"black"}}>SHOP WITH US</h1>
      <p style={{color:"black"}}> shopping is easier than ever </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  )
}

export default Home;