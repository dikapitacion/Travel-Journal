import React from "react";
import Head from "./components/header";
import data from "./components/data";
import Card from "./components/card";

export default function App(){
  const Cards = data.map(x=>{
    return (
    <Card item = {x}/>
    )
    
  })
  return(
   <div className="container">
    <Head/>
    <div className="cards-list">
      {Cards}
    </div>
   </div>
  )
}