import React, { useState } from "react";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, generateWhatsAppMessage } from "../config/constants";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");

  const services = [
    "Website Development",
    "App Development",
    "SEO",
    "Social Media Marketing",
    "Meta Ads",
    "Promotional Videos",
    "Social Media Management",
    "Other",
  ];

  const budgets = [
    "Under ₹25,000",
    "₹25,000 – ₹50,000",
    "₹50,000 – ₹1,00,000",
    "₹1,00,000+",
    "Not Sure Yet",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleBudgetSelect = (budgetOption) => {
    setFormData((prev) => ({ ...prev, budget: budgetOption }));
    if (errors.budget) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.budget;
        return next;
      });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    else if (formData.name.trim().length < 2)
      tempErrors.name = "Name must be at least 2 characters.";

    if (!formData.email.trim()) tempErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Please enter a valid email address.";

    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required.";
    else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone))
      tempErrors.phone = "Please enter a valid phone number.";

    if (!formData.service)
      tempErrors.service = "Please select a required service.";
    if (!formData.budget)
      tempErrors.budget = "Please select your budget range.";

    if (!formData.message.trim()) {
      tempErrors.message = "Project requirements are required.";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message =
        "Project requirements must be at least 10 characters long.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // 1. Generate formatted WhatsApp message from form values
      const messageText = generateWhatsAppMessage(formData);

      // 2. URL-encode message safely
      const encodedText = encodeURIComponent(messageText);

      // 3. Construct WhatsApp click-to-chat URL
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
      setLastWhatsAppUrl(whatsappUrl);

      // 4. Open WhatsApp in a new tab (Web or Native App)
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      // 5. Update state and reset form
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (err) {
      console.error("Error opening WhatsApp:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-navy-medium dark:bg-slate-900 text-white p-8 md:p-12 text-center flex flex-col items-center justify-center space-y-6 max-w-xl mx-auto shadow-2xl relative overflow-hidden border border-white/10 transition-colors duration-300">
        <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none"></div>
        <div className="w-16 h-16 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue animate-bounce">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="relative z-10 space-y-2">
          <h3 className="text-2xl font-bold tracking-tight">
            Enquiry Formatted for WhatsApp
          </h3>
          <p className="text-sm text-slate-300 max-w-md leading-relaxed">
            Your inquiry details have been collected and opened in WhatsApp.
            Simply click <strong>Send</strong> inside WhatsApp to start chatting
            with the DigitalWings team.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 pt-2">
          {lastWhatsAppUrl && (
            <a
              href={lastWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-2.5 bg-brand-blue text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-hover transition-colors duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Reopen WhatsApp</span>
            </a>
          )}
          <button
            onClick={() => setSubmitSuccess(false)}
            className="px-6 py-2.5 bg-white text-navy-medium text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-colors duration-300"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 bg-white dark:bg-slate-900 p-6 md:p-10 border border-navy-medium/10 dark:border-white/10 shadow-sm max-w-3xl mx-auto transition-colors duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name Input */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="name"
            className="text-xs uppercase font-extrabold text-navy-medium dark:text-slate-200 tracking-widest"
          >
            Full Name <span className="text-brand-blue">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border transition-all outline-none rounded-none text-sm ${
              errors.name
                ? "border-red-500 bg-red-50/20 dark:bg-red-950/20"
                : "border-slate-200 dark:border-slate-700 focus:border-navy-medium dark:focus:border-brand-blue focus:bg-white dark:focus:bg-slate-800"
            }`}
          />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name}</span>
          )}
        </div>

        {/* Email Input */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="email"
            className="text-xs uppercase font-extrabold text-navy-medium dark:text-slate-200 tracking-widest"
          >
            Email Address <span className="text-brand-blue">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john@example.com"
            className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border transition-all outline-none rounded-none text-sm ${
              errors.email
                ? "border-red-500 bg-red-50/20 dark:bg-red-950/20"
                : "border-slate-200 dark:border-slate-700 focus:border-navy-medium dark:focus:border-brand-blue focus:bg-white dark:focus:bg-slate-800"
            }`}
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email}</span>
          )}
        </div>

        {/* Phone Input */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="phone"
            className="text-xs uppercase font-extrabold text-navy-medium dark:text-slate-200 tracking-widest"
          >
            Phone Number <span className="text-brand-blue">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+91 98765 43210"
            className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border transition-all outline-none rounded-none text-sm ${
              errors.phone
                ? "border-red-500 bg-red-50/20 dark:bg-red-950/20"
                : "border-slate-200 dark:border-slate-700 focus:border-navy-medium dark:focus:border-brand-blue focus:bg-white dark:focus:bg-slate-800"
            }`}
          />
          {errors.phone && (
            <span className="text-xs text-red-500">{errors.phone}</span>
          )}
        </div>

        {/* Company Input */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="company"
            className="text-xs uppercase font-extrabold text-navy-medium dark:text-slate-200 tracking-widest"
          >
            Company Name{" "}
            <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Acme Corp"
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 focus:border-navy-medium dark:focus:border-brand-blue focus:bg-white dark:focus:bg-slate-800 transition-all outline-none rounded-none text-sm"
          />
        </div>
      </div>

      {/* Service Selection */}
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="service"
          className="text-xs uppercase font-extrabold text-navy-medium dark:text-slate-200 tracking-widest"
        >
          Service Required <span className="text-brand-blue">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border transition-all outline-none rounded-none text-sm appearance-none ${
            errors.service
              ? "border-red-500 bg-red-50/20 dark:bg-red-950/20"
              : "border-slate-200 dark:border-slate-700 focus:border-navy-medium dark:focus:border-brand-blue focus:bg-white dark:focus:bg-slate-800"
          }`}
        >
          <option value="">-- Select a Service --</option>
          {services.map((svc) => (
            <option key={svc} value={svc}>
              {svc}
            </option>
          ))}
        </select>
        {errors.service && (
          <span className="text-xs text-red-500">{errors.service}</span>
        )}
      </div>

      {/* Budget Selector */}
      <div className="flex flex-col space-y-3">
        <label className="text-xs uppercase font-extrabold text-navy-medium dark:text-slate-200 tracking-widest">
          Project Budget Range <span className="text-brand-blue">*</span>
        </label>
        <div className="flex flex-wrap gap-3">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => handleBudgetSelect(b)}
              className={`px-4 py-2.5 text-xs font-bold transition-all duration-300 border ${
                formData.budget === b
                  ? "bg-navy-medium dark:bg-brand-blue border-navy-medium dark:border-brand-blue text-white shadow-md"
                  : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-navy-medium dark:text-slate-200 hover:border-navy-medium dark:hover:border-brand-blue hover:bg-white dark:hover:bg-slate-700"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
        {errors.budget && (
          <span className="text-xs text-red-500">{errors.budget}</span>
        )}
      </div>

      {/* Project Details */}
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="message"
          className="text-xs uppercase font-extrabold text-navy-medium dark:text-slate-200 tracking-widest"
        >
          Project Requirements <span className="text-brand-blue">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell us a little about your project, goals and requirements..."
          className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border transition-all outline-none rounded-none text-sm resize-y ${
            errors.message
              ? "border-red-500 bg-red-50/20 dark:bg-red-950/20"
              : "border-slate-200 dark:border-slate-700 focus:border-navy-medium dark:focus:border-brand-blue focus:bg-white dark:focus:bg-slate-800"
          }`}
        />
        {errors.message && (
          <span className="text-xs text-red-500">{errors.message}</span>
        )}
      </div>

      {/* Submit button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center space-x-3 px-8 py-4 bg-navy-medium dark:bg-brand-blue text-white hover:bg-brand-blue dark:hover:bg-sky-400 transition-all duration-300 w-full md:w-auto uppercase tracking-widest text-xs font-bold disabled:opacity-50 disabled:pointer-events-none transform hover:-translate-y-0.5 hover:shadow-lg"
        >
          <span>{isSubmitting ? "Opening WhatsApp..." : "Send Enquiry"}</span>
          <Send className="w-3.5 h-3.5 transition-transform duration-300 transform group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
