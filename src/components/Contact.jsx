import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, FileText } from 'lucide-react';

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-matrix/10 text-matrix border border-matrix/30 rounded-none">
            <Mail className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono font-semibold tracking-wider text-matrix font-calibri uppercase">Get in Touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let's <span className="text-matrix font-calibri">Connect</span>
        </h2>
        <p className="text-gray-300 mt-2 max-w-2xl text-sm sm:text-base">
          Open for research collaborations, software engineering roles, IoT consulting, or academic inquiries.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">

          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">

            {/* Direct Email Card */}
            <a
              href="mailto:adithyak847@gmail.com"
              className="glass-card glass-card-hover p-6 flex items-center gap-4 group block rounded-none"
            >
              <div className="w-12 h-12 bg-matrix/20 text-matrix border border-matrix/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform rounded-none">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-mono">Email Address</div>
                <div className="text-white font-bold text-base group-hover:text-matrix font-calibri transition-colors">
                  adithyak847@gmail.com
                </div>
                <div className="text-[11px] text-matrix font-calibri font-bold mt-0.5">Click to launch email app</div>
              </div>
            </a>

            {/* Direct Phone Card */}
            <a
              href="tel:+919539058041"
              className="glass-card glass-card-hover p-6 flex items-center gap-4 group block rounded-none"
            >
              <div className="w-12 h-12 bg-matrix/20 text-matrix border border-matrix/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform rounded-none">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-mono">Phone Number</div>
                <div className="text-white font-bold text-base group-hover:text-matrix font-calibri transition-colors">
                  +91 95390 58041
                </div>
                <div className="text-[11px] text-matrix font-calibri font-bold mt-0.5">Direct phone & WhatsApp</div>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-card p-6 flex items-center gap-4 rounded-none">
              <div className="w-12 h-12 bg-matrix/20 text-matrix border border-matrix/40 flex items-center justify-center shrink-0 rounded-none">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-mono">Location</div>
                <div className="text-white font-bold text-base">
                  Thrissur, Kerala, India
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5">Open to remote & worldwide relocation</div>
              </div>
            </div>

            {/* Social Buttons & Resume CTA */}
            <div className="glass-card p-6 space-y-4 rounded-none">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Social Links & Resume</div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/Adithya-Krishnan-ks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-black/70 hover:bg-black/90 text-white font-semibold text-xs border border-matrix/30 font-calibri transition-all rounded-none"
                >
                  <Github className="w-4 h-4 text-matrix" />
                  GitHub Profile
                </a>

                <a
                  href="https://www.linkedin.com/in/adithya-krishnan-ks-7a8bb0329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-black/70 hover:bg-black/90 text-white font-semibold text-xs border border-matrix/30 font-calibri transition-all rounded-none"
                >
                  <Linkedin className="w-4 h-4 text-matrix" />
                  LinkedIn Profile
                </a>
              </div>

              <button
                onClick={onOpenResume}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-matrix hover:bg-matrix-light text-slate-950 font-bold font-calibri text-xs shadow-md shadow-matrix/20 rounded-none"
              >
                <FileText className="w-4 h-4" />
                Resume View & Download
              </button>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 relative rounded-none">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              {submitted ? (
                <div className="p-6 bg-matrix/20 border border-matrix/40 text-gray-100 space-y-3 text-center rounded-none">
                  <CheckCircle2 className="w-10 h-10 text-matrix mx-auto" />
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-gray-200">
                    Thank you for reaching out, Adithya will respond to your email at <span className="underline font-semibold">{formData.email || 'your email'}</span> as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-matrix/30 text-white text-xs font-semibold font-calibri hover:bg-matrix/40 transition-colors rounded-none"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Arnav krishnan ks"
                        className="w-full px-4 py-3 bg-black/70 border border-matrix/30 text-white text-sm focus:outline-none focus:border-matrix focus:ring-1 focus:ring-matrix transition-all placeholder:text-gray-500 rounded-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="arnavk@university.edu"
                        className="w-full px-4 py-3 bg-black/70 border border-matrix/30 text-white text-sm focus:outline-none focus:border-matrix focus:ring-1 focus:ring-matrix transition-all placeholder:text-gray-500 rounded-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Research Collaboration / Internship Inquiry"
                      className="w-full px-4 py-3 bg-black/70 border border-matrix/30 text-white text-sm focus:outline-none focus:border-matrix focus:ring-1 focus:ring-matrix transition-all placeholder:text-gray-500 rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 bg-black/70 border border-matrix/30 text-white text-sm focus:outline-none focus:border-matrix focus:ring-1 focus:ring-matrix transition-all placeholder:text-gray-500 rounded-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-matrix hover:bg-matrix-light text-slate-950 font-bold font-calibri text-sm shadow-lg shadow-matrix/20 transition-all rounded-none"
                  >
                    {loading ? (
                      <span className="animate-pulse">Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
