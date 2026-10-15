export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  heroHeadline: string;
  heroSubheadline: string;
  valueProposition: string;
  problemsSolved: string[];
  deliverables: string[];
  targetAudience: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
  gradient: string;
  badge: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Video Production' | 'Social Media' | 'Branding & Design' | 'Web Development' | 'Digital Marketing' | 'AI & Automation';
  categorySlug: string;
  isConcept: boolean;
  coverImage: string;
  galleryImages?: string[];
  summary: string;
  role: string;
  objectives: string[];
  deliverables: string[];
  verifiedOutcomes?: string[];
  technologiesOrEquipment: string[];
}

export interface PricingTier {
  id: string;
  title: string;
  category: 'One-Time Project' | 'Monthly Retainer' | 'Custom Engagement';
  shortDesc: string;
  startingRange: string;
  bestFor: string;
  features: string[];
  deliverablesSummary: string;
  ctaText: string;
}

export const BRAND_CONFIG = {
  name: 'EDC Media',
  legalName: 'EDC Media Agency',
  tagline: 'CREATE. MARKET. BUILD. GROW.',
  supportingStatement: 'Your Vision. Our Execution.',
  contactEmail: 'contactedcmedia@gmail.com',
  phone: 'Available on consultation request',
  headquarters: 'Digital Agency — Global & Remote Operations',
  socialLinks: {
    instagram: 'https://instagram.com/edcmedia',
    linkedin: 'https://linkedin.com/company/edcmedia',
    youtube: 'https://youtube.com/@edcmedia',
    x: 'https://x.com/edcmedia'
  },
  colors: {
    primaryBg: '#05070B',
    secondaryBg: '#0A1019',
    cardBg: '#0D1521',
    electricBlue: '#008CFF',
    brightBlue: '#19B5FF',
    white: '#FFFFFF',
    secondaryText: '#A7B3C3',
    subtleBorders: '#1D3045'
  }
};

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'video-production',
    slug: 'video-production',
    title: 'Video Production',
    badge: 'Cinematic Visuals',
    shortDescription: 'High-impact commercials, brand films, and social video content engineered to capture attention and elevate your brand.',
    longDescription: 'Video is the most powerful medium to transmit emotion, establish authority, and communicate complex value propositions. EDC Media directs, shoots, and edits broadcast-grade visual stories that turn passive viewers into loyal brand advocates.',
    heroHeadline: 'CINEMATIC VIDEO THAT COMMANDS ATTENTION.',
    heroSubheadline: 'From high-concept brand films to conversion-focused commercials, we handle every stage of pre-production, filming, and post-production.',
    iconName: 'Video',
    gradient: 'from-blue-600/30 to-cyan-500/10',
    valueProposition: 'We bridge commercial artistry with commercial impact: cinematic visuals crafted with strategic marketing psychology.',
    problemsSolved: [
      'Inconsistent, low-quality video that cheapens the perceived value of your product or company.',
      'Lack of video creative direction that aligns with actual sales goals.',
      'Fragmented vendor management between creative directors, camera crews, and editors.',
      'Difficulty producing video content optimized for both desktop widescreen and vertical mobile feeds.'
    ],
    deliverables: [
      'Commercials & Promotional Videos (4K/6K Cinema Cameras)',
      'Cinematic Brand Story Films & Founder Documentaries',
      'High-Converting Social Media Video Content (Reels, TikTok, Shorts)',
      'Product Showcases & Feature Demonstrations',
      'Keynote & Corporate Event Coverage',
      'Advanced Post-Production: Sound Design, Color Grading & Motion Graphics'
    ],
    targetAudience: [
      'Growing brands launching a flagship product or service',
      'Founders seeking a polished brand identity film',
      'E-commerce brands needing high-converting video ad creatives',
      'B2B organizations looking for clean corporate and showcase media'
    ],
    processSteps: [
      { title: '1. Concept & Scripting', description: 'Storyboards, narrative structure, location scouting, talent casting, and visual moodboards.' },
      { title: '2. Production & Shoot', description: 'On-set direction with cinema cameras, studio lighting, professional audio, and gimbals.' },
      { title: '3. Post-Production', description: 'Editorial cut, rhythm pacing, DaVinci Resolve color grading, custom sound effects, and sound mixing.' },
      { title: '4. Multi-Platform Delivery', description: 'Delivery in widescreen 16:9, vertical 9:16, square 1:1, and teaser cuts with subtitles.' }
    ],
    faqs: [
      { question: 'What equipment does EDC Media utilize?', answer: 'We deploy professional cinema setups including full-frame cinema cameras, prime anamorphic and spherical lenses, wireless audio, studio lighting kits, and licensed drone aerial systems.' },
      { question: 'What is typical delivery turnaround?', answer: 'Commercial edits and social packages typically take 2 to 3 weeks from wrap of shoot day to master delivery, including review rounds.' },
      { question: 'Can you provide scripts and creative concepts?', answer: 'Yes. Every project includes creative direction, narrative treatment, and script development.' }
    ],
    relatedServices: ['social-media-management', 'digital-marketing', 'branding-design']
  },
  {
    id: 'social-media-management',
    slug: 'social-media-management',
    title: 'Social Media Management',
    badge: 'Audience Growth',
    shortDescription: 'Data-driven content strategy, consistent creation, community building, and end-to-end multi-platform management.',
    longDescription: 'Building a relevant brand requires an active, engaging presence across social ecosystems. We eliminate the guesswork with weekly content calendars, high-velocity creative production, and proactive audience engagement.',
    heroHeadline: 'TURN SOCIAL CHANNELS INTO GROWTH ENGINES.',
    heroSubheadline: 'Strategic content, consistent publishing, and authentic community engagement that builds brand equity every single day.',
    iconName: 'Share2',
    gradient: 'from-sky-600/30 to-blue-500/10',
    valueProposition: 'We do not just post for vanity metrics; we cultivate an engaged audience that knows, likes, trusts, and buys from your brand.',
    problemsSolved: [
      'Inconsistent posting schedules that kill algorithm momentum.',
      'Content that looks like generic stock photos and fails to generate comments or shares.',
      'Internal team burnout trying to keep up with daily publishing and community replies.',
      'No clear attribution between social media efforts and qualified pipeline leads.'
    ],
    deliverables: [
      'Comprehensive Multi-Platform Social Media Strategy',
      'Monthly Content Calendars with Strategic Pillars',
      'Original Content Creation (Short-Form Video, Carousels, Static Graphics)',
      'Dedicated Account Management, Scheduling & Copywriting',
      'Community Engagement, Comment Moderation & Direct Message Triage',
      'Transparent Monthly Performance & Growth Analytics Reports'
    ],
    targetAudience: [
      'D2C brands aiming to build an active following and UGC engine',
      'Service businesses and agencies establishing market authority',
      'Executives and founders looking for personal brand management'
    ],
    processSteps: [
      { title: '1. Brand Audit & Archetype', description: 'Analyze your current audience demographics, competitors, and tone of voice.' },
      { title: '2. Content Pillar Architecture', description: 'Build recurring content series designed for education, entertainment, and conversion.' },
      { title: '3. Asset Production & Scheduling', description: 'Batch-produce photography, reels, and copy approved two weeks in advance.' },
      { title: '4. Engagement & Iteration', description: 'Daily moderation combined with weekly metric review to double down on winning hooks.' }
    ],
    faqs: [
      { question: 'Which platforms do you manage?', answer: 'We specialize in Instagram, TikTok, LinkedIn, YouTube Shorts, and X (Twitter), tailored to where your target buyers spend time.' },
      { question: 'Do we have approval over what gets posted?', answer: 'Always. You receive an interactive staging calendar with copy, hashtags, and media assets for full approval before anything goes live.' }
    ],
    relatedServices: ['video-production', 'branding-design', 'digital-marketing']
  },
  {
    id: 'branding-design',
    slug: 'branding-design',
    title: 'Branding & Design',
    badge: 'Identity Systems',
    shortDescription: 'Memorable visual identities, brand strategy, design systems, and marketing collateral that set you apart.',
    longDescription: 'A great brand is not just a logo; it is an unforgettable system of visual cues, typography, color palettes, and emotional tone. EDC Media builds cohesive brand identities engineered to make an indelible mark in competitive markets.',
    heroHeadline: 'DISTINCTIVE IDENTITIES THAT LEAVE A MARK.',
    heroSubheadline: 'Complete brand systems that command premium pricing, inspire customer trust, and unify your presence across all touchpoints.',
    iconName: 'Palette',
    gradient: 'from-indigo-600/30 to-blue-500/10',
    valueProposition: 'We create iconic design systems that elevate your market positioning from commodity to industry leader.',
    problemsSolved: [
      'Outdated or amateurish visual identity that undermines buyer confidence.',
      'Inconsistent branding across website, slide decks, social channels, and packaging.',
      'Lack of formal brand guidelines, leading to messy execution by internal teams.',
      'Struggling to differentiate your service offering in a crowded sector.'
    ],
    deliverables: [
      'Comprehensive Brand Strategy & Positioning Architecture',
      'Primary, Secondary & Monogram Logo Suites (Vector & Scalable)',
      'Custom Color Palettes, Contrast Guidelines & Typography Hierarchy',
      'Brand Style Guides (50+ Page Comprehensive PDF & Figma System)',
      'Marketing Collateral: Business Cards, Pitch Decks & Social Templates',
      'Packaging, Merchandise & Environmental Signage Specifications'
    ],
    targetAudience: [
      'Startups ready to launch with an authoritative market presence',
      'Established businesses undergoing a strategic rebrand or expansion',
      'Brands merging or launching new subsidiary product lines'
    ],
    processSteps: [
      { title: '1. Discovery & Competitive Mapping', description: 'Deep dive into brand ethos, ideal customer personas, and visual landscape analysis.' },
      { title: '2. Creative Directions & Moodboards', description: 'Presenting distinct visual territories including typography, marks, and tonal treatments.' },
      { title: '3. Identity Development & Refinement', description: 'Fleshing out the selected direction with extensive real-world mockups and stress testing.' },
      { title: '4. Asset Delivery & Brand Guidelines', description: 'Packaging all master vector assets, web font licenses, and guidelines in cloud storage.' }
    ],
    faqs: [
      { question: 'What file formats will I receive?', answer: 'You receive vector master files (AI, SVG, EPS, PDF) along with web-optimized PNG, WebP, and icon suites across all colorways.' },
      { question: 'Do I own 100% of the copyright?', answer: 'Yes. Upon final settlement, all intellectual property and usage rights transfer entirely to your business.' }
    ],
    relatedServices: ['web-development', 'video-production', 'digital-marketing']
  },
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Design & Development',
    badge: 'High-Converting Digital',
    shortDescription: 'Bespoke, lightning-fast websites and web applications built with modern frameworks, tailored for conversion and search visibility.',
    longDescription: 'Your website is your 24/7 flagship storefront. EDC Media engineers bespoke digital web experiences that pair world-class aesthetics with blazing fast performance, clean code architecture, and optimized conversion pathways.',
    heroHeadline: 'BESPOKE WEBSITES ENGINEERED TO CONVERT.',
    heroSubheadline: 'Ultra-fast, responsive web experiences with cinematic layouts, modern typography, and robust technical infrastructure.',
    iconName: 'Code',
    gradient: 'from-blue-600/30 to-teal-500/10',
    valueProposition: 'We combine UI/UX design excellence with clean, modern engineering so your digital flagship never compromises on speed, accessibility, or beauty.',
    problemsSolved: [
      'Slow, bloated legacy WordPress or template sites that lose mobile visitors.',
      'High bounce rates due to confusing user journeys and weak call-to-actions.',
      'Websites that break or look disjointed on modern smartphone and tablet displays.',
      'Difficulty updating content or adding integrations without breaking code.'
    ],
    deliverables: [
      'Custom Website UI/UX Architecture & Responsive Layouts',
      'Full-Stack Frontend & Backend Engineering (React, Next.js, Node/Express)',
      'High-Converting Landing Pages for Paid Acquisition Campaigns',
      'Modern E-Commerce Solutions (Shopify, Custom Headless Commerce)',
      'Enterprise Search Engine Optimization (Technical, On-Page & Schema)',
      'CMS Integration & Ongoing Maintenance / Security Protocols'
    ],
    targetAudience: [
      'High-growth companies needing an upgrade from off-the-shelf templates',
      'Brands launching digital campaigns that need dedicated landing pages',
      'B2B firms requiring interactive quote builders or client portal features'
    ],
    processSteps: [
      { title: '1. Information Architecture & UX', description: 'User flow mapping, site taxonomy, wireframes, and conversion journey planning.' },
      { title: '2. Visual Design & Prototyping', description: 'High-fidelity Figma prototypes with custom typography, dark aesthetic, and subtle micro-interactions.' },
      { title: '3. Full-Stack Development', description: 'Clean TypeScript/React code with zero bloated plugins, tested across Chrome, Safari, iOS, and Android.' },
      { title: '4. Testing, SEO & Launch', description: 'Lighthouse audit, Core Web Vitals optimization, form testing, and zero-downtime deployment.' }
    ],
    faqs: [
      { question: 'Will my website work seamlessly on mobile phones?', answer: 'Absolutely. We design mobile-first with touch-optimized navigation, adaptive images, and fluid responsive breakpoints.' },
      { question: 'How easily can our team update text and photos?', answer: 'We structure content cleanly through headless CMS or configuration modules so your team can easily update content without touching raw code.' }
    ],
    relatedServices: ['branding-design', 'digital-marketing', 'ai-automation']
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    badge: 'ROI & Acquisition',
    shortDescription: 'Multi-channel customer acquisition campaigns, Google/Meta paid advertising, SEO, and strategic email funnels.',
    longDescription: 'Traffic without intent is useless. EDC Media executes targeted paid advertising, organic search authority campaigns, and automated lead nurturing systems that turn browsers into paying clients.',
    heroHeadline: 'STRATEGIC MARKETING THAT GENERATES QUALIFIED PIPELINE.',
    heroSubheadline: 'Targeted paid advertising, organic search visibility, and retention marketing engineered for measurable commercial returns.',
    iconName: 'TrendingUp',
    gradient: 'from-emerald-600/30 to-blue-500/10',
    valueProposition: 'We focus on bottom-line business metrics: customer acquisition cost (CAC), return on ad spend (ROAS), and lifetime customer value (LTV).',
    problemsSolved: [
      'Wasted ad budgets on broad keywords and untargeted demographics.',
      'Unpredictable lead flow that leaves your sales pipeline dry.',
      'Poor attribution between marketing dollars spent and actual revenue generated.',
      'Lack of coordinated messaging across Google Search, Meta ads, and email funnels.'
    ],
    deliverables: [
      'Paid Ad Management (Google Ads, Meta/Instagram Ads, LinkedIn Ads, YouTube)',
      'Search Engine Optimization (Technical SEO, Content Strategy & Backlinks)',
      'Conversion Rate Optimization (CRO) & A/B Testing Protocols',
      'Automated Email Lead Nurture & Retention Sequence Design',
      'Full-Funnel Analytics Tracking (Google Analytics 4, Meta Pixel, Conversion API)',
      'Weekly Spend & Performance Dashboard with Transparent Reporting'
    ],
    targetAudience: [
      'Businesses looking to scale revenue predictably via paid media',
      'Companies wanting to rank for high-intent search keywords',
      'Brands wanting to maximize the revenue generated from existing site traffic'
    ],
    processSteps: [
      { title: '1. Funnel & Audience Audit', description: 'Analyze historical ad accounts, conversion rates, and competitor positioning.' },
      { title: '2. Campaign & Creative Build', description: 'Develop targeted ad copy, high-impact video/image creative, and dedicated landing pages.' },
      { title: '3. Tracking & Calibration', description: 'Implement server-side tracking, test event firing, and launch structured campaign tests.' },
      { title: '4. Scaling & Optimization', description: 'Reallocate budget to top-performing ad sets and refine audience segments for lower CAC.' }
    ],
    faqs: [
      { question: 'How do you track return on ad spend (ROAS)?', answer: 'We set up server-side conversion tracking and UTM parameters to monitor every dollar from click to checkout or inquiry.' },
      { question: 'What is the minimum ad spend required?', answer: 'We recommend a minimum paid media budget of $2,000 to $5,000/month to ensure sufficient testing data for algorithms to optimize.' }
    ],
    relatedServices: ['video-production', 'web-development', 'social-media-management']
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI & Workflow Automation',
    badge: 'Operational Speed',
    shortDescription: 'Custom AI agent integrations, automated lead qualification, CRM workflows, and business intelligence systems.',
    longDescription: 'Automate tedious operational bottlenecks so your team can focus on high-leverage growth. EDC Media designs secure, custom AI workflows, automated lead triage pipelines, and CRM synchronizations that run 24/7 without manual intervention.',
    heroHeadline: 'SCALE OPERATIONS WITHOUT SCALING HEADCOUNT.',
    heroSubheadline: 'Smart lead qualification, automated client onboarding, and bespoke AI workflows designed around your business logic.',
    iconName: 'Cpu',
    gradient: 'from-blue-600/30 to-violet-500/10',
    valueProposition: 'We introduce pragmatic, reliable AI integrations that cut response times from hours to seconds and eliminate repetitive manual data entry.',
    problemsSolved: [
      'Slow response times to new inbound leads, allowing prospects to hire competitors.',
      'Manual, error-prone data transfer between website forms, email, and CRM tools.',
      'Customer support teams bogged down by repetitive tier-1 FAQs.',
      'Lack of automated follow-ups for proposals and quote requests.'
    ],
    deliverables: [
      'Instant Inbound Lead Qualification & SMS/Email Auto-Triage',
      'AI-Powered Customer Support & Interactive Knowledge Bases',
      'Automated Appointment Booking & Calendar Sync Workflows',
      'CRM Integration & Multi-Tool Zapier/Make/Webhook Pipelines',
      'Automated Executive Reporting & Metric Dashboards',
      'Custom LLM Solutions & Internal Agent Implementations'
    ],
    targetAudience: [
      'Agencies and service firms overwhelmed by lead intake and scheduling',
      'E-commerce operations needing automated order status and ticket routing',
      'Enterprises seeking internal AI document search and knowledge assistants'
    ],
    processSteps: [
      { title: '1. Workflow Bottleneck Mapping', description: 'Identify repetitive friction points where staff spends manual time.' },
      { title: '2. Architecture & Security Design', description: 'Design secure API pipelines with fallback safeguards and human-in-the-loop controls.' },
      { title: '3. Build & Integration Testing', description: 'Construct workflows in sandbox environments, testing edge cases and failover logic.' },
      { title: '4. Deployment & Team Training', description: 'Go-live with real-time alerting, error notifications, and operational documentation.' }
    ],
    faqs: [
      { question: 'Will AI replace our human staff?', answer: 'No. Our automations are engineered to handle repetitive administrative friction so your team can focus on creative strategy, sales, and client relationships.' },
      { question: 'Is our company data kept secure?', answer: 'Yes. We strictly use enterprise APIs with zero data training clauses and encrypted credential handling.' }
    ],
    relatedServices: ['web-development', 'digital-marketing', 'social-media-management']
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'lumina-brand-film',
    title: 'Lumina Automotive: Flagship Electric Showcase',
    category: 'Video Production',
    categorySlug: 'video-production',
    isConcept: true,
    coverImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    summary: 'A 90-second cinematic brand film capturing high-speed nighttime dynamics and futuristic cockpit design.',
    role: 'Creative Direction, Cinematography, Color Grading, Sound Design',
    objectives: [
      'Establish a futuristic, high-performance aesthetic for luxury electric mobility.',
      'Produce vertical cutdowns for viral TikTok and Instagram Reels distribution.',
      'Highlight aerodynamic contouring with dynamic car-rig camera movements.'
    ],
    deliverables: [
      '90-second 4K Cinema Master Film',
      'Four 15-second Vertical Social Teasers',
      'Custom Electronic Orchestral Score & Sound Design',
      'High-Resolution Still Photography Suite'
    ],
    technologiesOrEquipment: ['RED V-Raptor 8K Cinema Camera', 'Cooke Anamorphic Prime Lenses', 'DaVinci Resolve Studio', 'DJI Ronin 2 Car Rig']
  },
  {
    id: 'cortexa-ai-platform',
    title: 'Cortexa: AI Command Center & Brand Identity',
    category: 'AI & Automation',
    categorySlug: 'ai-automation',
    isConcept: true,
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    summary: 'Comprehensive brand identity and dark-mode command center interface for an enterprise workflow intelligence engine.',
    role: 'Brand Architecture, UX/UI Interface Design, Workflow Automation Architecture',
    objectives: [
      'Design a command center HUD that presents high-density data without visual clutter.',
      'Incorporate real-time pipeline visualization and automated triage pathways.',
      'Create an electric-blue and obsidian brand system that conveys technical superiority.'
    ],
    deliverables: [
      'Complete Web UI Design System in Figma (80+ Components)',
      'Automated Lead Scoring and Triage Pipeline Mockup',
      'Interactive Dashboard Prototype with Dark Mode Aesthetics',
      'Brand Style Guide & Iconography Suite'
    ],
    technologiesOrEquipment: ['React & Tailwind CSS', 'Figma Prototyping', 'Make/Zapier Webhook Engine', 'TypeScript']
  },
  {
    id: 'vanguard-apparel-rebrand',
    title: 'Vanguard Athletics: Global Visual Identity',
    category: 'Branding & Design',
    categorySlug: 'branding-design',
    isConcept: true,
    coverImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    summary: 'Complete identity system for a performance streetwear label, including custom typography and sustainable packaging.',
    role: 'Brand Strategy, Logo System, Packaging Design, Art Direction',
    objectives: [
      'Differentiate from generic gym apparel with an aggressive, minimalist luxury edge.',
      'Design modular hangtags and shipping boxes utilizing recycled matte black stock.',
      'Establish typography rules that translate seamlessly across physical garments and mobile apps.'
    ],
    deliverables: [
      'Primary, Secondary, and Monogram Mark Suites',
      'Custom Geometric Display Typography',
      'Eco-Friendly Garment Hangtags & Packaging Specs',
      '60-Page Brand Guidelines Manual'
    ],
    technologiesOrEquipment: ['Adobe Illustrator', 'Cinema 4D Packaging Renders', 'Custom Font Foundry Tools']
  },
  {
    id: 'stride-fintech-web',
    title: 'Stride Capital: High-Speed Web Experience',
    category: 'Web Development',
    categorySlug: 'web-development',
    isConcept: true,
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    summary: 'Bespoke web architecture for a private equity and venture firm, engineered for sub-second page loads and clear LP conversion.',
    role: 'Information Architecture, UI Design, Full-Stack Frontend Engineering',
    objectives: [
      'Deliver a lightning-fast digital flagship scoring 98+ on Google Lighthouse.',
      'Implement an interactive portfolio filter allowing prospective investors to browse active deals.',
      'Ensure zero layout shift across all viewport sizes.'
    ],
    deliverables: [
      'Responsive React/Next.js Web Application',
      'Interactive Deal Flow Explorer & Filter',
      'Encrypted Inbound Pitch Deck Submission Portal',
      'Technical SEO & OpenGraph Card Infrastructure'
    ],
    technologiesOrEquipment: ['React', 'TypeScript', 'Tailwind CSS', 'Vite & Node.js']
  },
  {
    id: 'nexus-omnichannel-growth',
    title: 'Nexus Audio: Multi-Channel Launch Campaign',
    category: 'Digital Marketing',
    categorySlug: 'digital-marketing',
    isConcept: true,
    coverImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    summary: 'Integrated paid acquisition and email retargeting campaign for the global launch of audiophile studio headphones.',
    role: 'Paid Media Strategy, Creative Ad Production, Conversion Funnel Architecture',
    objectives: [
      'Structure Google Search & YouTube ad campaigns capturing high-intent audiophile searches.',
      'A/B test 18 video ad hooks highlighting acoustic noise cancellation.',
      'Implement automated post-click email sequences for abandoned checkouts.'
    ],
    deliverables: [
      'Multi-Tier Paid Media Strategy Deck',
      '18 Short-Form Video Ad Assets & Carousel Variants',
      'High-Converting Landing Page with Sticky Sticky Buy Triggers',
      'Full Tracking Infrastructure with GA4 & Meta CAPI'
    ],
    technologiesOrEquipment: ['Google Ads', 'Meta Ads Manager', 'Klaviyo Email Flows', 'Figma Ad Design']
  },
  {
    id: 'aurora-social-engine',
    title: 'Aurora Botanicals: Organic Social Engine',
    category: 'Social Media',
    categorySlug: 'social-media-management',
    isConcept: true,
    coverImage: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1200&q=80',
    summary: 'Holistic content calendar, community management, and daily short-form video production for a premium skincare brand.',
    role: 'Content Strategy, Reels Production, Copywriting, Community Management',
    objectives: [
      'Transition brand feed from static stock photos to dynamic behind-the-scenes laboratory reels.',
      'Establish a 14-day advance approval calendar with aesthetic tonal cohesion.',
      'Engage skincare creators and dermatologists in comments to boost organic discovery.'
    ],
    deliverables: [
      '60 Original Reels & TikTok Videos per Quarter',
      'Custom Aesthetic Story Highlight Templates',
      'Active Community Moderation Protocol',
      'Bi-Weekly Growth Analytics Reports'
    ],
    technologiesOrEquipment: ['Sony FX3 Cinema Line', 'Adobe Premiere Pro', 'Notion Content OS', 'CapCut Pro']
  }
];

export const PRICING_PACKAGES: PricingTier[] = [
  {
    id: 'one-time-creative',
    title: 'One-Time Creative Projects',
    category: 'One-Time Project',
    shortDesc: 'Focused sprints for companies needing high-impact individual deliverables with clear milestones and defined completion dates.',
    startingRange: 'Custom Quote Based on Scope',
    bestFor: 'New brand launches, website redesigns, flagship commercials, and targeted marketing campaigns.',
    deliverablesSummary: 'Complete discovery, creative treatment, production/development, revisions, and master asset handoff.',
    features: [
      'Dedicated project manager and lead creative director',
      'Full brand asset ownership and commercial usage rights',
      'Milestone-based delivery schedule with progress check-ins',
      'Two rounds of revisions included on all agreed deliverables',
      'Complete vector, 4K video, or clean codebase handoff'
    ],
    ctaText: 'Request Project Quote'
  },
  {
    id: 'monthly-partnership',
    title: 'Monthly Growth Retainers',
    category: 'Monthly Retainer',
    shortDesc: 'Ongoing collaborative partnership providing continuous content creation, social media management, marketing, and web optimization.',
    startingRange: 'Flexible Monthly Commitment',
    bestFor: 'Growing companies requiring a full creative and marketing department without internal hiring overhead.',
    deliverablesSummary: 'Consistent monthly content output, dedicated management hours, weekly sprint calls, and transparent reporting.',
    features: [
      'Continuous monthly content production (Video, Social, Copy)',
      'Active paid ad management and conversion rate tuning',
      'Dedicated Slack/Teams channel for rapid communication',
      'Priority scheduling on camera crews and engineering sprints',
      'Monthly strategic review and pipeline optimization'
    ],
    ctaText: 'Explore Retainer Partnership'
  },
  {
    id: 'custom-engagement',
    title: 'Custom Multi-Service Engagements',
    category: 'Custom Engagement',
    shortDesc: 'Tailored enterprise engagements bringing together video production, brand overhaul, bespoke web development, and AI automation.',
    startingRange: 'Tailored Scope & Architecture',
    bestFor: 'Ambitious enterprises, multi-location businesses, and venture-backed organizations with complex requirements.',
    deliverablesSummary: 'Comprehensive multi-discipline solution engineered to transform your entire digital presence and operational scale.',
    features: [
      'Full cross-disciplinary agency squad assigned to your brand',
      'Bespoke web applications and custom AI workflow automation',
      'Executive-level brand strategy and omnichannel rollout',
      'Dedicated on-site filming and multi-format commercial production',
      'Direct partner-level strategic consultation'
    ],
    ctaText: 'Build Custom Scope'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    name: 'Discover',
    tagline: 'Deep Dive & Alignment',
    description: 'We listen to your business goals, target audience demographics, competitive landscape, and budget requirements to pinpoint the exact levers for growth.'
  },
  {
    number: '02',
    name: 'Strategize',
    tagline: 'Blueprints & Roadmaps',
    description: 'We outline the creative direction, technical architecture, deliverable milestones, and projected timelines before a single camera rolls or line of code is written.'
  },
  {
    number: '03',
    name: 'Create & Execute',
    tagline: 'Precision Craftsmanship',
    description: 'Our specialized directors, designers, and developers produce your deliverables with obsessively high standards, keeping you updated in staging environments.'
  },
  {
    number: '04',
    name: 'Optimize & Grow',
    tagline: 'Iterative Impact',
    description: 'We evaluate real-world performance, audience response, and conversion data to continually refine your brand, campaigns, and digital assets.'
  }
];

export const WHY_CHOOSE_EDC = [
  {
    title: 'All Capabilities Under One Roof',
    description: 'No more managing six disconnected freelancers. Video, branding, web development, marketing, and AI seamlessly coordinate together.'
  },
  {
    title: 'Obsessive Quality Standard',
    description: 'We do not cut corners with generic templates. Every frame of video, pixel of design, and line of code is custom-engineered to command respect.'
  },
  {
    title: 'Strategy Before Execution',
    description: 'A beautiful video that doesn\'t drive action is useless. We build everything with commercial intent, customer psychology, and clear conversion goals.'
  },
  {
    title: 'Transparent Communication',
    description: 'No agency jargon, hidden fees, or vanished account reps. You receive direct access, clear timelines, and milestone updates throughout your project.'
  },
  {
    title: 'Scalable Growth Infrastructure',
    description: 'Whether you need a single brand film today or an ongoing multi-channel marketing engine tomorrow, our systems scale alongside your ambitions.'
  },
  {
    title: 'Technical & Creative Fluency',
    description: 'We speak the language of cinematography, design aesthetics, modern web technology, and automated business workflows with equal mastery.'
  }
];
