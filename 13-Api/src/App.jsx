import React, { useState } from 'react';
import axios from 'axios';
const App=()=>{
//  async function getData(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//   }
const [data,setData]=useState([]);
const getData=async ()=>{
    // console.log("Button clicked");
    const response =await axios.get('https://jsonplaceholder.typicode.com/posts');
    // console.log(data); 
    setData(response.data);
    
}
  return(
    <div>
      <h1>Api</h1>
      <button onClick={getData}>Get Data</button>
      <div>
       {data.map(function(el,idx){
           return <h3>{el.title}</h3>
       })}
      </div>
    </div>
  )
}
export default App