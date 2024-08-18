'use client'
// import Sidebar from "./components/(Dashboard)/Sidebar";
import { ToastContainer } from "react-toastify";
import '../globals.css';
import "react-toastify/dist/ReactToastify.css";
import { app } from "../../Firebase";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Helmet, HelmetProvider } from "react-helmet-async";





export default function StoreLayout({ children,searchParams }) {
   
    const [basic,setBasic]=useState([]);

    const id=searchParams?.id;
    const db=getDatabase(app);
    const BasicRef=ref(db, `Store/${id}/Basic`);
    useEffect(()=>{
        onValue(BasicRef,((snapshot)=>{
            const data=snapshot.val();
           
            setBasic(data)
                   }))
                },[])
                
  return (
    <html lang="en">
 
<HelmetProvider>
<Helmet>
<title>{basic?.name}</title>
<meta name="description" content={basic?.description} />


    <meta property="og:title" content="Dynamic Open Graph Title" />
    <meta property="og:description" content="Description for Open Graph" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href={basic?.image} />
</Helmet>
<body >
  
{children}
<ToastContainer/>
 </body>
</HelmetProvider>
    </html>
  );
}
