'use client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppLayout } from './components/app-layout'
import { Home } from './components/home'
import { SeteoPuesto } from './components/seteoPuesto'
import { Forms } from './components/forms'

export default function AppComponent() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seteoPuesto" element={<SeteoPuesto />} />
          <Route path="/ddjj/new" element={<Forms />} />
        </Routes>
      </AppLayout>
    </Router>
  )
}