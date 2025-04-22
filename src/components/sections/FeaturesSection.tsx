
import { CheckCircle, Zap, Shield, LineChart, RefreshCw, Palette } from "lucide-react";

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType 
}) => {
  return (
    <div className="feature-item chrome-card p-6 transition-all hover:translate-y-[-5px]">
      <div className="feature-icon">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Enhanced Productivity",
      description: "Smart tools that streamline your workflow and help you accomplish more in less time.",
      icon: Zap
    },
    {
      title: "Advanced Security",
      description: "Built-in protection against malicious sites and trackers to keep your browsing secure.",
      icon: Shield
    },
    {
      title: "Performance Insights",
      description: "Monitor and optimize your browser's performance with detailed analytics.",
      icon: LineChart
    },
    {
      title: "Auto-Refresh",
      description: "Set pages to refresh automatically at custom intervals to keep content updated.",
      icon: RefreshCw
    },
    {
      title: "Custom Themes",
      description: "Personalize your browsing experience with beautiful custom themes and layouts.",
      icon: Palette
    },
    {
      title: "Seamless Integration",
      description: "Works perfectly with your existing Chrome setup and favorite extensions.",
      icon: CheckCircle
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="subtle-heading mb-4">POWERFUL FEATURES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need In One Extension
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            ChromeGlow combines all the essential tools you need to supercharge your browsing experience, 
            all wrapped in a beautiful, easy-to-use interface.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">And many more features waiting for you to explore!</p>
          <button className="glow-btn">
            Discover All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
