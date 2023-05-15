import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LogoPage() {
    return (
        <div>
            <NavLink to='/'>
                KIENTHUCDIALY
                {/* <img src={require(`../../assets/images/logos/logo-blue.svg`).default} alt="" /> */}
            </NavLink>
        </div>
    )
}
