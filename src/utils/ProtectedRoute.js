import React, { useContext } from 'react'
import UserContext from './UserContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({accessID}) => {

    const { userData } = useContext(UserContext)
    
    return !userData ? <Navigate to='/auth' replace />: 
                        !userData.role.find((type) => accessID.includes(type))? <Navigate to='/unAuth' replace/>:
                                                                                <Outlet/>

  
}

export default ProtectedRoute