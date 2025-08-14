'use client'

import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";


function PlaceholderDocument() {
    const router = useRouter();

    const handleClick = () =>{
        //check if the user is Free tier and if they are over the file limit,push to the upgrade page 
        router.push("/dashboard/upload");

    };
  return (
    <div>
     <Button onClick={handleClick} className="flex flex-col item-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400">
        <PlusCircleIcon className="h-16 w-16"/>
        <p>Add a Document</p>

     </Button>
    </div>
  )
} 

export default PlaceholderDocument
