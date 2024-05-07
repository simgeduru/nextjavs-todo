"use client";
import React, { useState, useEffect } from "react";
import { data } from "../data";
import DataItem from "../components/DataItem";
import Link from "next/link";

export default function page() {

  const [array, setArray] = useState(data);
  const [value, setValue] = useState("");
  let newData = new Array();
  //fetching
 /*  const FetchIslemi = () =>{
    let arrTest = [];
     fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        
        arrTest = Array.from(json);
        console.log(json);
        console.log(arrTest);
        console.log(typeof(arrTest));
        setArray(arrTest);
      })

      return arrTest;
} */
useEffect(() => {
  async function fetchItems() {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const res = await data.json();
    console.log(res);
    setArray(res); 
    
  }

  fetchItems();
}, []);
//console.log(FetchIslemi())
console.log(array);
  const Delete = (index) => {
    array.map((Item) => {
      if (Item.id != index) {
        newData.push(Item);
      }
    });
    setArray(newData);
    console.log(newData);
  };

  const handleChange =(event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  }

  const handleAdd = ()=>{
    console.log("tıkladın");
    const newTodo =[ {
      title:"",
      completed:false,
      id:array.length+10,
    }]
    newTodo[0].title = value;
    console.log(typeof(newTodo));
    const Test =array.concat(newTodo);
    console.log(Test);
    setArray(Test);
  }
  return (
    <>
      <div className="mt-10">
        <h1 className="text-center text-3xl">ToDos</h1>
        <div className="flex justify-center rounded-md text-center p-1">
          <form className="flex flex-col text-lg">
            <label>
              
              <input onChange={(event)=>{
                handleChange(event);
              }} type="text" name="name" className="bg-[#f1c9d3] rounded-md text-center " />
            </label>
            <button onClick={()=>(handleAdd())} type="button" value="Submit" className="bg-[#ff7c9d] rounded-md text-center w-2/5 mt-4" >Add to-do
              </button>
          </form>
        </div>
        {array.length>0&&array.map((element) => {
          // {console.log(element.id + "pagein içi");}
          return (
            <DataItem
              key={element.id}
              id={element.id}
              value={element}
              DeleteF={Delete}
              done = {element.done}
            ></DataItem>
          );
        })}
        <div className="bg-[#FC819E] w-1/5 rounded-md text-center mt-4 ml-5">
          <Link href="http://localhost:3000/">Home Page</Link>
        </div>
      </div>
    </>
  );
}
