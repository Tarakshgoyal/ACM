'use client'

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY'
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.log(error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full h-[400px] md:h-[500px] p-8 rounded-xl backdrop-blur-lg bg-black/30 border border-white/10 shadow-2xl flex flex-col"
    >
      <h2 className="text-3xl font-bold mb-6 text-white text-center">Contact Us</h2>
      
      <div className="flex-grow space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </div>

        <div>
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity disabled:opacity-50 mt-4"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
};

export default Form;