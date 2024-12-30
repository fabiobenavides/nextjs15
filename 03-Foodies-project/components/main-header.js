import Link from 'next/link'
import React from 'react'
import logoImg from '@/assets/logo.png'

export default function MainHeader() {
  return (
    <header>
        <Link href="/">
            <img src={logoImg.src} alt="A plate with food on it"/>{' '}
            NextLevel Food
        </Link>
        <nav>
            <ul>
                <li>
                    <Link href="/meals">Browse meals</Link>
                </li>
                <li>
                    <Link href="/community">Foodies community</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
