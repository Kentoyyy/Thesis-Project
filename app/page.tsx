import React from 'react'
import Navbar from './components/navbar';

export default function page() {
  return (
    <>
    <Navbar />
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome to Next.js!</h1>
      <p>This is the homepage.</p>
    </div>
  </>
  )
}
