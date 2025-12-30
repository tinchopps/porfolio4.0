import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send, Github, Linkedin, MessageSquare, Loader2 } from 'lucide-react';
import { BentoCard } from './BentoCard';
import { BentoGrid, BentoSection } from './BentoGrid';
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
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'martinolm1999@gmail.com',
      href: 'mailto:martinolm1999@gmail.com',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      label: t('contact.info.location'),
      value: 'General Rodríguez, BA',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Clock,
      label: 'Status',
      value: t('contact.info.availability'),
      gradient: 'from-green-500 to-emerald-500',
      isStatus: true,
    },
  ];

  return (
    <BentoSection
      id="contact"
      title={t('contact.title')}
      subtitle={t('contact.description')}
    >
      <BentoGrid columns={3}>
        {/* Contact Info Cards */}
        {contactInfo.map((info, index) => (
          <BentoCard key={info.label} delay={index}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shrink-0`}>
                <info.icon size={22} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                {info.href ? (
                  <a href={info.href} className="text-white hover:text-primary transition-colors font-medium">
                    {info.value}
                  </a>
                ) : (
                  <div className="flex items-center gap-2">
                    {info.isStatus && <span className="status-dot status-dot-available" />}
                    <span className="text-white font-medium">{info.value}</span>
                  </div>
                )}
              </div>
            </div>
          </BentoCard>
        ))}

        {/* Social Links Card */}
        <BentoCard delay={3}>
          <h4 className="text-sm font-semibold text-gray-400 mb-4">{t('contact.connectWithMe')}</h4>
          <div className="flex gap-3">
            <a
              href="https://github.com/tinchopps"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/tinchopps"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </BentoCard>

        {/* Contact Form - Wide */}
        <BentoCard size="wide" delay={4} hover={false}>
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="text-primary" size={24} />
            <h3 className="text-xl font-bold text-white">{t('contact.sendMessage')}</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder={t('contact.form.name')}
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-bento-dark border border-bento-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder={t('contact.form.email')}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-bento-dark border border-bento-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder={t('contact.form.subject')}
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-bento-dark border border-bento-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
            />

            <textarea
              name="message"
              placeholder={t('contact.form.message')}
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-bento-dark border border-bento-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" size={20} />
              ) : submitted ? (
                <>
                  <span>✓</span>
                  <span>Sent!</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>{t('contact.form.send')}</span>
                </>
              )}
            </motion.button>
          </form>
        </BentoCard>
      </BentoGrid>
    </BentoSection>
  );
};

export default Contact;