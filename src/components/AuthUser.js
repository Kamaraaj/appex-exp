import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'

const AuthUser = () => {
  const isAuthUser = Cookies.get("isAuth")
  if (!isAuthUser) {
    return <Navigate to="/sign-in" />
  }
  return <Outlet />
}

export default AuthUser
