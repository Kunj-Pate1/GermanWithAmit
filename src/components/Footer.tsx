
import { Facebook, Instagram, Linkedin, Twitter, ArrowRight, Youtube } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-playfair">German With Amit</h3>
            <p className="mb-4 text-gray-400">
              Your journey to German fluency starts here. Professional language instruction for all levels.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/germanwithamit/100083756738989/" target="_blank" className="text-gray-400 hover:text-german-medium transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/german_with_amit/" target="_blank" className="text-gray-400 hover:text-german-medium transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@GermanwithAmit" target="_blank" className="text-gray-400 hover:text-german-medium transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#courses" className="text-gray-400 hover:text-german-medium transition-colors">Courses</a>
              </li>
              <li>
                <a href="#study" className="text-gray-400 hover:text-german-medium transition-colors">Study Method</a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-german-medium transition-colors">Reviews</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-german-medium transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-german-medium transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-german-medium transition-colors">Free German Resources</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-german-medium transition-colors">FAQ</a>
              </li>
              <li>
                <a href="/privacypolicy" className="text-gray-400 hover:text-german-medium transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/refund-policy" className="text-gray-400 hover:text-german-medium transition-colors">Refund Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-400">
              Subscribe to receive German learning tips and updates on new courses.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" 
              />
              <Button size="icon" className="bg-german hover:bg-german-dark">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} German With Amit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
