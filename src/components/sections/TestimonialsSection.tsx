
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anna Patel",
    title: "Career Services Director",
    content: "AlumniConnectAI has turned hours of manual work into minutes. Outreach is faster, more personal, and our response rates have tripled!",
    rating: 5
  },
  {
    name: "Liam Chen",
    title: "Alumni Relations Coordinator",
    content: "The extension's scraping and bulk email features are a game changer. It helps us proactively engage our alumni with less effort.",
    rating: 5
  },
  {
    name: "Sofia Leone",
    title: "University Advancement Officer",
    content: "Setting up personalized templates and tracking alumni engagement is so smooth. Our programs are more efficient than ever!",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100/60">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="subtle-heading mb-4">RESULTS THAT MATTER</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Alumni Pros Say
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            See how AlumniConnectAI is making a difference in alumni offices and career centers.
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
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-400 rounded-full flex items-center justify-center text-white font-bold">
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
