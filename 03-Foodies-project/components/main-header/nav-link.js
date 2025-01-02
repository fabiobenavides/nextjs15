"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import classes from './nav-link.module.css';

export default function NavLink({ href, children }) {

    const currentPathName = usePathname();

  return (
    <>
        {/* startsWith for nested pages */} 
        <Link href={href} 
            className={currentPathName.startsWith(href) ? classes.active : undefined}
            > {children}
        </Link>
    </>
  )
}
