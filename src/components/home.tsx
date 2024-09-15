'use client'

import { Layout } from './layout'
import { MainContent } from './main-content'

export function Home() {
  return (
    <Layout>
      <MainContent>
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
        <p>This is the main content of the home page.</p>
      </MainContent>
    </Layout>
  )
}