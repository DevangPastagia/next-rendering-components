import NavLinks from "./nav-links";
import NavSearch from "./nav-search";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">MyApp</div>
        <div className="flex items-center space-x-4">
          <NavLinks />
          <NavSearch />
        </div>
      </div>
    </nav>
  );
}
