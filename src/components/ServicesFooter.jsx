// src/components/ServicesFooter.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Download } from 'lucide-react';

export default function ServicesFooter() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    help: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_m8socbq', // EmailJS Service ID
        'template_hmw9k8e', // EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.help,
        },
        'rV94bGm3nQGFQQYMC' // EmailJS Public Key
      );
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', help: '' });
      setShowForm(false);
    } catch (error) {
      console.error(error);
      alert('Failed to send message.');
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
      <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
      <p className="mb-6 opacity-90">
        Get in touch to discuss your transformer design requirements and receive a customized solution.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
        >
          <Mail size={18} />
          {showForm ? 'Cancel' : 'Contact Me'}
        </button>

        <a
          href="/resume.pdf"
          download
          className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
        >
          <Download size={18} />
          Download Resume!
        </a>
      </div>

      {showForm && (
        <form
          onSubmit={handleFormSubmit}
          className="mt-8 text-left bg-white text-black rounded-lg p-6 max-w-xl mx-auto space-y-4"
        >
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">How can we help?</label>
            <textarea
              name="help"
              rows="3"
              value={formData.help}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
