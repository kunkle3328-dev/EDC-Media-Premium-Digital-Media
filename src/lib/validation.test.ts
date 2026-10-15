import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateEmail,
  validatePhone,
  validateUrl,
  validateInquiry,
  calculateEstimatedScope
} from './validation.ts';
import type { InquiryPayload } from './validation.ts';

test('validateEmail correctly accepts valid emails', () => {
  assert.equal(validateEmail('client@business.com'), true);
  assert.equal(validateEmail('name.last+tag@sub.domain.co.uk'), true);
  assert.equal(validateEmail('hello@edcmedia.agency'), true);
});

test('validateEmail correctly rejects invalid emails', () => {
  assert.equal(validateEmail(''), false);
  assert.equal(validateEmail('plainaddress'), false);
  assert.equal(validateEmail('@missingusername.com'), false);
  assert.equal(validateEmail('user@.com'), false);
});

test('validatePhone correctly validates phone numbers', () => {
  assert.equal(validatePhone(''), true); // optional
  assert.equal(validatePhone('+1 (555) 019-2834'), true);
  assert.equal(validatePhone('5551234567'), true);
  assert.equal(validatePhone('abc-invalid'), false);
  assert.equal(validatePhone('123'), false); // too short
});

test('validateUrl validates websites properly', () => {
  assert.equal(validateUrl(''), true); // optional
  assert.equal(validateUrl('https://example.com'), true);
  assert.equal(validateUrl('mycompany.co'), true);
});

test('validateInquiry validates full valid inquiry payload', () => {
  const validPayload: InquiryPayload = {
    fullName: 'Sarah Jenkins',
    businessName: 'Apex Robotics',
    email: 'sarah@apexrobotics.io',
    phone: '+1 415-555-0199',
    website: 'apexrobotics.io',
    services: ['video-production', 'branding-design'],
    budget: '$10,000 – $25,000',
    timeline: '1 Month',
    description: 'We need a high-impact commercial video and revised brand identity for our Series A announcement.',
    preferredContact: 'email',
    consent: true
  };

  const result = validateInquiry(validPayload);
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('validateInquiry rejects missing required fields', () => {
  const invalidPayload: Partial<InquiryPayload> = {
    fullName: '',
    businessName: '',
    email: 'bad-email',
    services: [],
    budget: '',
    timeline: '',
    description: 'Short',
    consent: false
  };

  const result = validateInquiry(invalidPayload);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.businessName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.services);
  assert.ok(result.errors.budget);
  assert.ok(result.errors.timeline);
  assert.ok(result.errors.description);
  assert.ok(result.errors.consent);
});

test('validateInquiry catches honeypot spam bot submissions', () => {
  const spamPayload: InquiryPayload = {
    fullName: 'Spam Bot',
    businessName: 'Spam LLC',
    email: 'spam@bot.net',
    services: ['ai-automation'],
    budget: '$25,000+',
    timeline: 'Immediate (Within 2 weeks)',
    description: 'Cheap SEO links click here http://spam.xyz',
    preferredContact: 'email',
    consent: true,
    botCheck: 'I am a hidden bot'
  };

  const result = validateInquiry(spamPayload);
  assert.equal(result.isValid, false);
  assert.equal(result.errors.botCheck, 'Spam submission detected.');
});

test('calculateEstimatedScope categorizes based on discipline count', () => {
  assert.equal(calculateEstimatedScope([], '$5,000').tier, 'Unspecified');
  assert.equal(calculateEstimatedScope(['video-production'], '$5,000').tier, 'Focused Engagement');
  assert.equal(calculateEstimatedScope(['video-production', 'branding-design'], '$10,000').tier, 'Multi-Discipline Package');
  assert.equal(calculateEstimatedScope(['video-production', 'branding-design', 'web-development', 'ai-automation'], '$25,000').tier, 'Full Agency Partnership');
});
