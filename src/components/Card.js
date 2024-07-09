import { useState, useEffect } from "react";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import {add, remove} from "../store/cartSlice";


export const Card = ({product}) => {
  const dispatch = useDispatch();
  const {name, price, image} = product;
  const [isInCart, setIsInCart] = useState(false);
  const cartList = useSelector(state => state.cartState.cartList);

  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === product.id)
    setIsInCart(productIsInCart);
  }, [cartList, product.id]) 

  return (
    <div className="card">
      <img src={image} alt={name}/>
      <p className="name">{name}</p>
      <div className="purchase">
        <p>
        ${price}
        </p>
        {isInCart ? <button className="remove" onClick={() => dispatch(remove(product))}>Remove</button>: <button onClick={() => dispatch(add(product))}>Add To Cart</button> }
        
      </div>
      
    </div>
  )
}
