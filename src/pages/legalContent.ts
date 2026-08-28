import type { LegalSection } from './LegalPage'

/**
 * The `body` text below is accurate but deliberately minimal — it describes
 * only what we can state plainly today. The `todo` field on each section is
 * NOT rendered; it lists what counsel still has to supply. A regulated
 * financial product must not ship invented legal terms, so nothing here
 * asserts more than we can stand behind.
 *
 * Section order follows what NDPA 2023 and CBN consumer-protection
 * guidance expect to see.
 */
const PENDING =
  'Our full legal documentation is being finalised with our counsel and banking partners. The summary below describes how we currently operate. Email us for anything it does not answer and we will respond with specifics.'

const privacySections: LegalSection[] = [
  {
    heading: 'Who we are',
    body: [
      'Feyi is an AI-powered financial assistant you use over WhatsApp. We are not a bank. Funds are held by CBN-licensed banking partners.',
    ],
  },
  {
    heading: 'Information we collect',
    body: [
      'To verify your identity and carry out your instructions we collect the details you provide when you sign up, the instructions you send us, and records of the transactions you make.',
    ],
    todo: [
      'Enumerate every field collected, including BVN/NIN handling.',
      'State the lawful basis for each category under NDPA 2023.',
    ],
  },
  {
    heading: 'How we use your information',
    body: [
      'We use it to carry out the instructions you give us, verify your identity, detect and prevent fraud, and meet our legal and regulatory obligations.',
    ],
    todo: [
      'Confirm whether message content is used to train or fine-tune any model, and say so plainly either way.',
    ],
  },
  {
    heading: 'Who we share it with',
    body: [
      'We share information with the licensed banking and payment partners who execute your transactions, and with regulators or law enforcement where we are legally required to.',
    ],
    todo: [
      'Name the processor categories, including any AI provider that receives message content.',
      'Disclose any transfer of personal data outside Nigeria and its safeguards.',
    ],
  },
  {
    heading: 'WhatsApp and message security',
    body: [
      'Your conversations with Feyi travel over WhatsApp and are protected in transit by its end-to-end encryption. WhatsApp is operated by Meta, and Meta’s own terms apply to your use of the app.',
    ],
  },
  {
    heading: 'Your rights',
    body: [
      'Under the Nigeria Data Protection Act 2023 you have the right to access your personal data, correct it, request its deletion, and object to certain processing.',
    ],
    todo: [
      'State how to exercise each right, the response window, and the NDPC complaint route.',
    ],
  },
  {
    heading: 'How long we keep it',
    body: [
      'We keep your information for as long as your account is open, and afterwards for the period our AML and KYC obligations require.',
    ],
    todo: ['State the specific retention periods per data category.'],
  },
]

const termsSections: LegalSection[] = [
  {
    heading: 'The service',
    body: [
      'Feyi lets you send money, pay bills, and buy airtime and data by messaging us on WhatsApp. Every transaction requires your explicit confirmation before it is executed.',
    ],
  },
  {
    heading: 'Eligibility',
    body: [
      'You must complete identity verification before your account can transact.',
    ],
    todo: ['Set out minimum age, residency, and the verification tiers.'],
  },
  {
    heading: 'Transaction limits',
    body: [
      'Transfers are capped at ₦300,000 per transaction and ₦1,000,000 per day. Wallet balances are capped at ₦5,000,000.',
    ],
    todo: [
      'Verify these against your licence and partner agreements.',
      'Explain how limits change with verification tier.',
    ],
  },
  {
    heading: 'Fees',
    body: ['Feyi is free to start.'],
    todo: ['State every fee, or state that the service is free and when that may change.'],
  },
  {
    heading: 'Instructions given in everyday language',
    body: [
      'Feyi interprets instructions written in natural language and shows you a confirmation before acting. You are responsible for checking that confirmation before approving it.',
    ],
    todo: [
      'Define liability where an interpretation is wrong but the user approved it.',
      'Set out the dispute, reversal and chargeback process.',
    ],
  },
  {
    heading: 'If your device is lost or compromised',
    body: [
      'You can freeze all payment activity immediately from our website, and unblock it when you are ready.',
    ],
  },
  {
    heading: 'Complaints',
    body: [
      'Contact us first and we will work to resolve your complaint. If we cannot, you may escalate to the Central Bank of Nigeria’s Consumer Protection Department.',
    ],
    todo: ['Add the formal complaints procedure and response timelines.'],
  },
]

export const privacy = {
  title: 'Privacy Policy',
  updated: 'To be confirmed',
  intro: PENDING,
  sections: privacySections,
}

export const terms = {
  title: 'Terms of Service',
  updated: 'To be confirmed',
  intro: PENDING,
  sections: termsSections,
}
