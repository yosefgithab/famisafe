import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer/Footer'
import NavBar from './navBar/NavBar'

export default function Header() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}
