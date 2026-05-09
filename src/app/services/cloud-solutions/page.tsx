import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Cloud Solutions',
  description: 'Bright Links cloud solutions — Microsoft Azure, Microsoft 365, cloud migration, hybrid cloud, and cloud cost optimisation for UK businesses.',
};

export default function CloudSolutionsPage() {
  return (
    <ServicePageTemplate
      title="Cloud Solutions"
      subtitle="Scalable Cloud Infrastructure"
      description="Migrate, optimise and manage your cloud environment with confidence. We're Microsoft Gold Partners with deep expertise across Azure, Microsoft 365, and hybrid cloud architectures."
      image="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80"
      features={[
        'Cloud readiness assessment',
        'Microsoft Azure infrastructure & migration',
        'Microsoft 365 licensing & deployment',
        'Hybrid & multi-cloud architecture',
        'Cloud cost optimisation (FinOps)',
        'Disaster recovery & business continuity',
        'Cloud security posture management',
        'Ongoing cloud management & support',
      ]}
      benefits={[
        { title: 'Microsoft Gold Partner', desc: 'Highest tier Microsoft partnership — access to expert support and exclusive pricing.' },
        { title: 'Zero-Downtime Migration', desc: 'Proven methodology ensures business continuity throughout your cloud migration.' },
        { title: 'Cost Optimisation', desc: 'Average clients save 23% on cloud spend within 6 months through our FinOps practice.' },
        { title: 'UK Data Residency', desc: 'All cloud solutions configured to keep data in UK data centres where required.' },
      ]}
      relatedLinks={[
        { label: 'Managed IT Services', href: '/services/managed-services' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Software Solutions', href: '/services/software' },
      ]}
    />
  );
}
