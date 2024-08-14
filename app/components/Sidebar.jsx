'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
  const path=usePathname();
  console.log(path)
  return (
    <div className='w-[250px] h-[100vh] bg-white border border-gray-300 '>
    <h1 className="text-center my-3 font-bold text-black font-outfit text-4xl">
    Shopzee
  </h1>
  <div className="Nav-link flex justify-center items-center">
  <ul className='w-full h-[100vh]'>
    <li className='my-1 flex justify-center items-center w-full'> <Link className={path.startsWith('/Home')?'text-lg    text-center text-blue-600  p-2 rounded-lg shadow font-outfit w-full':'text-lg   text-center text-black  p-2 rounded-lg hover:shadow font-outfit w-full'}      href="/Home">Home  </Link> </li>
    <li className='my-1 flex justify-center items-center w-full'> <Link className={path.startsWith('/Order')?'text-lg   text-center text-blue-600  p-2 rounded-lg shadow font-outfit w-full':'text-lg   text-center text-black  p-2 rounded-lg hover:shadow font-outfit w-full'}      href="/Order">Order</Link> </li>
    <li className='my-1 flex justify-center items-center w-full'> <Link className={path.startsWith('/Contact')?'text-lg   text-center text-blue-600  p-2 rounded-lg shadow font-outfit w-full':'text-lg   text-center text-black  p-2 rounded-lg hover:shadow font-outfit w-full'}    href="">Contact    </Link> </li>
    <li className='my-1 flex justify-center items-center w-full'> <Link className={path.startsWith('/User')?'text-lg   text-center text-blue-600  p-2 rounded-lg shadow font-outfit w-full':'text-lg   text-center text-black  p-2 rounded-lg hover:shadow font-outfit w-full'}       href="">User            </Link> </li>
    <li className='my-1 flex justify-center items-center w-full'> <Link className={path.startsWith('/Customized')?'text-lg   text-center text-blue-600  p-2 rounded-lg shadow font-outfit w-full':'text-lg   text-center text-black  p-2 rounded-lg hover:shadow font-outfit w-full'} href="">customized</Link> </li>

  </ul>
  </div>
    </div>
  )
}

export default Sidebar
