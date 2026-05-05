import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Hardware & Configuration',
  description: 'BrightLinks UK hardware supply, configuration, and deployment — 30,000+ products, next-day UK delivery, device imaging, asset tagging, and WEEE disposal.',
};

export default function HardwarePage() {
  return (
    <ServicePageTemplate
      title="Hardware & Configuration"
      subtitle="30,000+ Products"
      description="From single-device orders to enterprise-scale deployments, we supply, configure, and deliver hardware to your door — ready to use out of the box."
      image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
      features={[
        '30,000+ products from leading brands',
        'Device configuration & OS imaging',
        'Asset tagging & inventory management',
        'Next-day UK-wide delivery',
        'Deployment & installation services',
        'Repair & refurbishment services',
        'End-of-life & WEEE compliant disposal',
        'Flexible procurement & finance options',
      ]}
      benefits={[
        { title: 'Market-Leading Stock', desc: 'Dell, HP, Lenovo, Apple, Cisco and more — 30,000+ products with real-time availability.' },
        { title: 'Ready-to-Deploy', desc: 'Devices arrive pre-configured with your image, policies, and apps. Zero IT effort on receipt.' },
        { title: 'Competitive Pricing', desc: 'Volume buying power means we consistently beat high-street and direct vendor pricing.' },
        { title: 'Responsible Disposal', desc: 'Certified WEEE disposal with full data destruction certificates and sustainability reporting.' },
      ]}
      relatedLinks={[
        { label: 'Managed IT Services', href: '/services/managed-services' },
        { label: 'Software Solutions', href: '/services/software' },
        { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
      ]}
    />
  );
}
