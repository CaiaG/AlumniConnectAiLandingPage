
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden relative">
      {/* Background glow effect */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-200/20 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="subtle-heading mb-4">ALUMNI OUTREACH AUTOMATION</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Meet <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-green-400 bg-clip-text text-transparent">AlumniConnectAI</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              A Chrome extension that streamlines alumni networking by <b>automatically scraping alumni data</b> and sending <b>personalized emails</b>—all with one click. Boost your outreach, save hours, and track your results, effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="glow-btn animate-pulse-glow">
                Install on Chrome
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            <div className="mt-8 flex items-center space-x-2">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=10" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                <img src="https://i.pravatar.cc/40?img=13" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                <img src="https://i.pravatar.cc/40?img=22" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
              </div>
              <span className="text-sm text-gray-500">
                <span className="font-medium">Loved by dozens of career centers & alumni teams</span>
              </span>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="chrome-card p-2 shadow-lg rounded-lg overflow-hidden animate-float relative">
              <div className="bg-gray-100 rounded-md">
                <div className="flex items-center gap-1 p-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="h-6 w-72 rounded-md bg-white/80 border border-gray-200 ml-2 px-2 py-1 text-xs text-gray-500 flex items-center">
                    alumni-connect-ai.extension.com
                  </div>
                </div>
                <div className="h-64 bg-white p-2 rounded-b-md">
                  <div className="h-full w-full bg-gradient-to-br from-blue-400 to-green-300 rounded opacity-80 flex items-center justify-center">
                    <div className="text-white font-bold text-xl">Streamline Your Outreach</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-100 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
