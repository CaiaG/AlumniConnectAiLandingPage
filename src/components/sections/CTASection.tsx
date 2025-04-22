
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-chrome-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Enhance Your Chrome Experience?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join thousands of satisfied users who have transformed their browsing with ChromeGlow. 
              It only takes a second to install, and you'll notice the difference immediately.
            </p>
            
            <ul className="space-y-3 mb-8">
              {["One-click installation", "Free to use", "Regular updates", "Privacy focused"].map((item, index) => (
                <li key={index} className="flex items-center text-white">
                  <Check className="w-5 h-5 mr-2 text-white" />
                  {item}
                </li>
              ))}
            </ul>
            
            <Button size="lg" className="bg-white text-chrome-blue hover:bg-white/90 transition-all hover:shadow-lg">
              Add to Chrome — It's Free
            </Button>
          </div>
          
          <div className="relative">
            <div className="chrome-card glass-card p-6 bg-white/20">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-white text-xl mb-1">ChromeGlow</h3>
                  <p className="text-white/70 text-sm">Browser Enhancement Suite</p>
                </div>
                <div className="bg-white/20 p-2 rounded-full">
                  <div className="w-10 h-10 bg-white/90 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                {["⭐⭐⭐⭐⭐ 4.9/5 rating", "50,000+ active users", "Weekly updates", "24/7 support"].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white">{stat}</span>
                    <Check className="w-5 h-5 text-green-300" />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="text-white/70 text-sm mb-1">Current version</div>
                <div className="text-white font-medium">v2.4.0 (Updated 2 days ago)</div>
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
