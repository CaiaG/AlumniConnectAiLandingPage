
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-400 to-green-400 bg-clip-text text-transparent">
                AlumniConnectAI
              </span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Automate alumni outreach with our Chrome extension. Save time, personalize communication, and make meaningful connections—effortlessly.
            </p>
            <div className="flex space-x-4">              
              <a href="#" className="text-gray-500 hover:text-gray-900" aria-label="Github">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Project
            </h3>
            <ul className="space-y-3">
              {["How It Works"].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.replace(/\s+/g, '-').toLowerCase()}`} className="text-gray-600 hover:text-blue-600">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Authors
            </h3>
            <ul className="space-y-3">
              <li>
                Muhammad Abdullah Goher
              </li>
              <li>
                Alan Wu
              </li>
              <li>
                Adi Sirohi
              </li>
              <li>
                Caia Gelli
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AlumniConnectAI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
