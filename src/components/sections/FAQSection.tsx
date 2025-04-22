
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is ChromeGlow free to use?",
      answer: "Yes, ChromeGlow is completely free for personal use. We also offer a premium version with advanced features for power users and businesses."
    },
    {
      question: "Does ChromeGlow collect my browsing data?",
      answer: "No. We take privacy seriously. ChromeGlow does not collect any personal browsing data or history. All your data stays on your device."
    },
    {
      question: "Will ChromeGlow slow down my browser?",
      answer: "ChromeGlow is designed to be lightweight and optimized. In fact, many of our features actually improve your browser's performance."
    },
    {
      question: "Is ChromeGlow compatible with other extensions?",
      answer: "Yes, ChromeGlow is built to work alongside your other favorite extensions without conflicts or performance issues."
    },
    {
      question: "How do I get support if I have issues?",
      answer: "We offer support through our help center, community forums, and direct email. Our team typically responds within 24 hours."
    },
    {
      question: "Can I sync my settings across devices?",
      answer: "Yes, ChromeGlow settings sync automatically across all your devices using your Chrome account."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="subtle-heading mb-4">QUESTIONS & ANSWERS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about ChromeGlow. If you don't see your question here, feel free to contact us.
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
            Still have questions? We're here to help!
          </p>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-full transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
