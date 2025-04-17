import Link from 'next/link'
import React from 'react'

export default function Forbidden() {
  return (
    <div>
        <h2>Forbidden</h2>
        <p>You are not authorized to access this resource.</p>
        <Link href="/">Return Home</Link>
    </div>
  )
}
