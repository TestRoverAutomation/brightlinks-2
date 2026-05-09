import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Cybersecurity Services',
  description: 'Protect your UK business from cyber threats. Bright Links provides Cyber Essentials, endpoint security, threat detection, and incident response.',
};

export default function CybersecurityPage() {
  return (
    <ServicePageTemplate
      title="Cybersecurity"
      subtitle="Protect Your Business"
      description="In an increasingly hostile threat landscape, robust cybersecurity is non-negotiable. We deliver comprehensive protection strategies tailored to your risk profile."
      image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80"
      features={[
        'Cyber Essentials certification support',
        'Endpoint detection & response (EDR)',
        'Email security & anti-phishing',
        'Vulnerability assessments & penetration testing',
        'Security awareness training',
        'Incident response planning & support',
        'Dark web monitoring',
        'Multi-factor authentication (MFA) rollout',
      ]}
      benefits={[
        { title: 'Certified Expertise', desc: 'Our security team holds CISSP, CISM, and CompTIA Security+ certifications.' },
        { title: 'Compliance Ready', desc: 'We help you meet Cyber Essentials, GDPR, ISO 27001, and sector-specific requirements.' },
        { title: 'Rapid Response', desc: '1-hour SLA for critical security incidents, 24/7 threat monitoring.' },
        { title: 'Employee Training', desc: 'Phishing simulations and security awareness programmes to protect your human layer.' },
      ]}
      relatedLinks={[
        { label: 'Managed IT Services', href: '/services/managed-services' },
        { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
        { label: 'Software Solutions', href: '/services/software' },
      ]}
    />
  );
}
