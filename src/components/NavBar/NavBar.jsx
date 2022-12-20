import React from 'react'
import "./NavBar.scss"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <div className='navbar-cnt flex align-center'>
        <div className='brand-and-toggler flex align-center'>
          <button type="button" className='sidebar-show-btn text-white'>
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
        </div>

      </div>
    </nav>
  )
}

export default NavBar