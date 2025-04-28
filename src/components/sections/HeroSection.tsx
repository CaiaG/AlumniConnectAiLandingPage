
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

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
            <Button size="lg" className="bg-custom-mint hover:bg-custom-sage text-custom-deepPurple transition-all group relative overflow-hidden px-8 py-6">
              <span className="relative z-10 flex items-center gap-2 text-lg">
                Install Extension
                <Sparkles className="w-5 h-5 animate-pulse" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-custom-mint via-custom-purple to-custom-pink opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </Button>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="chrome-card p-4 shadow-lg rounded-lg overflow-hidden bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border border-white/40 max-w-md mx-auto">
              <div className="bg-gradient-to-r from-custom-mint/20 to-custom-purple/20 rounded-md">
                <div className="flex items-center gap-2 p-2">
                  <div className="w-3 h-3 bg-custom-pink rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-custom-purple rounded-full animate-pulse delay-75"></div>
                  <div className="w-3 h-3 bg-custom-mint rounded-full animate-pulse delay-150"></div>
                </div>
                <div className="h-48 bg-white/80 p-3 rounded-b-md">
                  <div className="h-full w-full bg-gradient-to-br from-custom-mint to-custom-purple rounded opacity-90 flex items-center justify-center shadow-lg">
                    <div className="text-white font-bold text-2xl text-center px-4">Penn Alumni Directory Integration</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Adjusted positioning for decorative elements */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-custom-pink/30 rounded-full animate-pulse hidden lg:block"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-custom-mint/30 rounded-full animate-pulse delay-150 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
