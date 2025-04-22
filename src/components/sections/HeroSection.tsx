
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden relative">
      {/* Background glow effect */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-chrome-blue/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-chrome-blue/10 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="subtle-heading mb-4">BROWSER ENHANCEMENT</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="bg-chrome-gradient bg-clip-text text-transparent">Chrome Experience</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              ChromeGlow supercharges your browser with powerful features, beautiful themes, and productivity tools that make your web experience smoother and more efficient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="glow-btn animate-pulse-glow">
                Add to Chrome — It's Free
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            <div className="mt-8 flex items-center space-x-2">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                <img src="https://i.pravatar.cc/40?img=2" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                <img src="https://i.pravatar.cc/40?img=3" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
              </div>
              <span className="text-sm text-gray-500">
                <span className="font-medium">50,000+</span> users trust ChromeGlow
              </span>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="chrome-card p-2 shadow-lg rounded-lg overflow-hidden animate-float relative">
              <div className="bg-chrome-gray rounded-md">
                <div className="flex items-center gap-1 p-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="h-6 w-72 rounded-md bg-white/80 border border-gray-200 ml-2 px-2 py-1 text-xs text-gray-500 flex items-center">
                    chromeglow.extension.com
                  </div>
                </div>
                <div className="h-64 bg-white p-2 rounded-b-md">
                  <div className="h-full w-full bg-chrome-gradient rounded opacity-80 flex items-center justify-center">
                    <div className="text-white font-bold text-xl">ChromeGlow Dashboard</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-chrome-blue rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-chrome-yellow rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
