import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-16 pb-12 overflow-hidden relative bg-custom-sage/20">
      <div className="absolute top-40 right-20 w-96 h-96 bg-custom-mint/20 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Smarter Alumni Outreach with <span className="bg-gradient-to-r from-custom-mint via-custom-purple to-custom-pink bg-clip-text text-transparent">AlumniConnectAI</span>
            </h1>
            <p className="text-lg text-custom-deepPurple/80 mb-8">
              A Chrome extension that helps Penn students collect alumni data and generate personalized AI prompts for outreach messages.
            </p>
            <Button size="lg" className="bg-custom-mint hover:bg-custom-sage text-custom-deepPurple transition-all">
              Install Extension
            </Button>
          </div>
          
          <div className="relative">
            <div className="chrome-card p-2 shadow-lg rounded-lg overflow-hidden">
              <div className="bg-custom-sage/10 rounded-md">
                <div className="flex items-center gap-1 p-1">
                  <div className="w-3 h-3 bg-custom-pink rounded-full"></div>
                  <div className="w-3 h-3 bg-custom-purple rounded-full"></div>
                  <div className="w-3 h-3 bg-custom-mint rounded-full"></div>
                </div>
                <div className="h-48 bg-white p-2 rounded-b-md">
                  <div className="h-full w-full bg-gradient-to-br from-custom-mint to-custom-purple rounded opacity-90 flex items-center justify-center">
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
