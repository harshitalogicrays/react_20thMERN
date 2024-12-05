import React, { Fragment } from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom';
import { BsHouse } from 'react-icons/bs';
const Sidebar = ({open,close}) => {
    const contentStyle = {
        transition: 'opacity 0.8s',
        opacity: open ? 1 : 0,
        visibility:open?'visible':'hidden'
      };
      const links = [
        {id:1,url:'/admin',text:'Dashboard',icon:<BsHouse/>},
        {id:2,url:'/admin/category/add',text:'Add category'},
        {id:3,url:'/admin/category/view',text:'View Category'},
        {id:4,url:'/admin/item/add',text:'Add Item'},
        {id:5,url:'/admin/item/view',text:'View Items'},
        {id:6,url:'/admin/orders',text:'Orders'},
      ] 
  return (
    <div className="sidebar" style={contentStyle}>
      <button type="button" className='btn-close float-end' onClick={close}></button>
      <ul className='nav flex-column mt-5'>
      <li class="nav-item">
      {links?.map(link=><Fragment key={link}> <NavLink  class="nav-link" to={link.url}   className={({ isActive }) =>
            isActive ? "active text-danger bg-info nav-link fw-bold" : "nav-link text-light"
              } end >{link?.icon} {link.text}</NavLink><hr/>
              </Fragment>
        )} 
    </li>
      </ul>
    </div>
  )
}

export default Sidebar
