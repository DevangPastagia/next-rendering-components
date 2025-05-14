export default function NavLinks() {
  return (
    <div className="flex items-center space-x-4">
      <a href="/" className="text-gray-800 hover:text-blue-500">
        Home
      </a>
      <a href="/about" className="text-gray-800 hover:text-blue-500">
        About
      </a>
      <a href="/contact" className="text-gray-800 hover:text-blue-500">
        Contact
      </a>
    </div>
  );
}
