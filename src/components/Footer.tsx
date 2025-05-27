
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white mb-2">
              Yousef<span className="text-blue-400">Nabil</span>
            </div>
            <p className="text-gray-400">Frontend Developer & UI/UX Enthusiast</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/youssefnabil2030" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/youssef-nabil-711558204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="ynjob12@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="text-red-500" size={16} /> by Yousef Nabil © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
