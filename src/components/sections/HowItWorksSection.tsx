
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Install AlumniConnectAI",
    description: "Add the extension to Chrome.",
    image: "extension"
  },
  {
    number: "02",
    title: "Browse Penn Directory",
    description: "Navigate to the Penn Alumni Directory.",
    image: "scrape"
  },
  {
    number: "03",
    title: "Generate & Customize",
    description: "Generate AI prompts based on alumni profiles and customize your outreach message using your preferred AI tool.",
    image: "send"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-custom-mint/50 via-custom-sage/40 to-custom-purple/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-custom-purple font-semibold mb-4 bg-white/50 inline-block px-4 py-1 rounded-full">HOW IT WORKS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-custom-deepPurple">
            Connect With Alumni in <span className="text-custom-purple">3 Steps</span>
          </h2>
          <p className="text-custom-deepPurple/90 max-w-3xl mx-auto text-lg bg-white/30 p-4 rounded-lg backdrop-blur-sm">
            AlumniConnectAI simplifies outreach: install, scrape, and connect with just a few clicks.
          </p>
        </div>
        
        <div className="relative mt-20">
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-custom-mint via-custom-purple to-custom-pink hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="chrome-card p-6 h-full bg-white/70 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 border border-white/40">
                  <div className="inline-block rounded-full bg-gradient-to-r from-custom-mint to-custom-purple p-[2px] mb-4 group-hover:scale-110 transition-transform">
                    <div className="bg-white rounded-full px-3 py-1">
                      <span className="bg-gradient-to-r from-custom-mint to-custom-purple bg-clip-text text-transparent font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-custom-deepPurple">{step.title}</h3>
                  <p className="text-custom-deepPurple/70">{step.description}</p>
                </div>
                
            
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
