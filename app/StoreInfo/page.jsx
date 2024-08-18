'use client'
import React, { useEffect, useState } from "react";
// import { app } from "../../Firebase";
import { getDatabase, ref, set } from "firebase/database";
import {getStorage,getDownloadURL,uploadBytes,ref as Storeref} from 'firebase/storage'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { insert } from "../Modules/OOP";
import '../globals.css'
import { useCookies } from "next-client-cookies";
import { app } from "../../Firebase";
// import { cookies } from "next/headers";

const StoreInfo = () => {
  
  const [name,setName]=useState();
  const [description,setDescription]=useState();
  const [image, setImage]=useState();
  const [Userid,setUserid]=useState('');
  const cookies=useCookies();
  const router=useRouter();
// const route=useRouter();
useEffect(()=>{
  const auth = getAuth(app);
  onAuthStateChanged(auth,(user)=>{
  
    if(user){
  
  // console.log(user.accessToken)   
      setUserid(user.uid);
    
    }else{
      setUserid('');
    }
  })
},[])


const handlesubmit=()=>{
  window.document.getElementById('loader').style.display='flex';
 
  cookies.set('StoreId','126332763283777842');
insert.handlesubmit('/Basic',name,description,image,Userid)
  .then(()=>{

    router.push('/Home')
   })
window.document.getElementById('loader').style.display='none';

}

  return (
    
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl m-4 font-outfit font-semibold">Store Information</h1>
        <div className="flex flex-col border border-gray-100 p-4  m-4 rounded-lg">
          <label className="text-xl font-outfit m-2" htmlFor="title">Name:</label>
          <input onChange={(e)=>setName(e.target.value)} className="rounded-lg bg-gray-100 border border-gray-300 m-4 font-outfit" placeholder="Enter your Store Name" type="text" id="title" name="title" required />
          <label className="text-xl font-outfit m-2" htmlFor="des">Description:</label>
          <textarea onChange={(e)=>setDescription(e.target.value)} className="rounded-lg bg-gray-100 border border-gray-300 m-4 font-outfit" placeholder="Enter your Store Description" id="des" name="des" rows="4" cols="50" required />
         
         <input onChange={(e)=>setImage(e.target.files[0])} className="border border-gray-100 rounded-lg w-fit m-4" type="file" name="image" id="image" />
         <div id='loader' className="hidden flex-row gap-2 justify-center">
         <div className="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
         <div className="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.3s]"></div>
         <div className="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
         </div>
         <div className=" flex flex-col justify-center items-center">
<button onClick={()=>handlesubmit()} className="bg-black m-4 p-3 hover:bg-gray-600 text-white font-outfit w-fit rounded" type="submit">Submit</button>

</div>

          </div>
  
      </div>

   
  );
};

export default StoreInfo;
