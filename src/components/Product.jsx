import React from "react";
import { useState } from 'react';
import './Products.css';


export default function Product(props){
    return(
        <div className="product">
            <h1 className="title">{props.name}</h1>
            <h1 className="price">{props.price}$</h1>
            <button onClick={()=>props.addToCart(props.index)} className="addBtn">+</button>
        </div>
    )
}