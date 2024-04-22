import React, { useContext, useRef, useState } from 'react'
import { USER_TYPE } from '../utils/constants'
import UserContext from '../utils/UserContext'
import { useNavigate } from 'react-router-dom'

const Auth = () => {

  const [ errorMessage, setErrorMessage ] = useState(null)
  const { setUserData } = useContext(UserContext)

  const nameRef = useRef()
  const typeRef = useRef()

  const navigator = useNavigate()

  const handleSubmitClicked = () => {
    if(!nameRef.current.value){
      setErrorMessage("Name Should not be Empty")
    }else{
      setErrorMessage(null)
      setUserData({
        name: nameRef.current.value,
        role: [parseInt(typeRef.current.value)]
      })
      navigator('/')
    }
  }



  return (
    <div className='flex-1 flex flex-col justify-center items-center'>
      <input ref={nameRef} placeholder='Enter the User name' className='p-2 px-4 bg-slate-300 rounded-lg'/>
      <select ref={typeRef} className='w-28 mt-8'>
        {Object.keys(USER_TYPE).map((type) => {
          return <option value={USER_TYPE[type]}>{type}</option>
        })}
      </select>
      {errorMessage && <h2 className='text-red-600 font-bold mt-8'>{errorMessage}</h2>}
      <button onClick={handleSubmitClicked} className='mt-8 px-4 py-2 bg-pink-400 text-white rounded-lg'>Submit</button>
    </div>
  )
}

export default Auth