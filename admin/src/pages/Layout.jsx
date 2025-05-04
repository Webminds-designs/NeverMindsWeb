import React from 'react'
import DashboardNavigater from '../components/DashboardNavigater'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <DashboardNavigater />
        <div>
            <Outlet />
        </div>
    </div>
  )
}
