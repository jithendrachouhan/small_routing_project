import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import UserContext from '../utils/UserContext'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {

  const { userData, setUserData } = useContext(UserContext) 

  const navigator = useNavigate()

  const handleLogOutClicked = () => {
    setUserData(null)
    navigator('/')
  }

  return (
    <div className='bg-slate-400 shadow-sm flex justify-between px-10 items-center py-8' >
        <img alt='logo' className='mix-blend-multiply h-12' src={logo} />
        <ul className='flex items-center'>
          <NavLink to='/'  className={({isActive}) => `ml-8 ${isActive? "text-pink-600": "text-black"}`}><li>Home</li></NavLink>
          <NavLink to='/normal'  className={({isActive}) => `ml-8 ${isActive? "text-pink-600": "text-black"}`}><li>Normal</li></NavLink>
          <NavLink to='/admin'  className={({isActive}) => `ml-8 ${isActive? "text-pink-600": "text-black"}`}><li>Admin</li></NavLink>
          <NavLink to='/super'  className={({isActive}) => `ml-8 ${isActive? "text-pink-600": "text-black"}`}><li>Super</li></NavLink>
          {!userData && <NavLink to='/auth'  className={({isActive}) => `ml-8 ${isActive? "text-pink-600": "text-black"}`}><li>Login</li></NavLink>}
          {userData && <>
            <li className='ml-8' >
              <div className='p-2 border border-black rounded-md'>
                  <h2>Name: {userData.name}</h2>
                  <h2>RoleType: {userData.role}</h2>
              </div>
          </li>
          <li className='ml-8 cursor-pointer' onClick={handleLogOutClicked} >Logout</li>
          </>}
        </ul>
    </div>
  )
}

export default Header