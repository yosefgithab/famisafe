import React from 'react'
import GeonectionNavBar from './GeonectionNavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Pages/Footer/Footer'

export default function Header1() {
  return (
    <div>
        <GeonectionNavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
