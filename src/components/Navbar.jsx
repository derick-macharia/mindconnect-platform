import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background z-50 relative shadow-md px-6 py-4 flex justify-between items-center px-8 py-4 z-50 border-b">
      <Link to="/" className="flex items-center">
        <img src="/images/logo.png" alt="MindConnect Logo" className="h-10 mr-2" />
        <span className="text-2xl font-bold text-foreground font-nunito">MindConnect</span>
      </Link>

      <button className="md:hidden text-teal text-2xl" onClick={toggleMenu}>
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      <ul className={`${
        isMenuOpen ? "flex" : "hidden"
      } md:flex list-none gap-4 font-bold absolute md:relative top-16 md:top-0 right-8 md:right-0 bg-background md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none shadow-lg md:shadow-none flex-col md:flex-row`}>
        <li><Link to="/" className="text-foreground hover:text-teal px-3 py-2 rounded">Home</Link></li>
        <li><Link to="#" className="text-foreground hover:text-teal px-3 py-2 rounded">About</Link></li>
        <li><Link to="#" className="text-foreground hover:text-teal px-3 py-2 rounded">Nuggets</Link></li>
        <li><Link to="#" className="text-foreground hover:text-teal px-3 py-2 rounded">Journal</Link></li>
        <li><Link to="#" className="text-foreground hover:text-teal px-3 py-2 rounded">Events</Link></li>
        <li>
          <Button variant="outline" className="border-teal text-teal hover:bg-teal hover:text-white mr-2">Login</Button>
        </li>
        <li>
          <Button className="bg-teal hover:bg-teal-dark text-white">Sign Up</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;