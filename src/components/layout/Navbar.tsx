
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#7DE2D1]/30 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/50e3f6b2-2f64-4ad5-bc3a-533a3e992165.png" 
            alt="AlumniConnectAI Logo" 
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-[#7DE2D1] via-[#8B5CF6] to-[#FF9F9F] bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] whitespace-nowrap">
            AlumniConnectAI
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-[#8B5CF6] hover:text-[#7DE2D1] font-medium transition-colors">
            How It Works
          </a>
        </nav>
        
        <a href="https://github.com/Abdullah3245/AlumniConnectAI/tree/main" target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#7DE2D1] hover:bg-[#8B5CF6] text-white transition-all duration-300">
            Install on Chrome
          </Button>
      </a>
      </div>
    </header>
  );
};

export default Navbar;
