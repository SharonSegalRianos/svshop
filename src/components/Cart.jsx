import React from "react";
import './cart.css'

export default function Cart(props){
    return(
        <div className="cartProduct">
            <h1 className="cartTitle">{props.name}</h1>
            <h1 className="cartPrice">{props.price}$</h1>
            <button onClick={()=>props.remove(props.index)} className="delete">X</button>
        </div>
    )
}