import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import { title } from 'process';

const projects = [
  {
    title: 'Dynamic Blog Website (MERN Stack)',
    description: 'A dynamic blog platform where users can create, edit, and delete blog posts. Features real-time updates and optimized performance.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
  {
    title: 'Amazon UI Clone',
    description: 'A pixel-perfect responsive clone of the Amazon website using HTML, CSS, and Bootstrap. Fast loading times and clean UI.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Matrimony website',
     description:
      "A static UI design for a matrimony web application, developed using Next.js and Material UI. Focused on layout structure, form elements, and visual components without responsive behavior.",
    tech: ["Next.js", "Material UI"],
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="px-4 sm:px-6 lg:px-8 py-8 max-w-4xl mx-auto flex-grow">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 cursor-pointer">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
