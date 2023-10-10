import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import next from 'next'
import AuthProviders from './AuthProviders'

export default function NavBar() {

    const session = null

  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href="/">
                <Image
                    src="logo.svg"
                    width={116}
                    height={43}
                    alt='logo'/>
            </Link>
            <ul className='xl:flex hidden text-small gap-7'>
                {NavLinks.map((link)=>(
                    <Link href={link.href} key={link.text}>
                        {link.text}
                    </Link>
                ))}
            </ul>
            <div className='flexCenter gap-4'>
                {session? (
                    <>
                        Image Pic
                    </>
                ) : (<AuthProviders></AuthProviders>)}
            </div>
        </div>


    </nav>
  )
}
