// Contact Component: New code
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h2 className="text-5xl font-bold text-yellow-300 text-center mb-4">
        Let us Connect
      </h2>
      <p className="text-white text-xl text-center mb-12">
        I am open to new opportunities. Reach out for collaboration!
      </p>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 space-y-6">
          <div className="flex items-center space-x-4 bg-purple-900 bg-opacity-70 p-4 rounded-xl">
            <div className="bg-yellow-300 p-3 rounded-full">
              <Mail className="text-purple-900" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-yellow-300">Email</h4>
              <p className="text-gray-200">aniket.chakraborty@example.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-purple-900 bg-opacity-70 p-4 rounded-xl">
            <div className="bg-yellow-300 p-3 rounded-full">
              <Phone className="text-purple-900" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-yellow-300">Phone</h4>
              <p className="text-gray-200">+91 9163839603</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-purple-800 bg-opacity-40 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
          <h3 className="text-3xl font-semibold text-yellow-300 mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-2 font-medium">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full p-3 rounded-xl bg-purple-900 border border-purple-600 text-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-white mb-2 font-medium">Your Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full p-3 rounded-xl bg-purple-900 border border-purple-600 text-white"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-white mb-2 font-medium">Message</label>
              <textarea
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                className="w-full p-3 rounded-xl bg-purple-900 border border-purple-600 text-white resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center px-6 py-3 bg-yellow-300 text-purple-900 font-bold rounded-xl shadow-lg hover:bg-yellow-400 transition-all"
            >
              Send Message <Send className="ml-2 h-5 w-5" />
            </button>
            {formStatus === 'success' && (
              <p className="mt-4 p-3 bg-green-500/20 text-green-300 rounded-xl">
                Thank you! Message sent successfully.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}