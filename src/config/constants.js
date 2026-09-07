/**
 * Centralized Contact & Business Configuration for DigitalWings
 */

// WhatsApp Business Number in international format (CountryCode + Number, no '+', spaces, or hyphens)
export const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER || "917379297720";

/**
 * Generates a cleanly structured, professional WhatsApp message from inquiry form data.
 * @param {Object} formData
 * @param {string} formData.name
 * @param {string} formData.email
 * @param {string} formData.phone
 * @param {string} [formData.company]
 * @param {string} formData.service
 * @param {string} formData.budget
 * @param {string} formData.message
 * @returns {string} Formatted WhatsApp message string
 */
export const generateWhatsAppMessage = (formData) => {
  const name = formData.name?.trim() || "";
  const email = formData.email?.trim() || "";
  const phone = formData.phone?.trim() || "";
  const company = formData.company?.trim() || "";
  const service = formData.service?.trim() || "";
  const budget = formData.budget?.trim() || "";
  const details = formData.message?.trim() || "";

  const companySection = company ? `🏢 Company: ${company}\n` : "";

  return `Hello DigitalWings 👋

I would like to enquire about your services.

━━━━━━━━━━━━━━━━━━

📋 INQUIRY DETAILS

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
${companySection}🛠️ Service Required: ${service}
💰 Project Budget: ${budget}

📝 Project Details:
${details}

━━━━━━━━━━━━━━━━━━

Looking forward to hearing from you.

Thank you!`;
};
