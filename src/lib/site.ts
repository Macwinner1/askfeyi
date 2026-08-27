/** Single place to change branding, links and copy-level constants. */
export const site = {
  name: 'Feyi',
  tagline: 'Natural Language Financial Assistant',
  whatsappUrl: 'https://wa.me/2348000000000',
  ctaLabel: 'Get Started',
  nav: [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Security', href: '#security' },
    { label: 'FAQ', href: '#faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const
