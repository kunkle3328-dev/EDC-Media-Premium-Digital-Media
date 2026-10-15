/**
 * Core validation rules and type contracts for EDC Media Lead Capture and Scope Estimation
 */

export interface InquiryPayload {
  fullName: string;
  businessName: string;
  email: string;
  phone?: string;
  website?: string;
  services: string[];
  budget: string;
  timeline: string;
  description: string;
  preferredContact: 'email' | 'phone';
  consent: boolean;
  botCheck?: string; // Honeypot field
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const VALID_SERVICES = [
  'video-production',
  'social-media-management',
  'branding-design',
  'web-development',
  'digital-marketing',
  'ai-automation',
  'custom-multi-service'
] as const;

export const VALID_BUDGET_RANGES = [
  'Under $2,500',
  '$2,500 – $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000+'
] as const;

export const VALID_TIMELINES = [
  'Immediate (Within 2 weeks)',
  '1 Month',
  '2–3 Months',
  'Flexible / Planning Phase'
] as const;

export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  // RFC 5322 compliant regex for practical email validation
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim());
}

export function validatePhone(phone?: string): boolean {
  if (!phone || phone.trim() === '') return true; // Phone is optional
  const phoneClean = phone.replace(/[\s\-\(\)\+\.]/g, '');
  return phoneClean.length >= 7 && phoneClean.length <= 16 && /^\d+$/.test(phoneClean);
}

export function validateUrl(url?: string): boolean {
  if (!url || url.trim() === '') return true; // Website is optional
  try {
    const fullUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
    new URL(fullUrl);
    return true;
  } catch {
    return false;
  }
}

export function validateInquiry(payload: Partial<InquiryPayload>): ValidationResult {
  const errors: Record<string, string> = {};

  // Honeypot check
  if (payload.botCheck && payload.botCheck.trim() !== '') {
    return {
      isValid: false,
      errors: { botCheck: 'Spam submission detected.' }
    };
  }

  // Full Name
  if (!payload.fullName || payload.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  // Business Name
  if (!payload.businessName || payload.businessName.trim().length < 2) {
    errors.businessName = 'Please enter your business or project name.';
  }

  // Email
  if (!payload.email || !validateEmail(payload.email)) {
    errors.email = 'Please provide a valid business email address.';
  }

  // Phone (optional, but validate format if present)
  if (payload.phone && !validatePhone(payload.phone)) {
    errors.phone = 'Please provide a valid phone number or leave blank.';
  }

  // Website (optional, but validate format if present)
  if (payload.website && !validateUrl(payload.website)) {
    errors.website = 'Please enter a valid website address (e.g., example.com).';
  }

  // Services requested (at least one)
  if (!payload.services || !Array.isArray(payload.services) || payload.services.length === 0) {
    errors.services = 'Please select at least one service you are interested in.';
  }

  // Budget
  if (!payload.budget || payload.budget.trim() === '') {
    errors.budget = 'Please select an estimated budget range.';
  }

  // Timeline
  if (!payload.timeline || payload.timeline.trim() === '') {
    errors.timeline = 'Please select your desired timeline.';
  }

  // Project description
  if (!payload.description || payload.description.trim().length < 10) {
    errors.description = 'Please describe your project, objectives, or questions (minimum 10 characters).';
  }

  // Consent
  if (!payload.consent) {
    errors.consent = 'You must agree to the privacy policy to submit an inquiry.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function calculateEstimatedScope(services: string[], budget: string): { tier: string; summary: string } {
  const count = services.length;
  if (count === 0) {
    return { tier: 'Unspecified', summary: 'Select services to estimate scope.' };
  }
  if (count === 1) {
    return {
      tier: 'Focused Engagement',
      summary: `Dedicated deliverable sprint focused on ${services[0].replace('-', ' ')}.`
    };
  }
  if (count <= 3) {
    return {
      tier: 'Multi-Discipline Package',
      summary: `Integrated campaign combining ${count} creative and growth channels.`
    };
  }
  return {
    tier: 'Full Agency Partnership',
    summary: `End-to-end strategic creative, production, web, and marketing scale program.`
  };
}
