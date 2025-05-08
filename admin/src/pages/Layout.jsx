import React from 'react'
import DashboardNavigater from '../components/DashboardNavigater'
import { Outlet } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

export default function Layout() {
  return (
    <ProtectedRoute>
        <DashboardNavigater />
        <div>
            <Outlet />
        </div>
    </ProtectedRoute>
  )
}
