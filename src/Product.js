import React from "react";
import "./css/Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id,title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    console.log("button clicked");
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id:id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img className="product__img" alt="iphone 11" src={image} />
      <button className="product__button" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
