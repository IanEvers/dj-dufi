'use client'

import { useState } from 'react'

import { MainContent } from './main-content'
import { Sidebar } from './sidebar'
import { NestedSidebar } from './nested-sidebar'
import { AddressForm } from './formularios/datosPersonales/domicilio'
import Contacto from './formularios/datosPersonales/contacto'
import Familia from './formularios/datosPersonales/familia'
import Vivienda from './formularios/datosPersonales/vivienda'
import Academica from './formularios/formacionProfesional/academica'
import Idioma from './formularios/formacionProfesional/idioma'
import Militar from './formularios/formacionProfesional/militar'
import Actual from './formularios/futuroInmediato/actual'
import Futuro from './formularios/futuroInmediato/futuro'
import SituactionesJudiciales from './formularios/situaciones-judiciales'
import { Home, CircleArrowRight, Scale, GraduationCap } from 'lucide-react'

export function Forms() {
  const [activeMainItem, setActiveMainItem] = useState(null)
  const [activeNestedItem, setActiveNestedItem] = useState(null)

  const mainItems = [
    { id: 'DatosPersonales', label: 'Datos personales y filiatorios', icon: <Home className="w-5 h-5 mr-2" />, complete: false, hasNested: true },
    { id: 'SituacionesJudiciales', label: 'Situaciones Judiciales / Administrativas', icon: <Scale className="w-5 h-5 mr-2" />, complete: false },
    { id: 'FormacionProfesional', label: 'Formacion Profesional', icon: <GraduationCap className="w-5 h-5 mr-2" />, complete: false, hasNested: true },
    { id: 'FuturoInmediato', label: 'Futuro inmediato', icon: <CircleArrowRight className="w-5 h-5 mr-2" />, complete: false, hasNested: true },
  ]

  const nestedItems = {
    DatosPersonales: [
      { id: 'contacto', label: 'Contacto', complete: false },
      { id: 'domicilio', label: 'Domicilio', complete: false },
      { id: 'vivienda', label: 'Vivienda', complete: false },
      { id: 'familia', label: 'Familia', complete: false },
    ],
    FormacionProfesional: [
      { id: 'academica', label: 'Acádemica', complete: false },
      { id: 'militar', label: 'Militar', complete: false },
      { id: 'idioma', label: 'Idioma', complete: false },
    ],
    FuturoInmediato: [
      { id: 'actual', label: 'Actual', complete: false },
      { id: 'futuro', label: 'Futuro', complete: false },
    ]

  }

  function changeMainItem(id: any) {
    setActiveMainItem(id)
    setActiveNestedItem(null)
  }

  function getItem(id: string) {
    return mainItems.find(item => item.id == id)
  }

  function getFormById(id: string) {
    switch (id) {
      case 'domicilio': 
      return <AddressForm />
      case 'SituacionesJudiciales': 
      return <SituactionesJudiciales />
      case 'contacto':
      return <Contacto />
      case 'familia':
      return <Familia />
      case 'vivienda':
      return <Vivienda />
      case 'academica':
      return <Academica />
      case 'idioma':
      return <Idioma />
      case 'militar':
      return <Militar />
      case 'actual':
      return <Actual />
      case 'futuro':
      return <Futuro />
    }
  }

  return (
    <div className='p-2'>
      <Sidebar items={mainItems} onItemClick={changeMainItem} activeItem={activeMainItem} />
      <hr />
      <MainContent>
        {activeMainItem && getItem(activeMainItem)?.hasNested && (
          <NestedSidebar
          items={nestedItems[activeMainItem]}
          onItemClick={setActiveNestedItem}
          activeItem={activeNestedItem}
          />
        )}
        {activeMainItem && getItem(activeMainItem)?.hasNested && activeNestedItem && (
          getFormById(activeNestedItem)
        )}
        {activeMainItem && !(getItem(activeMainItem)?.hasNested) && (
          getFormById(activeMainItem)
        )}
      </MainContent>
    </div>
  )
}