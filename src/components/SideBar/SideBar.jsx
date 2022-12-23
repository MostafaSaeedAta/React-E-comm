import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getSidebarStatus, setSidebarOff } from '../../Store/SideBarSlice'
import "./SideBar.scss"
import { fetchAsyncCategories, getAllCategories } from '../../Store/CategorySlice'

const SideBar = () => {

  const dispatch = useDispatch()
  const isSidebarOn = useSelector(getSidebarStatus)
  const categories = useSelector(getAllCategories)

  useEffect(() => {
     dispatch(fetchAsyncCategories())
  }, [dispatch])
  

  return (
    <aside className={`sidebar ${isSidebarOn ? 'hide-sidebar' : ""}`}>
      <button type='button' className='sidebar-hide-btn' onClick={() => dispatch(setSidebarOff())}>
        <i className='fas fa-times'></i>
      </button>
      <div className='sidebar-cnt'>
        <div className='cat-title fs-17 text-uppercase fw-6 ls-1h'>
          all category
        </div>
        <ul className='cat-list'>
        {
          categories.map((category, idx) => {
            return (
              <li key={idx}>
                <Link to={`category/${category}`} className='cat-list-link text-capitalize'>{category.replace('-', ' ')}</Link>

              </li>
            )
          })
        }
        </ul>
      </div>
    </aside>
  )
}

export default SideBar