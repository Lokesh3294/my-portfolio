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
          src="/moon.jpg"
          alt="Lokesh N"
          width={100}
          height={100}
          className="rounded-full h-40 w-40 shadow-md mb-6"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Hi, I'm Lokesh 👋</h1>
        <p className="text-md sm:text-lg font-medium text-gray-700 mb-4">Associate Software Developer @ Unifytech</p>
        <p className="max-w-xl text-sm sm:text-base text-gray-600">
          I'm a curious and creative software developer who loves building things with code. Outside of work, you'll find me diving into personal growth books, writing thoughts that sometimes make sense, and pushing myself at the gym (mostly pushing to get there 😅).
          <br /><br />
          I'm fascinated by tech, mindfulness, finance, and turning coffee into code. If you're into clean code, deep conversations, or terrible puns — we’ll get along just fine.
        </p>
      </main>
      <Footer />
    </div>
  );
}