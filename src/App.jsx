import { useState } from 'react';
import './App.css';
import Product from './components/Product';
import Cart from './components/Cart'

function App() {

  const [items, setProduct] = useState([]);
  const [showHome, setHomeBtn] = useState(true);
  const [showCart, setCartBtn] = useState(false);
  const[empty, setCartEmpty]= useState(true);
  let purchasedItems = [];
  let sum=0;

  const setShowHome =() =>{
    setHomeBtn(true);
    setCartBtn(false);
  }

  const setShowCart =() =>{
    setHomeBtn(false);
    setCartBtn(true);
  }

  const cartIsNotEmpty = ()=>{
    setCartEmpty(false);
  }

  const products = [
    { name: "Computer", price: 100 },
    { name: "Paper", price: 1 },
    { name: "Pen", price: 10 },
    { name: "Rice", price: 4.95 },
  ];

  const addToCart = (i) => {
    let filltered = products.filter((val, index) => index === i);
    setProduct([...items, ...filltered]);
    cartIsNotEmpty();
    document.getElementById('message').innerHTML = filltered[0].name + ' added to cart successfully';
    setTimeout(()=>{
      document.getElementById('message').innerHTML = ""
    },3000);
  };

const remove =(i) =>{
  let filter = items.filter((p, index) => index != i)
  if(filter.length==0){
    setCartEmpty(true);
  }
  setProduct(filter);
}

const clearCart =() =>{
  setProduct([]);
  setCartEmpty(true);
}

// const totalPrice = () => {
//   return items.reduce((total, item) => total + item.price, 0)
// };
const totalPrice =()=>{
  items.forEach((val)=>{
    sum += val.price;
  })
  return sum;
}
let totalP = totalPrice();

const purchase =() =>{
  purchasedItems = items;
  setProduct([]);
  setCartEmpty(true);
  console.log(purchasedItems);
}

 return(
  <div className='App'>
    <div className='header'>
      <button className='hBtn' onClick={setShowHome}><img className='homeBtn' src='./home.png'></img>Home</button>
      <img className='logo' src='./logo.png'></img>
      <button className='cBtn' onClick={setShowCart}><img src='./cart.png' className='cartBtn'></img>Cart</button>
    </div>

    <div className='home' style = {{display:showHome ? '': 'none'}}>
      {
        products.map((p,index)=>{
      return (
      <Product 
        name = {p.name}
        price = {p.price}
        index = {index}
        addToCart = {addToCart}
      />
      );
        })}
        <p id='message'></p>
    </div>

    <div className='cart' style = {{display:showCart ? '': 'none'}}>
      {
      items.map((p,index)=>{
      return (
      <Cart 
        name = {p.name}
        price = {p.price}
        index ={index}
        remove = {remove}
      />
      );
    }
      )}
      <div className='totalDiv'>
      <p style={{display: empty ? '' : 'none'}}>Your Cart is Empty</p>
      <h1 className='total' >Total: {totalP}$</h1>
      <button style={{display: empty ? '' : 'none'}} className='backToStore' onClick={setShowHome}>Back to store</button>
      <button className='buyBtn'  style={{display: empty ? 'none' : ''}} onClick={purchase}>Buy</button>
      <button className='buyBtn' style={{display: empty ? 'none' : ''}} onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  </div>
)}

export default App;
