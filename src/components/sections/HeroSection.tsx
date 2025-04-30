
import { Button } from "@/components/ui/button";
import { Sparkles, Chrome } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 overflow-hidden relative">
      {/* Background blobs with better positioning */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-custom-pink/40 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 left-20 w-72 h-72 bg-custom-purple/40 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute top-60 left-1/4 w-48 h-48 bg-custom-mint/50 rounded-full filter blur-3xl animate-pulse delay-150"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Smarter Alumni Outreach with <span className="bg-white text-[#8B5CF6] px-3 py-1 rounded-lg shadow-lg inline-block mt-2">AlumniConnectAI</span>
            </h1>
            <p className="text-xl text-white mb-8 bg-black/30 p-4 rounded-lg backdrop-blur-sm font-medium">
              A Chrome extension that helps Penn students collect alumni data and generate personalized AI prompts for outreach messages.
            </p>

            <a href="https://github.com/Abdullah3245/AlumniConnectAI/tree/main" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-custom-mint hover:bg-custom-sage text-custom-deepPurple transition-all group relative overflow-hidden px-8 py-6">
                <span className="relative z-10 flex items-center gap-2 text-lg">
                  Install Extension
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-custom-mint via-custom-purple to-custom-pink opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </Button>
            </a>         
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            {/* Chrome Extension UI - Enhanced Version */}
            <div className="chrome-extension-card max-w-md mx-auto shadow-xl transform hover:scale-[1.02] transition-all duration-300">
              {/* Chrome Extension Header */}
              <div className="bg-[#F1F3F4] rounded-t-lg p-2 flex items-center justify-between border-b border-gray-300">
                <div className="flex items-center gap-2">
                  <Chrome className="w-5 h-5 text-chrome-blue" />
                  <span className="font-medium text-sm text-gray-700">AlumniConnectAI</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              
              {/* Chrome Extension Body */}
              <div className="bg-white p-6 rounded-b-lg shadow-inner">
                {/* Extension Logo Section */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-custom-purple to-custom-pink rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-white text-2xl font-bold">AC</div>
                  </div>
                </div>
                
                {/* Extension Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 bg-[#F5F7F9] rounded-md p-3 border border-gray-100">
                    <div className="w-4 h-4 bg-custom-purple rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">Penn Alumni Directory</span>
                  </div>
                  
                  <div className="h-28 bg-gradient-to-br from-custom-mint/90 to-custom-purple/90 rounded-md flex items-center justify-center p-3 shadow-md">
                    <div className="text-white font-bold text-center leading-tight">
                      <div className="mb-1">Profile Analysis</div>
                      <div className="text-xs opacity-90">John Smith - Software Engineer at Google</div>
                      <div className="mt-2 text-xs bg-white/20 py-1 px-2 rounded-full inline-block">87% Match</div>
                    </div>
                  </div>
                  
                  {/* Removed the Career Path and Network Stats buttons grid */}
                  
                  <div className="flex justify-end mt-3">
                    <div className="h-9 px-4 bg-custom-mint rounded-md flex items-center justify-center shadow-sm hover:shadow-md transition-all">
                      <span className="text-xs font-medium text-custom-deepPurple">Generate Message</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-custom-pink/30 rounded-full animate-pulse hidden lg:block"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-custom-mint/30 rounded-full animate-pulse delay-150 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
