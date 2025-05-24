
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Mail, Phone, MapPin, LinkedinIcon } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-german to-german-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="mb-8 text-german-light">
              Have questions about our German courses? Interested in private lessons? Fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-german-dark/50 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-german-light" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-german-light">lerndeutschmitamit@gmail.com</p>
                  {/* <p className="text-german-light">support@germanwithamit.com</p> */}
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-german-dark/50 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-german-light" />
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-german-light">+49 (1764) 677-8072</p>
                  <p className="text-german-light">Monday-Friday, 9am-6pm CET</p>
                </div>
                
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-german-dark/50 p-3 rounded-lg">
                  <LinkedinIcon className="h-6 w-6 text-german-light" href='https://www.linkedin.com/company/german-with-amit/'/>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Connect On LinkedIn</h3>
                  <p className="text-german-light">Get in touch</p>
                  
                </div>
                
               
                
              </div>
              
            </div>

          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <Input
                  id="subject"
                  placeholder="What is this regarding?"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 resize-none"
                />
              </div>
              
              <Button className="w-full bg-white text-german hover:bg-german-light hover:text-german-dark">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
