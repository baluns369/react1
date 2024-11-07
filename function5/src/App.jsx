import { useState,useEffect } from 'react'
import './App.css'

function App(){
  let [Arr,setArr]=useState([])
  useEffect(()=>{
    getData()
  },[])
    const getData=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts")
    const data=await res.json()
    setArr(data)
    }
console.log(Arr)//
return (
  <>
  <ul>
    {
      Arr.length!==0?Arr.map((el)=><li>{el.title}</li>):<li>loading</li>
    }
    </ul>
    </>
)
}
export default App
