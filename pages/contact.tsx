// --- pages/contact.tsx ---

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="px-4 sm:px-6 lg:px-8 py-8 max-w-2xl mx-auto flex-grow">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-10">
          Whether you want to discuss a project, collaborate on an idea, or just say hello — feel free to reach out!
        </p>
        <div className="space-y-4">
          <a
            href="mailto:llokesh26204@gmail.com"
            className="flex items-center gap-3 p-4 border rounded-md hover:bg-gray-50 transition"
          >
            <Mail className="text-blue-600" />
            <span className="text-gray-800">llokesh26204@gmail.com</span>
          </a>
          <a
            href="https://github.com/Lokesh3294"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border rounded-md hover:bg-gray-50 transition"
          >
            <Github className="text-gray-800 dark:text-gray-300"/>
            <span className="text-gray-800">@Lokesh3294</span>
          </a>
          <a
            href="https://www.linkedin.com/in/lokesh-naidu001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border rounded-md hover:bg-gray-50 transition"
          >
            <Linkedin className="text-blue-700" />
            <span className="text-gray-800">lokesh-naidu001</span>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
