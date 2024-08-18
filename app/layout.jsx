
// import Sidebar from "./components/(Dashboard)/Sidebar";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { app } from "../Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { cookies } from "next/headers";



export const metadata = {
  title: "Shopzee | Build Your Shop Now Free",
  description: "A Platfrom that give you a premission to create store free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
    
     {children}
<ToastContainer/>
      </body>
    </html>
  );
}
