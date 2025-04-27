
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 overflow-hidden relative">
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Smarter Alumni Outreach with <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-green-400 bg-clip-text text-transparent">AlumniConnectAI</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              A Chrome extension that helps Penn students collect alumni data and generate personalized AI prompts for outreach messages.
            </p>
            <Button size="lg" className="glow-btn">
              Install Extension
            </Button>
          </div>
          
          <div className="relative">
            <div className="chrome-card p-2 shadow-lg rounded-lg overflow-hidden">
              <div className="bg-gray-100 rounded-md">
                <div className="flex items-center gap-1 p-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="h-48 bg-white p-2 rounded-b-md">
                  <div className="h-full w-full bg-gradient-to-br from-blue-400 to-green-300 rounded opacity-80 flex items-center justify-center">
                    <div className="text-white font-bold text-xl">Penn Alumni Directory Integration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
