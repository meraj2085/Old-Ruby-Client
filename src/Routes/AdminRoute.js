import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthProvider';
import LogoSpinner from '../Pages/Shared/Spinners/LogoSpinner';
import { getRole } from "../Api/getRole";

const AdminRoute = ({ children }) => {
     const { user, loading } = useContext(AuthContext)
     const [role, setRole] = useState(null)
     const [roleLoading, setRoleLoading] = useState(true)
     useEffect(() => {
       setRoleLoading(true)
       getRole(user?.email).then(data => {
         setRole(data)
         setRoleLoading(false)
       })
     }, [user])
   
     if (loading || roleLoading) {
       return (
         <div className='h-screen'>
           <LogoSpinner></LogoSpinner>
         </div>
       )
     }
   
     if (user && user.uid && role === 'Admin') {
       return children
     }
     return <Navigate to='/dashboard' />
   }

export default AdminRoute;