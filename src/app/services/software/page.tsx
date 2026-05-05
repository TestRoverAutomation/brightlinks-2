import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Software Solutions',
  description: 'BrightLinks UK software solutions — Microsoft 365, software asset management, ITSM tooling, CRM, and license optimisation for UK businesses.',
};

export default function SoftwarePage() {
  return (
    <ServicePageTemplate
      title="Software Solutions"
      subtitle="Boost Productivity"
      description="Streamline your business with the right software stack. From Microsoft 365 to specialist ITSM and CRM platforms, we handle procurement, licensing, and implementation."
      image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80"
      features={[
        'Microsoft 365 & Teams deployment',
        'Software asset management (SAM)',
        'ITSM tooling & implementation',
        'CRM & ERP platform integration',
        'License compliance auditing',
        'Volume licensing & cost optimisation',
        'Adobe Creative Cloud licensing',
        'Staff training & onboarding',
      ]}
      benefits={[
        { title: 'Authorised Reseller', desc: 'Direct relationships with Microsoft, Adobe, Autodesk, and 200+ software publishers.' },
        { title: 'License Savings', desc: 'Our SAM experts typically identify 15-30% cost savings through licence rationalisation.' },
        { title: 'Compliance Assured', desc: 'Full software audit trail protects you from costly compliance penalties.' },
        { title: 'Expert Implementation', desc: 'Certified engineers for Microsoft, ServiceNow, Salesforce, and more.' },
      ]}
      relatedLinks={[
        { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
        { label: 'Managed IT Services', href: '/services/managed-services' },
        { label: 'Hardware & Config', href: '/services/hardware' },
      ]}
    />
  );
}
