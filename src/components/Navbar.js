import React from 'react'
import "../styles/nav.css"
import {Link} from "react-router-dom"
import { FaSearch } from 'react-icons/fa'



const logo = "https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg"
const search = <FaSearch/>

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo' id='logoImage'>
            <Link to= "/"> <img id= "logoImage" src={logo} alt="not"/></Link>
        </div>
            <Link className='navlinks' href='/'>Mi Phones</Link>
            <Link className='navlinks' href='/'>Redmi Phones</Link>
            <Link className='navlinks' href='/'>TV</Link>
            <Link className='navlinks' href='/'>Laptops</Link>
            <Link className='navlinks' href='/'>Fitness & Lifestyles</Link>
            <Link className='navlinks' href='/'>Home</Link>
            <Link className='navlinks' href='/'>Radio</Link>
            <Link className='navlinks' href='/'>Accessories</Link>

            <div className='searchbox'>
              <input type='text' name='search' placeholder='Search Products'/>
              <span className='searchicon'> {search}</span>
              
            </div>


            
        
    </div>
  )
}

export default Navbar