import React, { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from './utils/Router'
import UserContext from './utils/UserContext'

const App = () => {

  const [ userData, setUserData ] = useState(null)

  return (
    <UserContext.Provider value={ {userData: userData, setUserData: setUserData} }>
      <RouterProvider router={Router}/>
    </UserContext.Provider>
  )
}

export default App
