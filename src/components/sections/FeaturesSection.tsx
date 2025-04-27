
import { Users, Brain, FileText, Search, MessageSquare, Database } from "lucide-react";

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
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-custom-mint/10 text-custom-mint mb-4">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-custom-deepPurple">{title}</h3>
      <p className="text-custom-deepPurple/70">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Smart Directory Scraping",
      description: "Automatically extract alumni information including name, graduation year, current role, and company from Penn Directory profiles.",
      icon: Search
    },
    {
      title: "AI Message Generation",
      description: "Get intelligent prompt suggestions for crafting personalized outreach messages based on alumni background and shared interests.",
      icon: MessageSquare
    },
    {
      title: "Profile Organization",
      description: "Save and organize alumni profiles with notes and tags for effective networking management.",
      icon: Database
    }
  ];

  return (
    <section id="features" className="py-12 bg-custom-sage/20">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-8 text-center text-custom-deepPurple">
          Key Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
