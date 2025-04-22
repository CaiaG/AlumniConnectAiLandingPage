
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "UX Designer",
    content: "ChromeGlow has completely transformed how I browse the web. The productivity features save me hours every week, and the interface is so intuitive!",
    rating: 5
  },
  {
    name: "Mark Williams",
    title: "Software Developer",
    content: "As a developer, I need tools that help me work efficiently. ChromeGlow's development features are exceptional, and the performance boost is noticeable.",
    rating: 5
  },
  {
    name: "Emily Chen",
    title: "Content Creator",
    content: "The customization options in ChromeGlow are amazing! I can make my browser look exactly how I want, and the screenshot tools are perfect for my work.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-chrome-gray/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="subtle-heading mb-4">TRUSTED BY THOUSANDS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Users Say
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from people who use ChromeGlow every day to enhance their browsing experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 h-full flex flex-col">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gray-300" />
                ))}
              </div>
              
              <blockquote className="flex-1">
                <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
              </blockquote>
              
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 bg-chrome-gradient rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
