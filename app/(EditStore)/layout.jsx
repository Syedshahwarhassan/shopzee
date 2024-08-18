
// import Sidebar from "./components/(Dashboard)/Sidebar";
import { ToastContainer } from "react-toastify";
import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import EditNav from "../components/EditNav";
import EditSide from "../components/EditSide";
import { CookiesProvider } from "next-client-cookies/server";




export const metadata = {
  title: "Edit Your Store Now",
  description: "A Platfrom that give you a premission to create store free",
};

export default function EditLayout({ children }) {
  return (
    <html lang="en">
      <body >
    <EditNav/>
<div className=" flex h-[100vh] justify-start ">
<div className="h-full">
<EditSide/>
</div>
<div className="w-full">
<CookiesProvider>
{children}
</CookiesProvider>
<ToastContainer/>
</div>
</div>
      </body>
      
    </html>
  );
}
