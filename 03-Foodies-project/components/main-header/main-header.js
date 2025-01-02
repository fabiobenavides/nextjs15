"use client"

import Link from 'next/link'
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from 'next/image'
import MainHeaderBackground from './main-header-background'
import { usePathname } from 'next/navigation'

export default function MainHeader() {

    const currentPathName = usePathname();

  return (
    <>
        <MainHeaderBackground />
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="A plate with food on it" priority />
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        {/* startsWith for nested pages */} 
                        <Link href="/meals" className={currentPathName.startsWith('/meals') ? classes.active : undefined}>Browse meals</Link>
                    </li>
                    <li>
                        <Link href="/community" className={currentPathName === '/community' ? classes.active : undefined}>Foodies community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}
