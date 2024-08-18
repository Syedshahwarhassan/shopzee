'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
// import { app } from '../../Firebase';
import { getDatabase, onValue, ref } from 'firebase/database';
import { app } from '../../../Firebase';
import { useCookies } from 'next-client-cookies';
// import { metadata } from '../layout';

const PreviewStore = ({searchParams }) => {
    
    const [basic,setBasic]=useState([]);
    const [hero,setHero]=useState([]);
    const [about,setAbout]=useState([]);
const cookies=useCookies()
const id=cookies.get('Userid')

    // console.log(searchParams.id)
    // const id=searchParams?.id;
    const db=getDatabase(app);
    const BasicRef=ref(db, `Store/${id}/Basic`);
    const HeroRef=ref(db, `Store/${id}/Hero`);

    const AboutRef=ref(db, `Store/${id}/About`);
    
    useEffect(()=>{
        onValue(BasicRef,((snapshot)=>{
            const data=snapshot.val();
           
            setBasic(data)
                   }))
        onValue(AboutRef,((snapshot)=>{
            const data=snapshot.val();
          setAbout(data)
        }))
        onValue(HeroRef,((snapshot)=>{
            const data=snapshot.val();
            setHero(data)

        }))
    },[])
    
    // prints the store id from the query parameter
  return (
    <div className='w-full'>
 <div className="navbar flex justify-between items-center w-full border px-3 border-gray-200">
 <div className="logo flex items-center m-2">
 <img className='h-[70px]' src={basic?.image} alt="" />
 <h6 className='font-outfit text-xl font-semibold'>{basic?.name}</h6>
 </div>
 <div className="border border-gray-200 rounded-xl overflow-hidden">
 <input placeholder='Search here......' className='border border-gray-200  overflow-hidden font-outfit bg-gray-100' type="text" name="" id="" />
 <button className='border border-gray-200 font-outfit overflow-hidden p-2 bg-gray-300'>Search</button>
 </div>
 </div>

 <div className="hero relative">
 <img src={hero?.image} className='h-[500px] w-[100%]' alt="" />
 <div className=" absolute bg-white top-[150px] p-10 left-[30%] border border-gray-1">
 <h1 className='text-4xl font-outfit text-center font-semibold'>{hero?.name}</h1>
 <p className='text-xl font-outfit text-center'>{hero?.description}</p>
 </div>
 </div>
 <div className="about h-[550px] flex justify-evenly w-full">
 <div className="w-1/2 flex justify-center items-center p-4 overflow-hidden">
 <img src={about?.image} className='w-full h-full' alt="" />
 </div>
 <div className="w-1/2 flex  flex-col  py-[100px] px-6">
 
 <h1 className='text-4xl font-outfit  font-semibold'>{about?.name}</h1>
 <p className='text-xl font-outfit '>{about?.description}</p>
 </div>
 </div>
 <div className="footer flex justify-center items-center bg-blue-600 h-[150px]">
 
<div className="font-outfit text-xl text-white"> &copy; {new Date().getFullYear()} All rights reserved. {basic?.name}</div>
 </div>
    </div>
  )
}
  
export default PreviewStore
