import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Clock, Send, Github, Linkedin } from 'lucide-react';
import type { ContactForm } from '../types';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">{t('contact.getInTouch')}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <Mail className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{t('contact.info.email')}</p>
                      <a href="mailto:martinolm1999@gmail.com" className="text-white hover:text-purple-400 transition-colors">
                        martinolm1999@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <MapPin className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{t('contact.info.location')}</p>
                      <p className="text-white">General Rodríguez, Buenos Aires, Argentina</p>
                    </div>
                  </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                        <Clock className="text-green-400" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Status</p>
                        <p className="text-white">{t('contact.info.availability')}</p>
                      </div>
                    </div>
                  </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4 className="text-white font-semibold mb-4">{t('contact.connectWithMe')}</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/tinchopps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-200"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/in/tinchopps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-200"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.sendMessage')}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 dark:bg-gray-700/50 light:bg-white border border-gray-600 dark:border-gray-600 light:border-gray-300 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 dark:bg-gray-700/50 light:bg-white border border-gray-600 dark:border-gray-600 light:border-gray-300 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 dark:bg-gray-700/50 light:bg-white border border-gray-600 dark:border-gray-600 light:border-gray-300 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 dark:bg-gray-700/50 light:bg-white border border-gray-600 dark:border-gray-600 light:border-gray-300 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-[1.02] focus:ring-2 focus:ring-purple-500/20"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>{t('contact.form.send')}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;