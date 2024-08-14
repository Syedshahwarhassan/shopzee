import React from 'react'

const Createbtn = () => {
const createstore=()=>{
    alert("Hello");
}
  return (
    <div className='flex justify-center items-center h-[500px]'>
      <div className='flex justify-center items-center flex-col p-10 border border-gray-300 rounded-lg'>
      <h1 className='text-2xl font-outfit font-semibold'>Create your own Store free Now!</h1>
      <button onClick={()=>createstore()} className='btn m-4 bg-black text-white font-outfit font-semibold p-3 rounded-xl hover:bg-gray-800'>Create Store</button>
      </div>
    </div>
  )
}

export default Createbtn
