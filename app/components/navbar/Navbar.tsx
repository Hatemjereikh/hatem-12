import Link from "next/link";
import Logo from "./Logo";
import SearchFilters from "./SearchFilters";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          
          <div className="flex space-x-6">
            <SearchFilters />
          </div>

          <div className="flex items-center space-x-6">
            AddPropertyButton
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
