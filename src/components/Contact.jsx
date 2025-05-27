import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 3000);
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-pink-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div className="lg:w-1/2">
            {/* Contact Info here (already provided) */}
            {/* ... Keep your existing contact info code ... */}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus.submitting}
                className="w-full bg-pink-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-pink-700 transition-colors"
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus.submitted && (
                <p className="text-green-600 text-sm">Your message has been sent!</p>
              )}
              {formStatus.error && (
                <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
