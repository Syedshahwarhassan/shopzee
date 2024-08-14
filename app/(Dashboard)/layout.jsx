
// import Sidebar from "./components/(Dashboard)/Sidebar";
'use client';
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topnav from "../components/Topnav";
import "../globals.css";
import Createbtn from "./Createbtn/page";



// export const metadata = {
//   title: "Shopzee | Build Your Shop Now Free",
//   description: "A Platfrom that give you a premission to create store free",
// };

export default function DashLayout({ children }) {
  const [value,setValue]=useState();

useEffect(()=>{
  window.localStorage.setItem('storebtn',false);
  const storebtn=window.localStorage.getItem('storebtn');
  setValue(storebtn);
},[])

  return (
    <html lang="en">
      <body >
    <div className="flex">
    <div className="">
    <Sidebar/>
    </div>
    <div className="w-full">
    <Topnav/>
    {
      value=='false'?<Createbtn/>:(
        <div className="">
        {children}
      </div>
      )
      }
    </div>
    </div>
  

      </body>
    </html>
  );
}
