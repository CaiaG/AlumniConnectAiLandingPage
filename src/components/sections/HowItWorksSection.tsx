import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Install AlumniConnectAI",
    description: "Add the extension to Chrome in seconds. No sign-up or complex setup needed.",
    image: "extension"
  },
  {
    number: "02",
    title: "Browse Penn Directory",
    description: "Navigate to the Penn Alumni Directory and let the tool collect relevant alumni information for you.",
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
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-custom-purple/5 via-custom-sage/20 to-custom-mint/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-custom-mint font-semibold mb-4">HOW IT WORKS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-custom-deepPurple">
            Connect With Alumni in 3 Steps
          </h2>
          <p className="text-custom-deepPurple/70 max-w-3xl mx-auto">
            AlumniConnectAI simplifies outreach: install, scrape, and connect with just a few clicks.
          </p>
        </div>
        
        <div className="relative mt-20">
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-custom-sage hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="chrome-card p-6 h-full">
                  <div className="inline-block rounded-full bg-custom-mint/10 text-custom-mint font-bold px-3 py-1 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-custom-deepPurple">{step.title}</h3>
                  <p className="text-custom-deepPurple/70">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-24 right-0 transform translate-x-1/2 bg-white rounded-full p-2 z-10">
                      <ArrowRight className="w-5 h-5 text-custom-mint" />
                    </div>
                  )}
                </div>
                
                <div className="mt-6 bg-custom-sage/10 rounded-lg p-4 h-40 flex items-center justify-center">
                  <div className="bg-gradient-to-br from-custom-mint to-custom-purple w-16 h-16 rounded-full flex items-center justify-center opacity-90">
                    <span className="text-white font-bold">{step.image}</span>
                  </div>
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
