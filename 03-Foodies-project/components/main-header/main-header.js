import Link from 'next/link'
import logoImg from '@/assets/logo.png'
import classess from './main-header.module.css'
import Image from 'next/image'
import MainHeaderBackground from './main-header-background'

export default function MainHeader() {
  return (
    <>
        <MainHeaderBackground />
        <header className={classess.header}>
            <Link className={classess.logo} href="/">
                <Image src={logoImg} alt="A plate with food on it" priority />
                NextLevel Food
            </Link>
            <nav className={classess.nav}>
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
    </>
  )
}
