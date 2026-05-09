export const SITE = {
  name: 'Bright Links',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.brightlinksuk.com',
  email: 'info@brightlinksuk.com',
  phone: '0208 127 1740',
  phoneTel: '+442081271740',
  address: '124 City Road, London EC1V 2NX',
  env: process.env.NEXT_PUBLIC_ENV || 'production',
};

export const NAV_SERVICES = [
  {
    title: 'Managed IT Services',
    description: '24/7 expert support & fully managed IT infrastructure',
    href: '/services/managed-services',
    icon: 'Shield',
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your business from modern cyber threats',
    href: '/services/cybersecurity',
    icon: 'Lock',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure & migration services',
    href: '/services/cloud-solutions',
    icon: 'Cloud',
  },
  {
    title: 'Software Solutions',
    description: 'Productivity, CRM & IT service management tools',
    href: '/services/software',
    icon: 'Code',
  },
  {
    title: 'Hardware & Configuration',
    description: 'Device procurement, config & deployment at scale',
    href: '/services/hardware',
    icon: 'Monitor',
  },
];

export const NAV_SOLUTIONS = [
  { title: 'Small & Medium Business', href: '/solutions#sme' },
  { title: 'Enterprise', href: '/solutions#enterprise' },
  { title: 'Public Sector', href: '/solutions#public-sector' },
  { title: 'Education', href: '/solutions#education' },
];

export const NAV_INDUSTRIES = [
  { title: 'Public Sector', description: 'Dedicated IT services for government and councils', href: '/industries/public-sector' },
  { title: 'Healthcare', description: 'Secure, HSCN-ready IT for NHS & private health', href: '/industries/healthcare' },
  { title: 'Education', description: 'Technology for schools, colleges & academy trusts', href: '/industries/education' },
  { title: 'Enterprise', description: 'Scalable infrastructure for large organisations', href: '/industries/enterprise' },
  { title: 'Small & Medium Business', description: 'Affordable managed IT that grows with you', href: '/industries/sme' },
];

export const SERVICES = [
  {
    title: 'Managed IT Services',
    slug: 'managed-services',
    description: 'Fully managed IT support with 24/7 UK-based helpdesk, proactive monitoring, and reliable service delivery.',
    icon: 'Shield',
    color: 'turquoise',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    features: [
      '24/7 UK-based Service Desk',
      'Proactive system monitoring',
      'Patch management & updates',
      'Asset lifecycle management',

      'Dedicated account manager',
    ],
  },
  {
    title: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'Comprehensive cyber resilience strategies — from threat detection to incident response and compliance.',
    icon: 'Lock',
    color: 'navy',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    features: [
      'Cyber Essentials certification support',
      'Endpoint detection & response',
      'Security awareness training',
      'Vulnerability assessments',
      'Incident response planning',
      'Dark web monitoring',
    ],
  },
  {
    title: 'Cloud Solutions',
    slug: 'cloud-solutions',
    description: 'Migrate, optimise, and manage your cloud infrastructure with confidence across Microsoft Azure, AWS, and more.',
    icon: 'Cloud',
    color: 'turquoise',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    features: [
      'Cloud migration strategy',
      'Microsoft Azure & 365',
      'Hybrid & multi-cloud',
      'Cloud cost optimisation',
      'Disaster recovery',
      'Cloud security posture',
    ],
  },
  {
    title: 'Software Solutions',
    slug: 'software',
    description: 'Boost productivity and streamline operations with best-in-class software licensing and implementation.',
    icon: 'Code',
    color: 'orange',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    features: [
      'Microsoft 365 & Teams',
      'Software asset management',
      'ITSM tooling',
      'CRM & ERP solutions',
      'License optimisation',
      'Implementation & training',
    ],
  },
  {
    title: 'Hardware & Configuration',
    slug: 'hardware',
    description: '30,000+ products available with device configuration, asset tagging, and seamless deployment services.',
    icon: 'Monitor',
    color: 'navy',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    features: [
      '30,000+ products in stock',
      'Device configuration & imaging',
      'Asset tagging & tracking',
      'Next-day delivery UK-wide',
      'Repair & refurbishment',
      'End-of-life disposal (WEEE)',
    ],
  },
];

export const STATS = [
  { value: '1,000+', label: 'Clients Served', icon: 'Users' },
  { value: '25+', label: 'Years Experience', icon: 'Award' },
  { value: '30,000+', label: 'Products Available', icon: 'Package' },
  { value: '24/7', label: 'UK Support', icon: 'Headphones' },
];

export const TESTIMONIALS = [
  {
    quote: "Bright Links transformed our IT infrastructure. The 24/7 support means our team never loses productivity — even out of hours issues are resolved fast.",
    name: 'Sarah Mitchell',
    title: 'IT Director',
    company: 'Mitchell & Co Solicitors',
  },
  {
    quote: "The cybersecurity audit they conducted identified critical vulnerabilities we had no idea about. We're now fully Cyber Essentials certified.",
    name: 'James Okafor',
    title: 'Operations Manager',
    company: 'Apex Logistics Ltd',
  },
  {
    quote: "Moving 200 users to Microsoft 365 with zero downtime was impressive. Bright Links project-managed everything brilliantly.",
    name: 'Dr. Helen Carter',
    title: 'Head of Technology',
    company: 'Greenfield Academy Trust',
  },
];
