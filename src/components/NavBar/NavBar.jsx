import React from 'react'
import "./NavBar.scss"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarOn } from "../../Store/SideBarSlice";
import { getAllCategories } from '../../Store/CategorySlice';

const NavBar = () => {
  const dispatch = useDispatch()
  const categories = useSelector(getAllCategories)
  return (
    <nav className='nav-bar'>
      <div className='navbar-cnt flex align-center'>
        <div className='brand-and-toggler flex align-center'>
          <button type="button" className='sidebar-show-btn text-white'
          onClick={() => dispatch(setSidebarOn())}
          >
            <i className='fas fa-bars'></i>
          </button>
          <Link to='/' className='navbar-brand flex-align-center'>
            <span className='navbar-brand-ico'>
              <i className='fa-solid fa-bag-shopping'></i>
            </span>
            <span className='navbar-brand-txt mx-2'>
              <span className='fw-7'>Snap</span>Up.
            </span>
          </Link>
        </div>

        <div className='navbar-collapse w-100'>
          <div className='navbar-search bg-white'>
            <div className='flex align-center'>
              <input type= 'text' className='form-control fs-14' placeholder='search your prefered item here ..'></input>
              <Link to='/' className='text-white search-btn flex align-center justify-center'>
                <i className='fa-solid fa-magnifying-glass'></i>
              </Link>
            </div>
          </div>

          <ul className='navbar-nav my-3 flex flex-row align-items-center justify-content-center fs-12 fw-4 font-manrope'>
           {
            categories.slice(0, 8).map((category, idx) => (
            <li className='nav-item px-2 no-wrap' key={idx}>
              <Link to={`category/${category}`} className='nav-link text-capitalize'>{category.replace("-" , " ")}</Link>
            </li>
           ))
           }
           
          </ul>
        </div>


        <div className='navbar-cart flex align-center'>
          <Link to='/' className='cart-btn'>
            <i className='fa-solid fa-cart-shopping'></i>
            <div className='card-items-value'> 0 </div>
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default NavBar