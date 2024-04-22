import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-slate-400 flex justify-between items-center'>
        <img className='mix-blend-multiply h-10' src={logo} alt='logo'  />
        <ul className='grid grid-cols-1 gap-8 border border-black px-16'>
          <NavLink to='/'  className={({isActive}) => `ml-8 ${isActive? "text-pink-600": "text-black"}`}><li>Home</li></NavLink>
          <NavLink to='/normal'  className={({isActive}) => `ml-8 ${isActive? "text-pink-600": "text-black"}`}><li>Normal</li></NavLink>
          <NavLink to='/admin'  className={({isActive}) => `ml-8 ${isActive? "text-pink-600": "text-black"}`}><li>Admin</li></NavLink>
          <NavLink to='/super'  className={({isActive}) => `ml-8 ${isActive? "text-pink-600": "text-black"}`}><li>Super</li></NavLink>
        </ul>
    </div>
  )
}

export default Footer