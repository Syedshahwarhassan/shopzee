'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Createbtn = () => {
const route=useRouter();
  const createstore=()=>{
    // window.localStorage.setItem('storebtn',true);
route.push('/StoreInfo');

}
  return (
    <div className='flex justify-center items-center w-full h-[500px]'>
      <div className='flex justify-center items-center flex-col p-10 border border-gray-300 rounded-lg'>
      <h1 className='text-2xl font-outfit font-semibold'>Create your own Store free Now!</h1>
      <button onClick={()=>createstore()} className='btn m-4 bg-black text-white font-outfit font-semibold p-3 rounded-xl hover:bg-gray-800'>Create Store</button>
      </div>
    </div>
  )
}

export default Createbtn
