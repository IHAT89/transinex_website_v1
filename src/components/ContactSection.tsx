import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Calendar, 
  Linkedin, 
  Github, 
  MessageSquare, 
  Sparkles,
  Phone
} from 'lucide-react';
import { ProfileData, AccentColor } from '../types';
import { themes } from '../utils/theme';

interface ContactSectionProps {
  profile: ProfileData;
  accent: AccentColor;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, accent }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Executive / Leadership Role',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const theme = themes[accent];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-400 mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif-display mb-4">
                Let's Start a Conversation
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Whether you are exploring a VP of Engineering / Principal Architect role, seeking strategic technical advisory, or wanting to discuss scalable distributed systems, I'd love to connect.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Direct Contact</span>
                <span className="text-[11px] font-mono-code text-emerald-400">Available</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className={`w-4 h-4 shrink-0 ${theme.highlightText}`} />
                  <span className="text-sm font-semibold text-zinc-200 truncate">
                    {profile.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  id="btn-contact-copy-email"
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 shrink-0 ml-2"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-zinc-400">
                <MapPin className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Professional Links */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Professional Networks
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://linkedin.com/in/iantownrow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/iantownrow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4 text-zinc-400" />
                  <span>GitHub Code Repos</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 shadow-2xl relative">
              
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-serif-display">
                    Thank You, Message Prepared!
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto">
                    Your inquiry has been generated. You can also send directly to{' '}
                    <a href={`mailto:${profile.email}`} className="text-emerald-400 underline font-semibold">
                      {profile.email}
                    </a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', topic: 'Executive / Leadership Role', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="inquiry-contact-form">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                    <span className="text-sm font-bold text-white">Direct Inquiry Form</span>
                    <span className="text-xs text-zinc-500 font-mono-code">Fast response guarantee</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5" htmlFor="contact-name">
                        Your Name / Organization *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins (Acme Corp)"
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-600 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5" htmlFor="contact-email">
                        Your Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sjenkins@acme.com"
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-600 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5" htmlFor="contact-topic">
                      Primary Topic of Discussion
                    </label>
                    <select
                      id="contact-topic"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-600 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-100 focus:outline-none transition-colors"
                    >
                      <option value="Executive / Leadership Role">Executive / Leadership Role (VP of Eng / Director)</option>
                      <option value="Principal Architect Position">Principal Architect / Staff Engineer Opportunity</option>
                      <option value="Technical Advisory & Consulting">Technical Advisory & Architecture Audit</option>
                      <option value="Speaking / Panel / Collaboration">Speaking / Technical Collaboration</option>
                      <option value="Other Inquiries">Other Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5" htmlFor="contact-message">
                      Message / Project Details *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share context regarding the team, role requirements, or architectural objectives..."
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-600 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-[11px] text-zinc-500">
                      Replies typically delivered within 24 hours.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all ${theme.buttonPrimary}`}
                    >
                      {isSubmitting ? (
                        <span>Processing Note...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
