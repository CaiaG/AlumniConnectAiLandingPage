
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Install ChromeGlow",
    description: "Add the extension to Chrome with just one click. No signup or complicated configuration required.",
    image: "browser-extension"
  },
  {
    number: "02",
    title: "Customize Your Settings",
    description: "Select your preferred features, themes, and configurations to personalize your experience.",
    image: "settings"
  },
  {
    number: "03",
    title: "Enjoy Enhanced Browsing",
    description: "Immediately benefit from all the powerful features and optimizations automatically.",
    image: "enjoy"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="subtle-heading mb-4">SIMPLE SETUP</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Started In Seconds
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            ChromeGlow is designed to be intuitive and easy to use. Follow these simple steps to transform your browsing experience.
          </p>
        </div>
        
        <div className="relative mt-20">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gray-200 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="chrome-card p-6 h-full">
                  <div className="inline-block rounded-full bg-chrome-blue/10 text-chrome-blue font-bold px-3 py-1 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-24 right-0 transform translate-x-1/2 bg-white rounded-full p-2 z-10">
                      <ArrowRight className="w-5 h-5 text-chrome-blue" />
                    </div>
                  )}
                </div>
                
                <div className="mt-6 bg-chrome-gray rounded-lg p-4 h-40 flex items-center justify-center shadow-sm">
                  <div className="bg-chrome-gradient w-16 h-16 rounded-full flex items-center justify-center opacity-80">
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
