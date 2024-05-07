
import React from "react";
import { data } from "../../../app/data";
import Link from "next/link"

export default function page({ params }) {
  console.log(params.id, "-----");
  
  const newData = data.filter(data => 
     (data.id == params.id)

    
  )
  console.log(newData);
  return (
    <div className="pl-5 mt-8 ">
      <h1 className="text-3xl">Description</h1>
      <div className="text-xl mt-4">{newData[0].description}</div>

      <div className="bg-[#FC819E] w-1/5 rounded-md text-center mt-4">
        <Link href="http://localhost:3000/todo">To-Do</Link>
      </div>
    </div>
  );
}
