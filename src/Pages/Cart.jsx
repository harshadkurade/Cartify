import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem';


const Cart = () => {

  const {cart} = useSelector((state)=>state);
  const [totalAmount , setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce( (acc,curr)=> acc + curr.price , 0));
  },[cart])

  return (
    <div className='py-[30px]'>{
      cart.length > 0 ? 
      (<div className='flex max-w-6xl justify-between mx-auto gap-[20px] '>

        <div className='ml-[60px]'>
        {
          cart.map((item,index)=>{
            return <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
          })
        }
        </div>

        <div className='flex flex-col justify-between mt-5 mb-5'>

            <div className='text-left '>
              <div className='text-green-600 font-semibold leading-none mb-0'>Your Cart</div>
              <div className='text-green-600 font-bold text-[40px] leading-none mt-0 '>Summary</div>
              <p className='mt-[9px] font-semibold'>
                <span>Total Items : {cart.length}</span>
              </p>
            </div>

            <div>
              <p className='text-left'>Total Amount : <span className='font-bold'>${totalAmount}</span> </p>
              <button className='w-[370px] bg-green-700 text-white px-[15px] py-[2px] rounded'>CheckOut</button>
            </div>
          
        </div>    

      </div>) :
      (
        <div>
          <h1>Cart is Empty</h1>
          <Link to="/">
            <button>Shop Now</button>
          </Link>
        </div>
      )     
    }

    </div>
  )
}

export default Cart
