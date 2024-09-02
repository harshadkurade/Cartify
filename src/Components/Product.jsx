import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add,remove} from "../redux/Slices/cartSlice"
import { toast } from 'react-toastify';

const Product = ({post}) => {

  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch();

  const addToCart = ()=>{
    dispatch(add(post));
    toast.success("Item Added to cart");

  }

  const removeFromCart = ()=>{
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }

  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 gap-x-3 p-4 mt-10 ml-5 rounded-xl
     shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]
     hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className='h-[180px]'>
        <img src = {`${post.image}`} className='h-full w-full'/>
      </div>

      <div className='flex justify-between gap-11 items-center w-full mt-5'>
          <div className='text-green-600'>
            ${post.price}
          </div>
          
          {
            cart.some((p)=>p.id===post.id) ? 
            (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={removeFromCart}>
              Remove Item
            </button>) : 
            (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={addToCart}>
              Add to Cart
            </button>)
          }
      </div>

      
    </div>
  )
}

export default Product
