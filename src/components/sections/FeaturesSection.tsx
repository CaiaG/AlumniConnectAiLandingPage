
import { CheckCircle, Zap, Mail, Users, History, FileText } from "lucide-react";

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
      title: "Automated Alumni Data Scraping",
      description: "Collect comprehensive alumni information from directories without manual copy-pasting.",
      icon: Users
    },
    {
      title: "Personalized Email Templates",
      description: "Generate and edit dynamic email templates for each outreach campaign.",
      icon: FileText
    },
    {
      title: "Bulk Email Sending",
      description: "Easily send custom emails to multiple alumni in one go.",
      icon: Mail
    },
    {
      title: "Email Tracking & History",
      description: "Monitor email opens, replies, and keep a record of your outreach activity.",
      icon: History
    },
    {
      title: "Easy-to-Use Interface",
      description: "Modern, simple popup with guided workflow for all outreach actions.",
      icon: CheckCircle
    },
    {
      title: "Zero Setup Required",
      description: "No coding or onboarding—just install the extension and start connecting.",
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
