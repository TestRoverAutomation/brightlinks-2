import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Managed IT Services',
  description: 'BrightLinks UK managed IT services — 24/7 UK-based helpdesk, proactive monitoring, ITIL V4 aligned. Fully managed IT for UK businesses.',
};

export default function ManagedServicesPage() {
  return (
    <ServicePageTemplate
      title="Managed IT Services"
      subtitle="24/7 UK Support"
      description="Let our UK-based experts manage your entire IT infrastructure — from helpdesk support to proactive monitoring — so you can focus on your business."
      image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80"
      features={[
        '24/7 UK-based Service Desk (phone, email, chat)',
        'Proactive monitoring & alerting',
        'Patch management & security updates',
        'Asset lifecycle management',
        'ITIL V4 aligned service delivery',
        'Dedicated account manager',
        'Monthly reporting & business reviews',
        'On-site and remote support',
      ]}
      benefits={[
        { title: 'UK-Based Only', desc: 'Our helpdesk operates from UK centres. No overseas call centres — ever.' },
        { title: 'Predictable Costs', desc: 'Fixed monthly pricing means no surprise bills. Budget with confidence.' },
        { title: 'Proactive, Not Reactive', desc: 'We fix problems before they impact your business through 24/7 monitoring.' },
        { title: 'ITIL Certified Team', desc: 'Our engineers are ITIL V4 certified, ensuring consistent, quality service delivery.' },
      ]}
      relatedLinks={[
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
        { label: 'Hardware & Config', href: '/services/hardware' },
      ]}
    />
  );
}
