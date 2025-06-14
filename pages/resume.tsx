import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Briefcase, GraduationCap, Wrench, Award } from 'lucide-react';

export default function Resume() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-8 max-w-4xl mx-auto flex-grow">
        <h1 className="text-4xl font-bold mb-6 text-center">My Resume</h1>

        <section className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="text-blue-600" />
            <h2 className="text-2xl font-semibold">Experience</h2>
          </div>
          <div className="border-l-4 border-blue-600 pl-4 ml-1">
            <p className="font-bold">Associate Software Developer @ Unifytech</p>
            <p className="text-sm dark:text-gray-400 mb-4">June 2025 – Present</p>

            <p className="font-bold">Full Stack Web Developer Intern @ Awetecks</p>
            <p className="text-sm dark:text-gray-400">May 2024 – July 2024</p>
            <ul className="list-disc pl-5 dark:text-gray-400">
              <li>Frontend: React.js, TailwindCSS</li>
              <li>Backend: Node.js, Express.js, PHP</li>
              <li>Databases: MySQL, MongoDB</li>
              <li>Tools: Git, GitHub, Postman, Docker</li>
              <li>Reduced deployment time by 20%</li>
            </ul>
          </div>
        </section>

        <hr className="my-10 border-gray-300" />

        <section className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="text-green-600" />
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>
          <div className="pl-4 ml-1 dark:text-gray-400">
            <p className="font-bold">B.Tech in AI & ML, Andhra Engineering College</p>
            <p className="text-sm mb-2">CGPA: 7.5</p>
            <p className="font-bold">XII (State Board), C.S.I Kellet Hr. Sec. School, Chennai</p>
          </div>
        </section>

        <hr className="my-10 border-gray-300" />

        <section className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Wrench className="text-purple-600" />
            <h2 className="text-2xl font-semibold">Skills</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 pl-4 ml-1 dark:text-gray-400">
            <div>
              <p className="font-medium">Languages:</p>
              <p>JavaScript, Python, PHP, HTML, CSS</p>
            </div>
            <div>
              <p className="font-medium">Frameworks:</p>
              <p>React.js, Node.js, Express.js, TailwindCSS, Bootstrap</p>
            </div>
            <div>
              <p className="font-medium">Databases:</p>
              <p>MongoDB, MySQL</p>
            </div>
            <div>
              <p className="font-medium">Tools:</p>
              <p>Docker, Git, GitHub</p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-gray-300" />

        <section className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Award className="text-yellow-600" />
            <h2 className="text-2xl font-semibold">Certifications</h2>
          </div>
          <ul className="list-disc pl-6 dark:text-gray-400">
            <li>Generative AI by Microsoft and LinkedIn</li>
            <li>Introduction to Cloud Essentials by Oracle</li>
            <li>Cloud Security Essentials by AWS</li>
            <li>Product Management by Simplilearn</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
