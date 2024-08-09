"use client";

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className='flex m-10 gap-10'>
        <Link href='/middlewareside'>
        <li>Header</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar