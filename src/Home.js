import React from "react";
import "./Home.css";
import Product from "./Product.js";
function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__img"
          alt="BOTM"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            title="iphone"
            price={12000}
            image="http://pngimg.com/uploads/iphone_11/iphone_11_PNG38.png"
            rating={5}
          />
          <Product
            title="iphone"
            price={12000}
            image="http://pngimg.com/uploads/iphone_11/iphone_11_PNG38.png"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="iphone"
            price={12000}
            image="http://pngimg.com/uploads/iphone_11/iphone_11_PNG38.png"
            rating={5}
          />
          <Product
            title="iphone"
            price={12000}
            image="http://pngimg.com/uploads/iphone_11/iphone_11_PNG38.png"
            rating={5}
          />
          <Product
            title="iphone"
            price={12000}
            image="http://pngimg.com/uploads/iphone_11/iphone_11_PNG38.png"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={120000}
            image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
