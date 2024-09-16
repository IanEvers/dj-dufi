'use client'

import { DDJJLayout } from './ddjjLayout'
import { MainContent } from './main-content'

export function Settings() {
  return (
    <DDJJLayout>
      <MainContent>
        <h1 className="text-2xl font-bold mb-4">Settings Page</h1>
        <p>This is where you would manage application settings.</p>
      </MainContent>
    </DDJJLayout>
  )
}