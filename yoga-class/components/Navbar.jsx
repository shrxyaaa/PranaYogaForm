import React from 'react'
import Link from 'next/link'
export const Navbar = () => {
  return (

    <div className="font-bold   fixed w-full pl-8 pr-16 py-6 flow-root">
        <Link href="/">
        <p className=" float-left font-tangerine text-6xl">Pranayam</p>
        </Link>
        <Link href="/about">
        <p className="hover:font-bold hover:text-lg  float-right font-sans  ">About Us</p>
        </Link>
    </div>
  )
}
