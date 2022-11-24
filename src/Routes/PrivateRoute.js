import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthProvider'
import LogoSpinner from '../Pages/Shared/Spinners/LogoSpinner'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if (loading) {
    return (
      <div className='h-screen'>
        <LogoSpinner></LogoSpinner>
      </div>
    )
  }

  if (user && user.uid) {
    return children
  }
  return <Navigate to='/signIn' state={{ from: location }} replace />
}

export default PrivateRoute