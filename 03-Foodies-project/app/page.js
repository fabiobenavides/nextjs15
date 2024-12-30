import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href="/meals">Link to meals page</Link></p>
      <p><Link href="/meals/share">Link to share meals page</Link></p>
      <p><Link href="/community">Link to community page</Link></p>
    </main>
  );
}
