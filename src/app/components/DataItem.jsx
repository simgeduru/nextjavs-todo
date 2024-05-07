'use client'
import React, { useState } from "react";
import Link from "next/link";

export default function DataItem({ value, id, DeleteF, done }) {
  const [doneS, setDone] = useState(done);
  return (
    <div className="flex justify-center mt-4">
      <div className=" w-2/3 bg-[#FC819E] rounded-md flex flex-row justify-between">
        
        <div onClick={()=>{
            setDone(!doneS)
        }} className="flex pl-3 text-lg mr-2 w-2/3">
          {value.title}
        </div>
        <button onClick={() =>{
          console.log(id);
          DeleteF(id)}} className="bg-[#f1c9d3] rounded-md text-center p-1 ">D</button>
          <span className="self-end">{doneS &&"✓"}</span>
      </div>
      
    </div>
  );
}
