import React from 'react'
import NavLink from './nav-link'

export default function MainHeader() {
  return (
    <header >
        <nav >
            <ul>
                <li>
                    <NavLink href="/">Home</NavLink>
                </li>
                <li>
                    <NavLink href="/news">News</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
