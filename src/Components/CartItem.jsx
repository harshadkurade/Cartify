import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {remove} from "../redux/Slices/cartSlice"
import { toast } from 'react-toastify';

const CartItem = ({item}) => {

  const dispatch= useDispatch();

  const removeFromcart = ()=>{
    dispatch(remove(item.id));
    toast.success("Item Removed");

  }
  return (
    <div>

        <div className='flex gap-x-5 mt-[10px] ${}'>

          <div>
            <img className='h-[180px]' src={item.image}/>
          </div>
          <div className='py-[15px] flex flex-col w-[500px] text-left gap-[10px]'>
            <h1 className='font-bold text-md'>{item.title}</h1>
            <h1 className='text-sm text-slate-500'>{item.description.slice(0,100)+"..."}</h1>
            <div className='flex justify-between'>
              <p>${item.price}</p>
              <div onClick={removeFromcart}>
                <MdDelete />
              </div>
          </div>

        </div>
          


        </div>
    </div>
  )
}

export default CartItem
