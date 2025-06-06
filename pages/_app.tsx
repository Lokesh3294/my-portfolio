// --- pages/_app.tsx ---

import Head from 'next/head';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lokesh N | Software Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Lokesh N's personal developer portfolio showcasing projects, skills, and experience." />
        <meta name="keywords" content="Lokesh, software developer, portfolio, web developer, react, nextjs, projects" />
        <meta name="author" content="Lokesh N" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Lokesh N | Portfolio" />
        <meta property="og:description" content="Personal website of Lokesh N – software developer." />
        <meta property="og:url" content="https://lokesh.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
