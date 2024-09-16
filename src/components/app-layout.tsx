'use client'

import { Link, useLocation } from 'react-router-dom'
import { Home, Users, Settings, FileText } from 'lucide-react'
import { cn } from "@/lib/utils"

const navItems = [
  { to: '/', label: 'Mis DDJJ', icon: Home },
  { to: '/seteoPuesto', label: 'Seteo Puesto', icon: Users },
  { to: '/ddjj/new', label: 'Nueva DDJJ', icon: FileText },
]

export function AppLayout({ children }) {
  const location = useLocation()

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors",
                    location.pathname === item.to && "bg-gray-100 font-semibold"
                  )}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}