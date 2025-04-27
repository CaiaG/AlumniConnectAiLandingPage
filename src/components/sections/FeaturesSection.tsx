
import { Users, FileText, Sparkles, Brain, CheckCircle, Zap } from "lucide-react";

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
      title: "Penn Directory Integration",
      description: "Seamlessly collect alumni information from the Penn Directory without manual copy-pasting.",
      icon: Users
    },
    {
      title: "AI Prompt Generation",
      description: "Generate customized prompts for ChatGPT and other AI tools to craft personalized outreach messages.",
      icon: Brain
    },
    {
      title: "Smart Data Organization",
      description: "Keep track of alumni information and outreach history in one place.",
      icon: FileText
    },
    {
      title: "Personalization Suggestions",
      description: "Get smart suggestions for personalizing your outreach based on alumni profiles.",
      icon: Sparkles
    },
    {
      title: "Easy-to-Use Interface",
      description: "Modern, simple popup interface designed specifically for Penn students.",
      icon: CheckCircle
    },
    {
      title: "Zero Setup Required",
      description: "No coding or complex setup—just install and start connecting with Penn alumni.",
      icon: Zap
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="subtle-heading mb-4">KEY FEATURES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Automate. Personalize. Connect.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            AlumniConnectAI brings modern automation and personalized outreach together, so you can focus on relationships, not repetitive tasks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Explore even more enhancements inside the extension.</p>
          <button className="glow-btn">
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
