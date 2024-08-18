
import { CookiesProvider } from "next-client-cookies";
import Sidebar from "../components/Sidebar";
// import Topnav from "./Topnav/page";
import "../globals.css";
import Createbtn from "./Createbtn/page";

import Topnav from "./Topnav/page";
import { cookies } from "next/headers";




// export const metadata = {
//   title: "Shopzee | Build Your Shop Now Free",
//   description: "A Platfrom that give you a premission to create store free",
// };

export default function DashLayout({ children }) {

const StoreId=cookies().get('StoreId')?.value;




  return (
    <html lang="en">
      <body >
    <div className="flex">
    <div className="">
    <Sidebar/>
    </div>
   {(StoreId)?(
    <div className="flex-grow">
    <Topnav/>
   <CookiesProvider>
   {children}
   </CookiesProvider>
    </div>
   ):<Createbtn/>

   }
    </div>
  

      </body>
    </html>
  );
}
