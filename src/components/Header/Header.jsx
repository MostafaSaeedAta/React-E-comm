import React from 'react'
import "./Header.scss"
import { Link } from "react-router-dom"
import Navbar from "../NavBar/NavBar"

const Header = () => {
  return (
    <header className='header text-white'>
      <div className='container'>
        <div className='header-cnt'>

          <div className='header-cnt-top-l'>
            <ul className='flex top-links align-center'>
              {/* links */}
              <li>
                <Link to="/seller"> seller center </Link>
              </li>
              <li className='vert-line'></li>
              <li>
                <Link to="/download"> download </Link>
              </li>
              <li className='vert-line'></li>
              <li className='d-flex align-center'>
                <span className='fs-13'> follow us on </span>
                <ul className='social-links'>
                  <li className='mx-2'>
                    <a className='fs-15' href='www.facebook.com'>
                      <i className='fab fa-facebook'></i>
                    </a>
                  </li>
                  <li className='mx-2'>
                    <a className='fs-15' href='www.instagram.com'>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
          </div>

          <div className='header-cnt-top-r'>
          <ul className='top-links flex align-center'>
                <li>
                  <Link to = "/" className='top-link-itm'>
                    <span className='top-link-itm-ico mx-2'>
                      <i className='fa-solid fa-circle-question'></i>
                    </span>
                    <span className='top-link-itm-txt'>Support</span>
                  </Link>
                </li>
                <li className='vert-line'></li>
                <li>
                  <Link to = "/">
                    <span className='top-link-itm-txt'>Register</span>
                  </Link>
                </li>
                <li className='vert-line'></li>
                <li>
                  <Link to = "/">
                    <span className='top-link-itm-txt'>Log in</span>
                  </Link>
                </li>
              </ul>
          </div>

        </div>

        <div className='header-cnt-bottom'>
          <Navbar />
        </div>

        
      </div>

    </header>
  )
}

export default Header