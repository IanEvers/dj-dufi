'use client'

import { useState } from 'react'
import { Layout } from './layout'
import { MainContent } from './main-content'
import { Sidebar } from './sidebar'
import { NestedSidebar } from './nested-sidebar'
import { AddressForm } from './address-form'
import { Home, Users, Settings } from 'lucide-react'

export function Forms() {
  const [activeMainItem, setActiveMainItem] = useState(null)
  const [activeNestedItem, setActiveNestedItem] = useState(null)

  const mainItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5 mr-2" /> },
    { id: 'users', label: 'Users', icon: <Users className="w-5 h-5 mr-2" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5 mr-2" /> },
  ]

  const nestedItems = {
    home: [
      { id: 'dashboard', label: 'Dashboard' },
      { id: 'analytics', label: 'Analytics' },
    ],
    users: [
      { id: 'list', label: 'User List' },
      { id: 'roles', label: 'User Roles' },
    ],
    settings: [
      { id: 'general', label: 'General Settings' },
      { id: 'security', label: 'Security Settings' },
    ],
  }

  return (
    <Layout>
      <Sidebar items={mainItems} onItemClick={setActiveMainItem} activeItem={activeMainItem} />
      <MainContent>
        {activeMainItem && (
          <NestedSidebar
            items={nestedItems[activeMainItem]}
            onItemClick={setActiveNestedItem}
            activeItem={activeNestedItem}
          />
        )}
        {activeNestedItem && <AddressForm />}
      </MainContent>
    </Layout>
  )
}