import Link from 'next/link'
import React from 'react'

const EditNav = () => {
  return (
    <div className='w-full h-[70px]  border border-gray-300 flex justify-start items-center'>
      <div className="">
      <Link href={'/Home'} className='m-1 text-4xl font-outfit font-bold'>Shopzee</Link>
      </div>
    </div>
  )
}

export default EditNav
