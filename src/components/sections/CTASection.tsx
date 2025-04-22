
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-400 to-green-200 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Alumni Outreach?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Install AlumniConnectAI and move from spreadsheets to seamless, personalized connections—right in your browser.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Automated scraping & sending",
                "Free for individuals",
                "No registration required",
                "Built by alumni professionals"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-white">
                  <Check className="w-5 h-5 mr-2 text-white" />
                  {item}
                </li>
              ))}
            </ul>
            
            <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 transition-all hover:shadow-lg">
              Get AlumniConnectAI for Chrome
            </Button>
          </div>
          
          <div className="relative">
            <div className="chrome-card glass-card p-6 bg-white/20">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-white text-xl mb-1">AlumniConnectAI</h3>
                  <p className="text-white/70 text-sm">Chrome Alumni Outreach Extension</p>
                </div>
                <div className="bg-white/20 p-2 rounded-full">
                  <div className="w-10 h-10 bg-white/90 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                {["Used by alumni offices worldwide", "Personalized communication", "Reliable automation", "Built for Chrome"].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white">{stat}</span>
                    <Check className="w-5 h-5 text-green-300" />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="text-white/70 text-sm mb-1">Current version</div>
                <div className="text-white font-medium">v1.0.0 (First Release)</div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
