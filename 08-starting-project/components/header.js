import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header id="main-header">
      <Link href="/">
        <Image 
          src={logo} 
          sizes='10vm' //Best way to handle size, but manual width and heigh could be used as well
          priority //if you are sure that the image is visible (in this case cause is in the header), this will remove the "lazy" loading that is by default
          alt='Mobile phone with posts feed on it' />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/feed">Feed</Link>
          </li>
          <li>
            <Link className='cta-link' href="/new-post">New Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
