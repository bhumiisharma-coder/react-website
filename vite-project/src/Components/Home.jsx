import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

const Home = () => {
    const [state,setstate] = useState([])
    const [page,setpage] = useState(1)

   
       function Fetchdata(){
              axios(`/api/products?_page=${page}&_limit=12`)
              .then((res)=>setstate(res.data))
              .catch((error)=>console.log(error))
      }
      useEffect(()=>{
            Fetchdata()
      },[page])
  return (
    <div>
        <h1 className='text-capitalize text-center mt-5 mb-5 pt-5 pb-5 bg-dark text-white'>home page</h1>
        <div className='d-flex flex-wrap justify-content-center'>
            {
                 state.length==0? <h1> data is loading</h1>:
                 state.map((ele)=>(
                   
                  <div className='w-25 p-5 text-center '>
             
                       <img src={ele.image} height={200} ></img>
                       <h6>{ele.title}</h6>
                       <button className='btn d-block bg-primary w-100'> {ele.price}</button>
                </div>
               ))
            }
        </div>
        <div className='d-flex gap-5 justify-content-center text-capitalize'>
            <button onClick={()=>setpage(page-1)} className='btn btn-lg text-capitalize'>prev</button>
            <button className='btn btn-lg' >{page}</button>
            <button onClick={()=>setpage(page+1)} className='btn btn-lg'>next</button>
        </div>
       

         
    </div>
  )
}

export default Home
