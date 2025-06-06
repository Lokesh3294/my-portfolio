export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 text-center py-4 mt-auto border-t dark:border-gray-700">
      <p className="text-sm">&copy; {new Date().getFullYear()} Lokesh N. All rights reserved.</p>
    </footer>
  );
}