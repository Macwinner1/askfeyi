import { Accordion, type AccordionItem } from './Accordion'
import { Reveal } from './motion/Reveal'

const faqs: readonly AccordionItem[] = [
  {
    question: 'What is Feyi?',
    answer:
      'Feyi is an AI-powered WhatsApp financial assistant that lets you manage your finances entirely through chat. Send money, pay bills, check balances and more, all without downloading a separate app.',
  },
  {
    question: 'How does Feyi work?',
    answer:
      'Simply message Feyi on WhatsApp with natural language commands like "Send ₦5,000 to Amina" or "Pay my electricity bill." Feyi\'s AI understands your request, confirms the details, and executes the transaction securely.',
  },
  {
    question: 'Is Feyi secure?',
    answer:
      "Every transaction on Feyi requires your explicit confirmation, so nothing moves without your approval. And because Feyi runs on WhatsApp, your conversations and data are protected by WhatsApp's end-to-end encryption, one of the most secure messaging protocols in the world.",
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
      "Feyi is not a bank. We're an AI-powered financial assistant that lets you send and receive money, and access other financial services, all through WhatsApp. Your funds are securely held by CBN-licensed banking partners, giving you the safety of regulated banking with the convenience of a chat.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border py-24 lg:py-28">
      <div className="container relative mx-auto max-w-3xl px-4 lg:px-8">
        <Reveal duration={0.6} y={32}>
          <div className="mb-12">
            <h2 className="max-w-[16ch] font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
              The questions people ask before they trust us.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1} duration={0.6}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  )
}
