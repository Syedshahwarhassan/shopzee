'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { app } from '../../Firebase';
 import {getAuth,createUserWithEmailAndPassword,sendEmailVerification} from 'firebase/auth'
import { useRouter } from 'next/navigation';
import {getDatabase,set,ref} from 'firebase/database';
import '../globals.css'
import { toast } from 'react-toastify';
const Register = () => {
    const [name,setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const route=useRouter();
const createAccount =()=>{
  window.document.getElementById('submit').disabled=true;

  window.document.getElementById('loader').style.display='flex';
    const auth=getAuth(app);
    createUserWithEmailAndPassword(auth,email,password).then(()=>{
        sendEmailVerification(auth.currentUser).then(()=>{
storedata();
           toast.info('Verification email sent. Please check your inbox.')
  window.document.getElementById('loader').style.display='none';

            route.push('/Login')
        }).catch((e)=>{
            // alert('Error creating account'+e.message)
toast.error("Something want Wrong!")
        });
    }).catch((e)=>{
      toast.error("Check your Email or Network")
        console.log('Error creating account'+e.message)
    })
}

const storedata =()=>{
try {
    const db=getDatabase(app);
    const auth=getAuth(app);

    const id=auth.currentUser.uid;
    const userRef=ref(db,`user/${id}`)
    set(userRef,{
        name:name,
        email:email,
        password:password,
        uid:id
    })
} catch (error) {
    console.log(error);
}
}
  return (
    <div className="flex h-[100vh] justify-center items-center">
    <div className="flex  flex-col shadow-lg p-10 rounded-lg">
      <h1 className="text-center font-bold text-black font-outfit text-6xl">
        Shopzee
      </h1>
      <h2 className="text-center text-black  font-semibold font-outfit text-3xl">Register</h2>
      <label
      htmlFor="name "
      className="text-left mt-2 text-xl text-black font-semibold font-outfit"
    >
      Name
    </label>
    <input onChange={(e)=>setName(e.target.value)} type="text" name="name" id="name" className="rounded-lg mt-2  font-outfit border border-gray-300 bg-gray-200"  placeholder="Enter Your Name"/>

      <label
        htmlFor="email "
        className="text-left mt-2 text-xl text-black font-semibold font-outfit"
      >
        Email
      </label>
      <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" className="rounded-lg mt-2  font-outfit border border-gray-300 bg-gray-200"  placeholder="Enter Your Email"/>

      <label
        htmlFor="password "
        className="text-left mt-2 text-xl text-black font-semibold font-outfit"
      >
        Password
      </label>

      <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" className="rounded-lg mt-2  font-outfit border border-gray-300 bg-gray-200"  placeholder="Enter Your Password"/>

<div className="flex justify-center items-center">
<button type="submit" id='submit' onClick={()=>createAccount()} className="my-5 font-outfit font-semibold py-2 px-4 text-xl bg-black text-white h-fit w-fit rounded-xl">Register</button>

</div>

<div id='loader' class="hidden flex-row gap-2 justify-center">
  <div class="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
  <div class="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.3s]"></div>
  <div class="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
</div>
      <div>
        <h5 className="text-black font-outfit ">Already have account? <Link href="/Login" className="text-blue-900 hover:underline font-outfit">Login</Link></h5>
      </div>
    </div>
  </div>
  )
}

export default Register
