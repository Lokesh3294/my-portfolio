import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow">
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <span className="font-bold text-lg">Lokesh N</span>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
