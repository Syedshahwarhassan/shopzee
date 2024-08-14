"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { app } from '../../Firebase';
import '../globals.css';
 import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const route=useRouter();
    const sign=()=>{
      window.document.getElementById('submit').disabled=true;
      window.document.getElementById('loader').style.display='flex';

      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
      if(auth.currentUser.emailVerified==true){
      toast.success("Login Successful")
      window.document.getElementById('loader').style.display='none';

        route.push('/Home');
        return;
      }
      else{
        route.push('/');
        toast.error("Please Verify your Email")
      }
        })
       .catch((error) => {
        toast.error("Please Check your Email or Password")
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  return (
    <div className="flex h-[100vh] justify-center items-center">
      <div className="flex  flex-col shadow-lg p-10 rounded-lg">
        <h1 className="text-center font-bold text-black font-outfit text-6xl">
          Shopzee
        </h1>
        <h2 className="text-center text-black  font-semibold font-outfit text-3xl">Login</h2>
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
<button type="submit" id="submit" onClick={()=>sign() } className="my-5 font-outfit font-semibold py-2 px-4 text-xl bg-black text-white h-fit w-fit rounded-xl">Login</button>

</div>
<div id='loader' class="hidden flex-row gap-2 justify-center">
  <div class="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
  <div class="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.3s]"></div>
  <div class="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
</div>
        <div>
          <h5 className="text-black font-outfit ">Don't have account? <Link href="/Register" className="text-blue-900 hover:underline font-outfit">Register</Link></h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
