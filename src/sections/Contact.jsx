import { AlertCircle, ArrowUpRight, CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  const updateField = (event) => setFormData((current) => ({
    ...current,
    [event.target.name]: event.target.value,
  }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) throw new Error("Email service is not configured.");

      await emailjs.send(serviceId, templateId, formData, publicKey);
      setFormData({ name: "", email: "", message: "" });
      setStatus({ type: "success", message: "Message sent. I’ll get back to you soon." });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({ type: "error", message: "The form couldn’t send. Please email me directly instead." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <section id="contact" className="section-shell contact-section">
        <div className="site-container contact-layout">
          <div className="contact-copy">
            <span className="eyebrow">Let’s work together</span>
            <h2>Have a complex frontend problem?</h2>
            <p>I’m open to senior frontend roles and conversations about thoughtful, product-focused engineering teams.</p>
            <div className="contact-links">
              <a href="mailto:aaliyakhanam158@gmail.com"><Mail aria-hidden="true" /><span><small>Email</small>aaliyakhanam158@gmail.com</span><ArrowUpRight aria-hidden="true" /></a>
              <div><MapPin aria-hidden="true" /><span><small>Based in</small>Gurgaon, India</span></div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-row">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" autoComplete="name" required value={formData.name} onChange={updateField} placeholder="Your name" />
            </div>
            <div className="field-row">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={updateField} placeholder="you@company.com" />
            </div>
            <div className="field-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required value={formData.message} onChange={updateField} placeholder="Tell me about the role or project" />
            </div>
            <button className="button button-primary form-submit" type="submit" disabled={isLoading}>
              {isLoading ? "Sending…" : <>Send message <Send aria-hidden="true" /></>}
            </button>
            <div className="form-status" aria-live="polite">
              {status.type === "success" && <p className="success"><CheckCircle2 aria-hidden="true" />{status.message}</p>}
              {status.type === "error" && <p className="error"><AlertCircle aria-hidden="true" />{status.message}</p>}
            </div>
          </form>
        </div>
      </section>
  );
};
