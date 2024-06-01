import React from 'react'
// import { Button } from '@/components/ui/button'
import { Button } from "../../components/ui/button";
import Link  from 'next/link'

function Hero() {
  return (
    <section className="relative flex justify-between h-screen p-10 ">
      <div className="max-w-xl text-white mt-12 p-4">
        <h1 className="text-2xl sm:text-6xl font-bold mb-4">Uphold truth for justice With <span className='text-yellow-500'>Northman </span>Law Firm</h1>
        <p className="mb-6">
          This is a paragraph providing additional information about the hero section.
          It supports the heading and can be used to give more context or details.
        </p>
        <Link href={''}>
      <Button className='bg-yellow-500 hover:bg-yellow-500'>Book A Demo</Button>
       </Link>
      </div>
      <div className="hidden md:block">
        <img src="./hero.png" alt="Hero" className="w-110 h-auto" />
      </div>
    </section>
  )
}

export default Hero
