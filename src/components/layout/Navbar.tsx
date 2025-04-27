
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-custom-mint/20 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-custom-mint via-custom-purple to-custom-pink bg-clip-text text-transparent">
              AlumniConnectAI
            </span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-custom-deepPurple hover:text-custom-purple font-medium">
            Features
          </a>
          <a href="#how-it-works" className="text-custom-deepPurple hover:text-custom-purple font-medium">
            How It Works
          </a>
        </nav>
        
        <Button className="bg-custom-mint hover:bg-custom-sage text-custom-deepPurple transition-all">
          Install on Chrome
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
