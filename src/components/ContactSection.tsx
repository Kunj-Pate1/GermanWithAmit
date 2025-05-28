
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Mail, Phone, MapPin, LinkedinIcon } from 'lucide-react';

const ContactSection = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      // Convert form data to plain object
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
  
      // Important CORS workaround:
      const response = await fetch("https://script.google.com/macros/s/AKfycbwFgmaKxiZmeuBD1SP3Cto77t18Dp7y7ETV3Nut8we7b0Mma1ItRmvIO1RACuC0rinp/exec", {
        method: "POST",
        mode: "no-cors", // This is key for CORS
        headers: {
          "Content-Type": "text/plain", // Must be text/plain
        },
        body: JSON.stringify(data) // Send as stringified JSON
      });
  
      // Note: With 'no-cors' mode, we can't read the response directly
      // So we'll assume success if we get here
      setSubmitStatus({
        type: "success",
        message: "Form submitted successfully! (Check your sheet)"
      });
      e.target.reset();
  
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Submission failed. Please try again or contact support."
      });
    } finally {
      setIsSubmitting(false);
    }
  };


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
            
            <form onSubmit={handleSubmit} className="space-y-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg h-full">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input 
                name="Name" 
                placeholder="Your Name*" 
                className="bg-white/5 border-white/20 text-white placeholder:text-white"
                required
              />
            </div>
            <div>
              <Input 
                name="Email"
                type="email" 
                placeholder="Your Email*" 
                className="bg-white/5 border-white/20 text-white placeholder:text-white"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input 
                name="WhatsApp_Number"
                type="tel" 
                placeholder="WhatsApp Number With Country code*" 
                className="bg-white/5 border-white/20 text-white placeholder:text-white"
                required
              />
            </div>
            <div>
              <Input 
                name="Age"
                type="number" 
                placeholder="Age*" 
                className="bg-white/5 border-white/20 text-white placeholder:text-white"
                min="10"
                max="100"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input 
                name="Country_Of_Origin"
                placeholder="Where are you from?*" 
                className="bg-white/5 border-white/20 text-white placeholder:text-white"
                required
              />
            </div>
            <div>
              <Input 
                name="Current_Location"
                placeholder="Current location*" 
                className="bg-white/5 border-white/20 text-white placeholder:text-white" 
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <select 
                name="Discovery_Method"
                className="w-full h-12 bg-white/5 border-white/20 text-white placeholder:text-white/50 px-3 py-2 rounded-md border border-gray-300"
                required
              >
                <option value="">How did you hear about us?*</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="YouTube">YouTube</option>
                <option value="Friend">Friend/Word of Mouth</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <select 
                name="Previous_German_Level"
                 className="w-full h-12 bg-white/5 border-white/20 text-white placeholder:text-white/50 px-3 py-2 rounded-md border border-gray-300"
                required
              >
                <option value="">Previous German experience?*</option>
                <option value="Beginner">Beginner(A1-A2)</option>
                <option value="Intermediate">Intermediate(B1-B2)</option>
                <option value="Advanced">Advanced(C1-C2)</option>
                <option value="Never">No, I havent studied German before.</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <select 
                name="What is your desired German Level?"
                 className="w-full h-12 bg-white/5 border-white/20 text-white placeholder:text-white/50 px-3 py-2 rounded-md border border-gray-300"
                required
              >
                <option value="">Desired level?*</option>
                <option value="A1">A1 (Beginner)</option>
                <option value="A2">A2 (Elementary)</option>
                <option value="B1">B1 (Intermediate)</option>
                <option value="B2">B2 (Upper Intermediate)</option>
                <option value="C1">C1 (Advanced)</option>
                <option value="C2">C2 (Proficient)</option>
              </select>
            </div>
            <div>
              <select 
                name="Exam_Training"
                 className="w-full h-12 bg-white/5 border-white/20 text-white placeholder:text-white/50 px-3 py-2 rounded-md border border-gray-300"
                 required
              >
                <option value="">Exam preparation needed?</option>
                <option value="No">No, general lessons</option>
                <option value="A1">Yes, for A1</option>
                <option value="A2">Yes, for A2</option>
                <option value="B1">Yes, for B1</option>
                <option value="B2">Yes, for B2</option>
                <option value="C1">Yes, for C1</option>
                <option value="C2">Yes, for C2</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <select 
                name="Preferred_Day"
                 className="w-full h-12 bg-white/5 border-white/20 text-white placeholder:text-white/50 px-3 py-2 rounded-md border border-gray-300"
                required
              >
                <option value="">When do you want to Learn?*</option>
                <option value="Weekdays">Weekdays</option>
                <option value="Weekends">Weekends</option>
                <option value="Both">Both</option>
                <option value="Flexible">Flexible/No Preference</option>
              </select>
            </div>
            <div>
              <select 
                name="Preferred_Time"
                 className="w-full h-12 bg-white/5 border-white/20 text-white placeholder:text-white/50 px-3 py-2 rounded-md border border-gray-300"
                required
              >
                <option value="">Preferred lesson times?*</option>
                <option value="Morning">Morning(6am - 12 pm)</option>
                <option value="Evening">Evening(4pm - 8pm)</option>
                <option value="Late Evening">Late Evening(8pm - 10pm)</option>
              </select>
            </div>
          </div>

          <Button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white text-german hover:bg-german-light hover:text-german-dark"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      {submitStatus && (
        <div className={`mt-4 p-3 rounded-md ${
          submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {submitStatus.message}
        </div>
      )}
        </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
