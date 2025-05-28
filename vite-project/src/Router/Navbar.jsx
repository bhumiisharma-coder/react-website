import React from 'react'
import {Link, NavLink} from "react-router"
import "../App.css"
import { FaSearch } from "react-icons/fa";

const Navbar = ({input,setinput}) => {

     const handleSearch = (e) => {
    const value = e.target.value;
    setinput(value) // Update state in parent
  }


  return (
    <div className='d-flex justify-content-around pt-3 align-items-center bg-dark text-white'>
         <h1>logo</h1>
         <div className='navbar d-flex gap-5'>
             <NavLink  to={"/"} style={({isActive})=>(
                {
                    color:
                    isActive?"white":
                    "grey"
                }
             )}> home </NavLink>
             < NavLink to={"/products"}  style={({isActive})=>(
                {
                    color:
                    isActive?"white":
                    "grey"
                }
             )}> Products</NavLink>
             < NavLink to={"/addproducts"}  style={({isActive})=>(
                {
                    color:
                    isActive?"white":
                    "grey"
                }
             )}> add Products</NavLink>
             < NavLink to={"/about"}  style={({isActive})=>(
                {
                    color:
                    isActive?"white":
                    "grey"
                }
             )}> about </NavLink>
            < NavLink to={"/gallery"}  style={({isActive})=>(
                {
                    color:
                    isActive?"white":
                    "grey"
                }
             )}> gallery</NavLink>

        <div className='position-relative'>
        <input placeholder='search herer ' className='inputs'  value={input} onChange={(e)=>handleSearch(e)}/> 
        <FaSearch  className='position-absolute left-0'/>
        </div>
               
         </div>

         <div className='d-flex gap-2 text-white'>
            <Link to={"/login"}> <button className='btn btn-lg text-capitalize bg-primary text-white '>log in </button></Link>
       <Link to={"/cart"}>    <button className='btn btn-lg text-capitalize bg-danger text-white'>cart</button></Link>
                
         </div>
    </div>
  )
}

export default Navbar
