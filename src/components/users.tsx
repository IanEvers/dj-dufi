'use client'

import { Layout } from './layout'
import { MainContent } from './main-content'

export function Users() {
  return (
    <Layout>
      <MainContent>
        <h1 className="text-2xl font-bold mb-4">Users Page</h1>
        <p>This is where you would manage users.</p>
      </MainContent>
    </Layout>
  )
}