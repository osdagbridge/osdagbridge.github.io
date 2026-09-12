import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Inquiry',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const formatDraft = () => {
    const fullSubject = `[OsdagBridge] [${formData.category}] ${formData.subject || 'Inquiry'}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}\n\n---\nSent via OsdagBridge Docs Contact Form`;
    return { fullSubject, body };
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ text: 'Please fill in all required fields (Name, Email, Subject, Message).', type: 'info' });
      return;
    }

    const { fullSubject, body } = formatDraft();
    const mailtoUrl = `mailto:contact-osdag@fossee.in?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(body)}`;
    setStatus({ text: 'Launching your email client...', type: 'success' });
    window.location.href = mailtoUrl;
  };

  const handleCopyDraft = () => {
    if (!formData.message.trim()) {
      setStatus({ text: 'Please write a message before copying.', type: 'info' });
      return;
    }

    const { fullSubject, body } = formatDraft();
    const clipboardText = `To: contact-osdag@fossee.in\nSubject: ${fullSubject}\n\n${body}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(clipboardText).then(() => {
        setStatus({ text: '✓ Message draft copied to clipboard! You can paste it into any email or chat client.', type: 'success' });
      }).catch(() => {
        setStatus({ text: 'Unable to automatically copy. Please select and copy manually.', type: 'info' });
      });
    } else {
      setStatus({ text: "Clipboard API not available. Please send directly using 'Open in Email Client'.", type: 'info' });
    }
  };

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with the OsdagBridge and Osdag development teams at FOSSEE, IIT Bombay.">
      <main>
        <div className="page-header container">
          <h1>Contact Us</h1>
          <p>Have questions, feedback, or want to collaborate on OsdagBridge? We would love to hear from you.</p>
        </div>

        <section>
          <div className="container">
            <div className="contact-layout">
              {/* Left Column: Contact Channels */}
              <div className="contact-card-grid">
                <div className="contact-card">
                  <div className="contact-card-icon">✉️</div>
                  <div className="contact-card-content">
                    <h3>Social Media</h3>
                    <p>Follow us and stay updated on the latest news and releases.</p>
                    <a className="contact-link" href="https://www.linkedin.com/company/osdag" target="_blank" rel="noopener">LinkedIn</a>
                    {' | '}
                    <a className="contact-link" href="https://www.youtube.com/@osdag.fossee" target="_blank" rel="noopener">YouTube</a>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">🐞</div>
                  <div className="contact-card-content">
                    <h3>Issue Tracker &amp; Bugs</h3>
                    <p>Found a bug or need a specific bridge feature? Open a ticket on GitHub.</p>
                    <a className="contact-link" href="https://github.com/osdag-admin/OsdagBridge/issues" target="_blank" rel="noopener">GitHub Issues →</a>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">💬</div>
                  <div className="contact-card-content">
                    <h3>Community &amp; Discussions</h3>
                    <p>Ask technical questions, participate in design discussions, and connect with other users.</p>
                    <a className="contact-link" href="https://discord.gg/jkNjU53Mhz" target="_blank" rel="noopener">Discord Server →</a>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">🎓</div>
                  <div className="contact-card-content">
                    <h3>Research &amp; Collaboration</h3>
                    <p>Partner with FOSSEE and IIT Bombay for academic research, bridge benchmarks, or student projects.</p>
                    <a className="contact-link" href="https://osdag.fossee.in" target="_blank" rel="noopener">Osdag Main Project →</a>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Message Composer */}
              <div className="form-box">
                <h2>Send a Message</h2>
                <p className="form-subtitle">Compose your query below. You can send it directly through your mail client or copy the formatted text.</p>

                <form onSubmit={handleSendEmail}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="e.g. Jane Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Your Email *</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="category">Topic Category</label>
                      <select
                        id="category"
                        className="form-control"
                        value={formData.category}
                        onChange={handleChange}>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Bug Report / Solver Issue">Bug Report / Solver Issue</option>
                        <option value="Feature Suggestion">Feature Suggestion</option>
                        <option value="IRC Code Compliance">IRC Code Compliance</option>
                        <option value="Academic / Research Collaboration">Academic / Research Collaboration</option>
                        <option value="Contributing Code">Contributing Code</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        className="form-control"
                        placeholder="Brief subject line"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="5"
                      placeholder="Describe your question, request, or issue with relevant details (OS, solver used, bridge type, etc.)..."
                      value={formData.message}
                      onChange={handleChange}
                      required></textarea>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                      ✉️ Open in Email Client
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={handleCopyDraft}>
                      📋 Copy Message Draft
                    </button>
                  </div>

                  {status.text && (
                    <div className={`status-box ${status.type}`}>
                      {status.text}
                    </div>
                  )}

                  <p className="form-notice">
                    Messages are routed to <strong>contact-osdag[at]fossee[dot]in</strong>. For reproducible code bugs, attaching logs or opening a <a href="https://github.com/osdag-admin/OsdagBridge/issues" target="_blank" rel="noopener">GitHub Issue</a> is recommended.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
