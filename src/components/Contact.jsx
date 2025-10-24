import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

// Configuration for EmailJS
// !!! IMPORTANT: Replace these placeholders with your actual EmailJS IDs !!!
const SERVICE_ID = 'service_c85amjb'; // Your EmailJS Service ID
const TEMPLATE_ID = 'template_m8yfvdd'; // Your EmailJS Template ID
const PUBLIC_KEY = 'QO6TqjKXvVdEI8lDP'; // Your EmailJS Public Key (User ID)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null); // 'sending', 'success', 'error'

  // Replace these with your actual details
  const contactInfo = {
    email: 'aniket.chakraborty2001@gmail.com',
    phone: '+91 9163839603',
    location: 'Kolkata, West Bengal, India',
    linkedin: 'www.linkedin.com/in/aniket-chakraborty20022001',
    github: 'https://github.com/aniket-professional2025',
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    setFormStatus('sending');

    const emailData = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: {
        // Keys here must match the variables defined in your EmailJS template
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData)
      });

      if (response.status === 200) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        // Try to parse error message if available
        const errorText = await response.text();
        console.error('EmailJS Error Response:', errorText);
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Submission failed:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl animate-fadeIn" style={{fontFamily: 'Inter, sans-serif'}}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slideUp { animation: slideUp 0.6s ease-out forwards; }
      `}</style>
      <h2 className="text-5xl font-bold text-yellow-300 text-center mb-4 animate-slideUp">
        Let Connect
      </h2>
      <p className="text-white text-xl text-center mb-12">
        I’m currently open to new opportunities. Reach out for collaboration or just to say hello!
      </p>

      <div className="grid lg:grid-cols-3 gap-10">
        
        {/* Contact Information Cards (Left Section) */}
        <div className="lg:col-span-1 space-y-6 animate-slideUp">
          <ContactCard 
            icon={<Mail className="text-purple-900" />} 
            title="Email Me"
            detail={contactInfo.email}
            href={`mailto:${contactInfo.email}`}
          />
          <ContactCard 
            icon={<Phone className="text-purple-900" />} 
            title="Call Me"
            detail={contactInfo.phone}
            href={`tel:${contactInfo.phone.replace(/[\s()-]/g, '')}`}
          />
          <ContactCard 
            icon={<MapPin className="text-purple-900" />} 
            title="Location"
            detail={contactInfo.location}
          />
          
          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-6 pt-4">
            <SocialLink 
              icon={<Linkedin size={30} />} 
              href={contactInfo.linkedin} 
              label="LinkedIn" 
            />
            <SocialLink 
              icon={<Github size={30} />} 
              href={contactInfo.github} 
              label="GitHub" 
            />
          </div>
        </div>

        {/* Contact Form (Right Section) */}
        <div className="lg:col-span-2 bg-purple-800 bg-opacity-40 rounded-2xl p-8 shadow-2xl backdrop-blur-sm animate-slideUp" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-3xl font-semibold text-yellow-300 mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2 font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl bg-purple-900 border border-purple-600 text-white focus:border-yellow-300 focus:ring-yellow-300 transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white mb-2 font-medium">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl bg-purple-900 border border-purple-600 text-white focus:border-yellow-300 focus:ring-yellow-300 transition-colors"
                placeholder="john.doe@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white mb-2 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl bg-purple-900 border border-purple-600 text-white focus:border-yellow-300 focus:ring-yellow-300 transition-colors resize-none"
                placeholder="I'm interested in discussing..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full md:w-auto flex items-center justify-center px-6 py-3 bg-yellow-300 text-purple-900 font-bold rounded-xl shadow-lg transition-all duration-300 hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === 'sending' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-purple-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </button>

            {/* Status Feedback */}
            {formStatus === 'success' && (
              <p className="mt-4 p-3 bg-green-500/20 text-green-300 rounded-xl animate-fadeIn">
                Thank you for your message! It has been sent successfully. I will get back to you shortly.
              </p>
            )}
            {formStatus === 'error' && (
              <p className="mt-4 p-3 bg-red-500/20 text-red-300 rounded-xl animate-fadeIn">
                Oops! There was an error submitting the form. Please check your network connection or ensure all fields are filled.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

// Helper component for contact information cards
const ContactCard = ({ icon, title, detail, href }) => (
  <a 
    href={href} 
    target={href ? "_blank" : "_self"}
    rel={href ? "noopener noreferrer" : ""}
    className="flex items-center space-x-4 bg-purple-900 bg-opacity-70 p-4 rounded-xl shadow-md transition-colors duration-300 hover:bg-purple-700/80 cursor-pointer"
  >
    <div className="bg-yellow-300 p-3 rounded-full flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-semibold text-yellow-300">{title}</h4>
      <p className="text-gray-200 break-words">{detail}</p>
    </div>
  </a>
);

// Helper component for social media links
const SocialLink = ({ icon, href, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={`Link to ${label}`}
    className="text-white hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
  >
    {icon}
  </a>
);