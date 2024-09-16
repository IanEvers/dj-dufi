'use client'

import { useState } from 'react'

import { MainContent } from './main-content'
import { Sidebar } from './sidebar'
import { NestedSidebar } from './nested-sidebar'
import { AddressForm } from './address-form'
import { Home, Users, Settings } from 'lucide-react'

export function Forms() {
  const [activeMainItem, setActiveMainItem] = useState(null)
  const [activeNestedItem, setActiveNestedItem] = useState(null)

  const mainItems = [
    { id: 'DatosPersonales', label: 'Datos personales y filiatorios', icon: <Home className="w-5 h-5 mr-2" />, complete: false },
    { id: 'users', label: 'Situaciones Judiciales / Administrativas', icon: <Users className="w-5 h-5 mr-2" />, complete: false },
    { id: 'settings', label: 'Formacion Profesional', icon: <Settings className="w-5 h-5 mr-2" />, complete: false },
    { id: 'settings', label: 'Futuro inmediato', icon: <Settings className="w-5 h-5 mr-2" />, complete: false },
  ]

  const nestedItems = {
    DatosPersonales: [
      { id: 'contacto', label: 'Contacto', complete: false },
      { id: 'domicilio', label: 'Domicilio', complete: false },
      { id: 'vivienda', label: 'Vivienda', complete: false },
      { id: 'familia', label: 'Familia', complete: false },
    ],
    
  }

  return (
    <div className='p-2'>
      <Sidebar items={mainItems} onItemClick={setActiveMainItem} activeItem={activeMainItem} />
      <hr />
      <MainContent>
        {activeMainItem && (
          <NestedSidebar
          items={nestedItems[activeMainItem]}
          onItemClick={setActiveNestedItem}
          activeItem={activeNestedItem}
          />
        )}
        {activeNestedItem == 'domicilio' && <AddressForm />}
      </MainContent>
    </div>
  )
}