import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LoginBtn() {
  return (
    <>
         <NavLink to="/login" className="btn btn-s3">Đăng nhập</NavLink>
    </>
  )
}
