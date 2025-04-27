
import { Users, Brain, FileText } from "lucide-react";

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
    <div className="feature-item chrome-card p-6">
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
      description: "Automatically collect alumni information from the Penn Directory.",
      icon: Users
    },
    {
      title: "AI Prompt Generation",
      description: "Generate customized prompts for ChatGPT to craft outreach messages.",
      icon: Brain
    },
    {
      title: "Data Organization",
      description: "Keep track of alumni information in one place.",
      icon: FileText
    }
  ];

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Key Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
