'use client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppLayout } from './components/app-layout'
import { Home } from './components/home'
import { Users } from './components/users'
import { Settings } from './components/settings'
import { Forms } from './components/forms'

export default function AppComponent() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </AppLayout>
    </Router>
  )
}