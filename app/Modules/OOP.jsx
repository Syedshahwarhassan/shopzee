
import { getDatabase, ref, set } from "firebase/database";
import {getStorage,getDownloadURL,uploadBytes,ref as Storeref} from 'firebase/storage'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { app } from "../../Firebase";



class Methods{


     handlesubmit = async (location,name,des,image,Uid) => {
        const db=getDatabase(app);
        
       const inforef=ref(db,'/user/'+Uid+`/store/${location}/`)
        const storage = getStorage(app);
        const id=Math.floor(Math.random()*10000)
        const imageRef = Storeref(storage, `storeImages/${id}`);
        uploadBytes(imageRef,image).then((snapshot)=>{
          getDownloadURL(snapshot.ref).then((url=>{
            set(inforef,{
              name:name,
              description:des,
              image:url
            }).then(()=>{
                const Storepath=ref(db,'/Store/'+Uid+'/'+location);
                set(Storepath,{
                    name:name,
                    description:des,
                    image:url
                  }).then(()=>{
                    toast.success("Store Added Successfully")
                  
                  })
             
            }).catch((e)=>{
              toast.error("Failed to Upload")
            }).then(()=>{
          
            })
           
          }))
        })
      }
}
export const insert=new Methods();