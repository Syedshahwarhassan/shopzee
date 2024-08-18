'use client'
import React, { useEffect, useState } from 'react'
import Createbtn from '../Createbtn/page';
import { app } from '../../../Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import Link from 'next/link';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';


const Home = () => {
const auth=getAuth(app);
const db=getDatabase(app);
const cookies=useCookies();
const route=useRouter();
const [userid,setUserid]=useState(null);
const [store,setStore]=useState();
useEffect(()=>{
onAuthStateChanged(auth,(user)=>{
  if(user){
    setUserid(user.uid);

    // Fetching data from firebase here. In this case, data is fetched from firebase database.
   const Storeref= ref(db,'/Store/'+user.uid+'/Basic/')
    onValue(Storeref,(snapshot)=>{
      const data=snapshot.val();
      setStore(data);
      console.log(data);

    })
  } else {
    console.log('User is logged out');
  }
})
},[])

const EditStore=()=>{
cookies.set('Userid',userid)
route.push('/EditStore')
}
    return (

<div className="p-3">
<div className="">
<h1 className='text-4xl font-outfit  font-semibold'>Your Store :</h1>
{
  store && store?(
    <div className='p-3 m-3 flex justify-start items-center border border-gray-300 w-[80%] h-[100px]'>
  <div className="h-full w-[150px]">
  <img src={store?.image} className='h-full cover' alt="" />
  </div>
  <div className="w-full">
  <h2 className='font-outfit text-xl'>{store?.name}</h2>
  <p className='text-lg text-gray-700 font-outfit'>{store?.description}</p>
  </div>
  <div className=" w-full h-full flex items-center justify-end">
  <h1 onClick={()=>EditStore()} className='text-xl cursor-pointer font-outfit  p-2 bg-black rounded hover:bg-gray-600 text-white'>Edit</h1>
  </div>
    </div>
  ):(
  <div className='flex justify-center items-center h-screen'>
  <h1 className='text-center text-gray-800 text-2xl font-outfit'>Loading......</h1>
  </div>)
}
</div>
</div>
 
  )
}

export default Home
