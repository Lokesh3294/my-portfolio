import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Lokesh N | Software Developer</title>
      </Head>
      <Header />
      <main className="px-4 sm:px-6 lg:px-8 py-8 max-w-4xl mx-auto flex-grow flex flex-col items-center text-center">
        <Image
          src="/profile.jpg"
          alt="Lokesh N"
          width={140}
          height={140}
          className="rounded-full shadow-md mb-4"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Hi, I&apos;m Lokesh 👋</h1>
        <p className="text-md sm:text-lg font-medium text-gray-700 mb-4">Associate Software Developer @ Unifytech</p>
        <p className="max-w-xl text-sm sm:text-base text-gray-600">
          I&apos;m a curious and creative software developer who loves building things with code. Outside of work, you&apos;ll find me diving into personal growth books, writing thoughts that sometimes make sense, and pushing myself at the gym (mostly pushing to get there 😅).
          <br /><br />
          I&apos;m fascinated by tech, mindfulness, finance, and turning coffee into code. If you&apos;re into clean code, deep conversations, or terrible puns — we&apos;ll get along just fine.
        </p>
      </main>
      <Footer />
    </div>
  );
}
