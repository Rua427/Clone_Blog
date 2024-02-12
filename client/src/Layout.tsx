import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

type Props = {}

const Layout = (props: Props) => {
  return (
    <main>
        <Header/>
        <Outlet/>
    </main>

  )
}

export default Layout