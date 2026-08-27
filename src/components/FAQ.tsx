import { Accordion, type AccordionItem } from './Accordion'
import { Reveal } from './Reveal'

const faqs: readonly AccordionItem[] = [
  {
    question: 'What is Feyi?',
    answer:
      'Feyi is an AI-powered WhatsApp financial assistant that lets you manage your finances entirely through chat. Send money, pay bills, check balances, and more — all without downloading a separate app.',
  },
  {
    question: 'How does Feyi work?',
    answer:
      'Simply message Feyi on WhatsApp with natural language commands like "Send ₦5,000 to Amina" or "Pay my electricity bill." Feyi\'s AI understands your request, confirms the details, and executes the transaction securely.',
  },
  {
    question: 'Is Feyi secure?',
    answer:
      "Every transaction on Feyi requires your explicit confirmation, so nothing moves without your approval. And because Feyi runs on WhatsApp, your conversations and data are protected by WhatsApp's end-to-end encryption — one of the most secure messaging protocols in the world.",
  },
  {
    question: 'How do I start using Feyi?',
    answer:
      "Getting started takes less than 2 minutes. Click Get Started, follow the quick verification process, and you're ready to go. No downloads, no forms, no branch visits.",
  },
  {
    question: "What if Feyi doesn't understand my input?",
    answer:
      "Feyi is designed to understand natural language, but if it's unsure, it will ask clarifying questions.",
  },
  {
    question: 'What if I lose my phone?',
    answer:
      "If you lose your phone, simply visit our website, and tap Block Account to freeze all payment activity immediately. When you're ready, tap Unblock Account to resume.",
  },
  {
    question: 'How can I easily access the Feyi chat anytime?',
    answer:
      'Lock the chat on WhatsApp! Locking it pins it to a dedicated section at the top of your inbox, so you can always find it instantly without scrolling. It also keeps your conversation private and secure.',
  },
  {
    question: 'What are my transaction limits?',
    answer:
      'You can send up to <strong>₦300,000</strong> per transaction. Your total transfers cannot exceed <strong>₦1,000,000</strong> per day, and you can hold a maximum of <strong>₦5,000,000</strong> in your wallet at any time.',
  },
  {
    question: 'Is Feyi a bank?',
    answer:
      "Feyi is not a bank — we're an AI-powered financial assistant that lets you send and receive money, and access other financial services, all through WhatsApp. Your funds are securely held by CBN-licensed banking partners, giving you the safety of regulated banking with the convenience of a chat.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-28">
      <div className="container relative mx-auto max-w-3xl px-4 lg:px-8">
        <Reveal duration={600} distance={8}>
          <div className="mb-16 text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              FAQ
            </span>
            <h2 className="section-heading mt-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
              Everything you need to know about Feyi.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} duration={600}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  )
}
