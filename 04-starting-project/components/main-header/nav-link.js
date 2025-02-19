"use client"
// Client components should be as small as possible

import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }) {

  const currentPath = usePathname();

  return (
    <>
        {/* startsWith for nested pages */} 
        <Link href={href} className={currentPath.startsWith(href) ? 'active' : undefined}> {children}
        </Link>
    </>
  )
}
