import React, { useState, useEffect } from 'react';
import {
  validateInquiry,
  InquiryPayload,
  VALID_SERVICES,
  VALID_BUDGET_RANGES,
  VALID_TIMELINES,
  calculateEstimatedScope
} from '../lib/validation.ts';
import { SERVICES_DATA, BRAND_CONFIG } from '../data/brandConfig.ts';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Info,
  Calendar,
  DollarSign,
  Briefcase
} from 'lucide-react';

interface InquiryFormProps {
  initialService?: string;
  initialBudget?: string;
  sourceContext?: string;
  className?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  initialService,
  initialBudget,
  sourceContext,
  className = '',
}) => {
  const [formData, setFormData] = useState<InquiryPayload>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    services: initialService ? [initialService] : ['video-production'],
    budget: initialBudget || '$5,000 – $10,000',
    timeline: '1 Month',
    description: '',
    preferredContact: 'email',
    consent: true,
    botCheck: '', // Honeypot
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        services: prev.services.includes(initialService) ? prev.services : [...prev.services, initialService],
      }));
    }
  }, [initialService]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    inquiryId: string;
    message: string;
    integrationStatus?: {
      persisted: boolean;
      emailNotification: string;
      notice: string;
    };
  } | null>(null);

  const toggleService = (serviceSlug: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceSlug);
      const updated = exists
        ? prev.services.filter((s) => s !== serviceSlug)
        : [...prev.services, serviceSlug];
      return { ...prev, services: updated };
    });
    // Clear error if resolved
    if (errors.services) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.services;
        return copy;
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // 1. Client-Side Validation
    const validation = validateInquiry(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      const firstErrorKey = Object.keys(validation.errors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    // 2. Real Server Submission to /api/inquiries
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setServerError(data.message || 'Submission failed. Please check form details.');
        return;
      }

      // Success
      setSubmissionResult(data);
      setErrors({});
    } catch (err) {
      console.error('Submission network error:', err);
      setServerError('A network error occurred while communicating with the EDC Media API. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const estimatedScope = calculateEstimatedScope(formData.services, formData.budget);

  if (submissionResult) {
    return (
      <div className={`p-8 md:p-10 rounded-2xl bg-[#0A1019] border border-[#008CFF]/50 shadow-[0_0_50px_rgba(0,140,255,0.2)] text-left ${className}`}>
        <div className="w-14 h-14 rounded-full bg-[#008CFF]/20 border border-[#008CFF] flex items-center justify-center mb-6 text-[#19B5FF]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#008CFF]/20 text-[#19B5FF] border border-[#008CFF]/40 mb-3">
          Reference ID: {submissionResult.inquiryId}
        </div>

        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
          Inquiry Successfully Received
        </h3>

        <p className="text-sm md:text-base text-[#A7B3C3] leading-relaxed mb-6">
          Thank you, <strong className="text-white">{formData.fullName}</strong>. Your project brief for{' '}
          <strong className="text-white">{formData.businessName}</strong> has been logged into the EDC Media client intake system. An executive partner will review your scope and follow up via{' '}
          <strong className="text-white">{formData.preferredContact === 'phone' && formData.phone ? formData.phone : formData.email}</strong> within 24 business hours.
        </p>

        {/* Selected Services Summary */}
        <div className="p-4 rounded-xl bg-[#0D1521] border border-[#1D3045] mb-6 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-[#A7B3C3]">
            Registered Scope Summary
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {formData.services.map((slug) => {
              const matched = SERVICES_DATA.find((s) => s.slug === slug);
              return (
                <span
                  key={slug}
                  className="px-2.5 py-1 rounded bg-[#05070B] border border-[#1D3045] text-xs font-medium text-white"
                >
                  {matched ? matched.title : slug}
                </span>
              );
            })}
          </div>
          <div className="text-xs text-[#A7B3C3] pt-2 flex items-center gap-4">
            <span>Budget: <strong className="text-white">{formData.budget}</strong></span>
            <span>Timeline: <strong className="text-white">{formData.timeline}</strong></span>
          </div>
        </div>

        {/* Backend & Integration Transparency Notice */}
        <div className="p-4 rounded-xl bg-[#05070B] border border-[#1D3045] text-xs space-y-2 text-[#A7B3C3]">
          <div className="flex items-center gap-2 text-white font-medium">
            <Info className="w-4 h-4 text-[#008CFF]" />
            <span>Intake Pipeline Status</span>
          </div>
          <p>
            {submissionResult.integrationStatus?.notice ||
              'Your submission is securely preserved in persistent storage on the EDC Media server.'}
          </p>
          <div className="text-[11px] text-[#A7B3C3]/80">
            For urgent commercial inquiries, you may also email us directly at{' '}
            <a href={`mailto:${BRAND_CONFIG.contactEmail}`} className="text-[#008CFF] hover:underline">
              {BRAND_CONFIG.contactEmail}
            </a>.
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmissionResult(null);
            setFormData({
              fullName: '',
              businessName: '',
              email: '',
              phone: '',
              website: '',
              services: ['video-production'],
              budget: '$5,000 – $10,000',
              timeline: '1 Month',
              description: '',
              preferredContact: 'email',
              consent: true,
              botCheck: '',
            });
          }}
          className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#008CFF] hover:text-[#19B5FF] transition-colors"
        >
          <span>Submit Another Project Inquiry</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`p-6 sm:p-8 md:p-10 rounded-2xl bg-[#0A1019] border border-[#1D3045] relative overflow-hidden shadow-2xl ${className}`}
    >
      {/* Subtle top electric glow */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#008CFF] to-transparent" />

      {sourceContext && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#0D1521] border border-[#1D3045] text-[#19B5FF] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Inquiring for: {sourceContext}</span>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Request a Consultation & Quote
        </h3>
        <p className="text-sm text-[#A7B3C3] mt-2">
          Tell us about your project goals. We will analyze your scope and return a strategic proposal with clear timelines and milestones.
        </p>
      </div>

      {serverError && (
        <div className="p-4 mb-6 rounded-xl bg-red-950/40 border border-red-500/50 flex items-start gap-3 text-red-200 text-sm">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-white">Submission Notice</div>
            <div>{serverError}</div>
          </div>
        </div>
      )}

      {/* Honeypot hidden input */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="field-botCheck">Do not fill this</label>
        <input
          type="text"
          id="field-botCheck"
          name="botCheck"
          value={formData.botCheck}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-6">
        {/* Step 1: Select Services */}
        <div id="field-services">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-white">
              1. Services Required <span className="text-[#008CFF]">*</span>
            </label>
            <span className="text-xs text-[#A7B3C3]">Select all that apply</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {SERVICES_DATA.map((service) => {
              const isSelected = formData.services.includes(service.slug);
              return (
                <button
                  type="button"
                  key={service.id}
                  onClick={() => toggleService(service.slug)}
                  className={`p-3 rounded-xl text-left border transition-all text-xs flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#008CFF]/15 border-[#008CFF] text-white shadow-[0_0_15px_rgba(0,140,255,0.25)]'
                      : 'bg-[#0D1521] border-[#1D3045] text-[#A7B3C3] hover:border-slate-600 hover:text-white'
                  }`}
                >
                  <div className="font-semibold">{service.title}</div>
                  <div className="text-[11px] opacity-75 mt-1">{service.badge}</div>
                </button>
              );
            })}
            {/* Custom Multi-service option */}
            <button
              type="button"
              onClick={() => toggleService('custom-multi-service')}
              className={`p-3 rounded-xl text-left border transition-all text-xs flex flex-col justify-between ${
                formData.services.includes('custom-multi-service')
                  ? 'bg-[#008CFF]/15 border-[#008CFF] text-white shadow-[0_0_15px_rgba(0,140,255,0.25)]'
                  : 'bg-[#0D1521] border-[#1D3045] text-[#A7B3C3] hover:border-slate-600 hover:text-white'
              }`}
            >
              <div className="font-semibold">Custom / Multi-Discipline</div>
              <div className="text-[11px] opacity-75 mt-1">Full Agency Scope</div>
            </button>
          </div>

          {errors.services && (
            <p className="mt-1.5 text-xs text-red-400">{errors.services}</p>
          )}

          {/* Scope preview pill */}
          <div className="mt-3 p-2.5 rounded-lg bg-[#05070B] border border-[#1D3045] flex items-center justify-between text-xs">
            <span className="text-[#A7B3C3]">Engagement Model:</span>
            <span className="font-semibold text-[#19B5FF]">{estimatedScope.tier}</span>
          </div>
        </div>

        {/* Step 2: Contact Info */}
        <div className="pt-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-white mb-3">
            2. Contact & Organization Details
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div id="field-fullName">
              <label htmlFor="fullName" className="block text-xs text-[#A7B3C3] mb-1">
                Full Name <span className="text-[#008CFF]">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Alex Vance"
                className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0D1521] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#008CFF] transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-[#1D3045] focus:border-[#008CFF]'
                }`}
              />
              {errors.fullName && <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>}
            </div>

            <div id="field-businessName">
              <label htmlFor="businessName" className="block text-xs text-[#A7B3C3] mb-1">
                Business / Organization <span className="text-[#008CFF]">*</span>
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                value={formData.businessName}
                onChange={handleChange}
                placeholder="e.g. Lumina Technologies"
                className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0D1521] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#008CFF] transition-colors ${
                  errors.businessName ? 'border-red-500' : 'border-[#1D3045] focus:border-[#008CFF]'
                }`}
              />
              {errors.businessName && (
                <p className="mt-1 text-xs text-red-400">{errors.businessName}</p>
              )}
            </div>

            <div id="field-email">
              <label htmlFor="email" className="block text-xs text-[#A7B3C3] mb-1">
                Business Email <span className="text-[#008CFF]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@lumina.com"
                className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0D1521] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#008CFF] transition-colors ${
                  errors.email ? 'border-red-500' : 'border-[#1D3045] focus:border-[#008CFF]'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>

            <div id="field-phone">
              <label htmlFor="phone" className="block text-xs text-[#A7B3C3] mb-1">
                Phone Number <span className="text-[#A7B3C3]/60">(Optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0D1521] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#008CFF] transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-[#1D3045] focus:border-[#008CFF]'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
            </div>
          </div>

          <div className="mt-4" id="field-website">
            <label htmlFor="website" className="block text-xs text-[#A7B3C3] mb-1">
              Current Website / Social Profile <span className="text-[#A7B3C3]/60">(Optional)</span>
            </label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://lumina.com or @handle"
              className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0D1521] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#008CFF] transition-colors ${
                errors.website ? 'border-red-500' : 'border-[#1D3045] focus:border-[#008CFF]'
              }`}
            />
            {errors.website && <p className="mt-1 text-xs text-red-400">{errors.website}</p>}
          </div>
        </div>

        {/* Step 3: Budget & Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div id="field-budget">
            <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
              Estimated Budget <span className="text-[#008CFF]">*</span>
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1521] border border-[#1D3045] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#008CFF]"
            >
              {VALID_BUDGET_RANGES.map((b) => (
                <option key={b} value={b} className="bg-[#0A1019] text-white">
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div id="field-timeline">
            <label htmlFor="timeline" className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
              Desired Timeline <span className="text-[#008CFF]">*</span>
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1521] border border-[#1D3045] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#008CFF]"
            >
              {VALID_TIMELINES.map((t) => (
                <option key={t} value={t} className="bg-[#0A1019] text-white">
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Step 4: Project Description */}
        <div id="field-description">
          <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-white mb-1">
            Project Description & Objectives <span className="text-[#008CFF]">*</span>
          </label>
          <p className="text-xs text-[#A7B3C3] mb-2">
            What are your goals, deliverables, or current pain points? (Minimum 10 characters)
          </p>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us what you want to build, market, or scale. If you have reference links, deadlines, or specific technical criteria, include them here..."
            className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0D1521] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#008CFF] transition-colors resize-y ${
              errors.description ? 'border-red-500' : 'border-[#1D3045] focus:border-[#008CFF]'
            }`}
          />
          {errors.description && (
            <p className="mt-1 text-xs text-red-400">{errors.description}</p>
          )}
        </div>

        {/* Step 5: Preferred Contact Method */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
            Preferred Follow-Up Method
          </label>
          <div className="flex items-center gap-6 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value="email"
                checked={formData.preferredContact === 'email'}
                onChange={handleChange}
                className="text-[#008CFF] focus:ring-[#008CFF]"
              />
              <span className="text-white">Email Response</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value="phone"
                checked={formData.preferredContact === 'phone'}
                onChange={handleChange}
                className="text-[#008CFF] focus:ring-[#008CFF]"
              />
              <span className="text-white">Phone / WhatsApp Call</span>
            </label>
          </div>
        </div>

        {/* Consent Checkbox */}
        <div id="field-consent" className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 rounded text-[#008CFF] focus:ring-[#008CFF]"
            />
            <span className="text-xs text-[#A7B3C3] leading-relaxed">
              I agree to the processing of this project inquiry in accordance with the{' '}
              <a href="/privacy-policy" className="text-[#008CFF] hover:underline">
                EDC Media Privacy Policy
              </a>
              . We do not sell your personal data or spam your inbox.
            </span>
          </label>
          {errors.consent && <p className="mt-1 text-xs text-red-400">{errors.consent}</p>}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-extrabold text-white bg-[#008CFF] hover:bg-[#19B5FF] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_0_25px_rgba(0,140,255,0.45)] hover:shadow-[0_0_35px_rgba(25,181,255,0.65)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008CFF] focus:ring-offset-[#05070B]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Transmitting Inquiry to Agency Pipeline...</span>
              </>
            ) : (
              <>
                <span>Submit Project Inquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};
