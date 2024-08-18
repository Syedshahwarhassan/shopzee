'use client'

import React, { useEffect, useState } from 'react'
import {getAuth,onAuthStateChanged,signOut} from 'firebase/auth'
import {getDatabase,ref,onValue ,set} from 'firebase/database'
import { app } from '../../../Firebase'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { useCookies } from 'next-client-cookies'
// import { cookies } from 'next/headers'

const Topnav = () => {
    const [Userid,setUserid]=useState('');
    const [Userdata,setUserdata]=useState('');
const route=useRouter();
const cookies=useCookies();
const auth=getAuth(app);

    useEffect(()=>{

onAuthStateChanged(auth,(user)=>{
    if (user) {
        setUserid(user.uid);
        const db=getDatabase(app);
        
        const userRef=ref(db,'user/'+user.uid);
        onValue(userRef,(snapshot)=>{
          const data=snapshot.val();
          setUserdata(data);

        })
    }
})
    },[])
 const UserOption=()=>{
const option=document.getElementById('useroption');
console.log("Hello");
if(option.style.display=='none'){
    option.style.display='block';
}else {
    option.style.display='none';

    
}
 }
 const logout=()=>{
const comform= confirm('Are You want to LogOut');
if(comform){
    signOut(auth)
    .then(() => {
       console.log('User signed out!');
cookies.remove('TokenId')
       route.push('/Register');
     })
    .catch((error) => {
       console.error('Error signing out:', error);
     });
    setUserid('');
    setUserdata('');
    console.log("Logged out");
}
 }
 const createstore=()=>{
  if(Userdata.store.active==false){
    const db=getDatabase(app);
        
    const userRef=ref(db,'user/'+Userid +'/store/active');
    set(userRef,true).then(()=>{
      route.push('/Createbtn');
    }).catch((error)=>{
      console.error('Error writing document:', error);
    })
    
  }else{
    toast.error('You Have Already Created a Store');
  }
 }
  return (
    <div className='flex justify-end items-center border border-gray-300 w-full '>
    <Link href={{pathname:'/Store',query:{id:Userid}}} className='m-3 font-outfit text-2xl cursor-pointer hover:bg-gray-100 p-3 rounded-lg'>Store</Link>
      <div onClick={()=>UserOption()} id='username' className=" h-[50px] w-[50px] cursor-pointer flex justify-center  text-3xl font-outfit p-1 rounded-full bg-gray-200 border border-gray-400  m-3">
    
     {
        Userdata.name && Userdata.name[0]
      }
<div id='useroption' className=" hidden  fixed z-2 bg-white top-[70px] right-2 p-3 border border-gray-100 rounded-lg">
<ul>
    <li className='text-xl p-3 w-full font-outfit hover:bg-gray-300 rounded-xl'>
    {
        Userdata && Userdata.email
    }</li>
    <li onClick={()=>logout()} className='text-xl p-3 w-full font-outfit hover:bg-gray-300 rounded-xl'>LogOut</li>
</ul>
</div>
      </div>
    </div>
  )
}

export default Topnav
