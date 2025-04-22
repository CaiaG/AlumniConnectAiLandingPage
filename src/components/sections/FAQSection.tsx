
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is AlumniConnectAI free?",
      answer: "Yes, the core features are free to use. We offer premium plans with advanced analytics and integrations for institutions."
    },
    {
      question: "Does the extension store or sell my data?",
      answer: "No. All scraping and email sending are handled locally. We do not store, share, or sell any user or alumni data."
    },
    {
      question: "What alumni data can it scrape?",
      answer: "It extracts publicly available data from alumni directories—such as names, emails, graduation years, and positions."
    },
    {
      question: "Can I track who opened or replied to my emails?",
      answer: "Yes! The extension includes basic email tracking and keeps a history of your outreach activity."
    },
    {
      question: "Is it difficult to set up?",
      answer: "Not at all. Just install the extension and you’re ready to start—no tech skills required."
    },
    {
      question: "Who can I contact for support?",
      answer: "Reach out to the authors directly via the links on the landing page, or check our documentation for more help."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="subtle-heading mb-4">FREQUENTLY ASKED</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AlumniConnectAI FAQ
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Something not covered below? Reach out for more answers.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? Contact the authors below.
          </p>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-full transition-all">
            Contact Authors
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
