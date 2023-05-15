import React, { useEffect, useState } from 'react'
import '../../assets/css/login.css'
import LogoPage from '../common/LogoPage'
import { NavLink } from 'react-router-dom'

export default function RegisterPage() {
    return (
        <>
            <div className='login-page'>
                <div className='login-body'>
                    <section className='section-login'>
                        <form>
                            <h1>
                                <LogoPage />
                            </h1>
                            <div className="inputbox">
                                <ion-icon name="text-outline" />
                                <input type="text" required />
                                <label htmlFor>Tên người dùng</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="mail-outline" />
                                <input type="email" required />
                                <label htmlFor>Email</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline" />
                                <input type="password" required />
                                <label htmlFor>Mật khẩu</label>
                            </div>
                            <button className='button-login'>Đăng ký</button>
                            <div className="register">
                                <p> <NavLink to="/login" >Đăng nhập</NavLink></p>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}
