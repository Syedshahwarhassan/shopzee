'use client'
import { useCookies } from 'next-client-cookies';
import React, { useState } from 'react'
import { insert } from '../Modules/OOP';
import { toast } from 'react-toastify';
import Link from 'next/link';

const EditSide = ({searchParams}) => {
    // const id=searchParams?.id;
    const cookies=useCookies();
     const id=cookies.get('Userid');
     const [heroimg,setHeroimg]=useState();
     const [heroTitle,setHeroTitle]=useState('');
     const [heroDesc,setHeroDesc]=useState('');
     const [aboutimg,setAboutImg]=useState('');
     const [aboutTitle,setAboutTitle]=useState('');
     const [aboutDesc,setAboutDesc]=useState('');

     const SaveStore=()=>{
        insert.handlesubmit('/Hero',heroTitle,heroDesc,heroimg,id).then(()=>{
insert.handlesubmit('/About',aboutTitle,aboutDesc,aboutimg,id).then(()=>{
    toast.success('Data saved successfully');
}).catch(()=>{
    toast.error('Error in saving data');
})
        }).catch(()=>{
            toast.error('Error in saving data');
        })

     }
  return (
    <div className='w-[250px] h-full border border-gray-300'>
     <div className="">
 <Link href={`/Store?id=${id}`} target='_blank' className='m-3 bg-gray-700 text-white p-3 text-xl font-outfit rounded-lg'>Preview</Link>
     <button onClick={()=>SaveStore()} className='m-3 bg-black text-white p-3 text-xl font-outfit rounded-lg'>Save</button>
     </div>
    <div className="overflow-y-auto flex justify-start  flex-col border border-gray-300 h-full w-full">
{/*<details className="Color p-2">
<summary className='text-xl font-outfit font-semibold p-1'>Color Platte</summary>
<div className="">
<div className="flex items-center" >
<label htmlFor="" className='font-outfit text-xl'>Navbar:</label>
<input type="color" id="favcolor" className='m-2' />
</div>
<div className="flex items-center" >
<label htmlFor="" className='font-outfit text-xl'>About:</label>
<input type="color" id="favcolor" className='m-2' />
</div>
<div className="flex items-center" >
<label htmlFor="" className='font-outfit text-xl'>Product:</label>
<input type="color" id="favcolor" className='m-2' />
</div>
<div className="flex items-center" >
<label htmlFor="" className='font-outfit text-xl'>Footer:</label>
<input type="color" id="favcolor" className='m-2' />
</div>
<div className="flex items-center" >
<label htmlFor="" className='font-outfit text-xl'>Navbar:</label>
<input type="color" id="favcolor" className='m-2' />
</div>
</div>
</details>*/}
    <details className="Hero p-2 cursor-pointer ">
    <summary className='text-xl font-outfit font-semibold p-1'>Hero</summary>
<div className="">
<label htmlFor="hero-title" className='text-lg font-outfit'>Title:</label>
<input onChange={(e)=>setHeroTitle(e.target.value)} type="text" id="hero-title" className="w-full p-2 border border-gray-300 bg-gray-300 rounded-xl text-gray-700 font-outfit" placeholder='Title...'/>
<label htmlFor="hero-description" className='text-lg font-outfit'>Description</label>
<textarea onChange={(e)=>setHeroDesc(e.target.value)} placeholder='Description here.....' className="w-full p-2 border border-gray-300 bg-gray-300 rounded-xl text-gray-700 font-outfit" id=""></textarea>
<label htmlFor="hero-description" className='text-lg font-outfit'>Hero Image:</label>

<input onChange={(e)=>setHeroimg(e.target.files[0])} type="file" name="file" className='w-full ' id="" />
</div>
    </details>
    <details className="about p-2 cursor-pointer">
    <summary className='text-xl font-outfit font-semibold p-1'>About</summary>
    <div className="">
<label htmlFor="hero-title" className='text-lg font-outfit'>Title:</label>
<input onChange={(e)=>setAboutTitle(e.target.value)} type="text" id="hero-title" className="w-full p-2 border border-gray-300 bg-gray-300 rounded-xl text-gray-700 font-outfit" placeholder='Title...'/>
<label htmlFor="hero-description" className='text-lg font-outfit'>Description</label>
<textarea onChange={(e)=>setAboutDesc(e.target.value)} placeholder='Description here.....' className="w-full p-2 border border-gray-300 bg-gray-300 rounded-xl text-gray-700 font-outfit" id=""></textarea>
<label htmlFor="hero-description" className='text-lg font-outfit'>Hero Image:</label>

<input onChange={(e)=>setAboutImg(e.target.files[0])} type="file" name="file" className='w-full ' id="" />
</div>
    </details>

    </div>
    
    </div>
  )
}

export default EditSide
