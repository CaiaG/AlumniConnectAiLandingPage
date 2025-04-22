
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-400 to-green-400 bg-clip-text text-transparent">
              AlumniConnectAI
            </span>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 font-medium">
            How It Works
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600 font-medium">
            Testimonials
          </a>
          <a href="#faq" className="text-gray-600 hover:text-blue-600 font-medium">
            FAQ
          </a>
        </nav>
        
        {/* CTA Button */}
        <Button className="glow-btn">
          Install on Chrome
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
