
import { Search, MessageSquare, Database, Users, Brain, Target } from "lucide-react";

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
    <div className="feature-item chrome-card p-6 bg-white/80 hover:scale-105 transition-all duration-300">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-custom-mint/20 text-custom-purple mb-4">
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
      description: "Extract detailed alumni profiles in seconds with our intelligent scraping technology - including work history, education, and contact details.",
      icon: Search
    },
    {
      title: "AI Message Generation",
      description: "Generate perfectly tailored outreach messages that resonate with each alumnus's background, interests, and career path.",
      icon: MessageSquare
    },
    {
      title: "Profile Organization",
      description: "Keep track of your network with smart tagging, notes, and follow-up reminders for each alumni connection.",
      icon: Database
    },
    {
      title: "Network Analytics",
      description: "Gain insights into your alumni network with visual analytics showing industry distribution and connection strength.",
      icon: Users
    },
    {
      title: "Smart Suggestions",
      description: "Get AI-powered recommendations for which alumni to connect with based on your career goals and interests.",
      icon: Brain
    },
    {
      title: "Goal Tracking",
      description: "Set and track your networking goals with progress indicators and success metrics for your outreach efforts.",
      icon: Target
    }
  ];

  return (
    <section id="features" className="py-16 bg-gradient-to-br from-custom-sage/30 to-custom-mint/20">
      <div className="section-container">
        <h2 className="text-4xl font-bold mb-12 text-center text-custom-deepPurple">
          Powerful Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
