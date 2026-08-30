import { ArrowRight } from "lucide-react";
import { Reveal } from "./motion/Reveal";
import { CountUp } from "./motion/CountUp";
import { Receipt } from "./Receipt";
import { site } from "@/lib/site";

const ledger = [
  { value: "₦100k+", label: "moved every day" },
  { value: "99.9%", label: "uptime" },
  { value: "<3s", label: "to a confirmation" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:items-start lg:gap-16">
          <div>
            {/* Headline runs wide and left. No centred stack, no 50/50 split. */}
            <Reveal y={12}>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                WhatsApp finance for people who run something
              </p>
            </Reveal>

            <Reveal delay={0.08} duration={0.7}>
              <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[0.96] tracking-[-0.04em]">
                Pay four people
                <br />
                before you
                <br />
                open the shop.
              </h1>
            </Reveal>

            <Reveal delay={0.16} duration={0.6}>
              <p className="mt-8 max-w-[42ch] text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Type it the way you would tell a person. Feyi reads it, shows
                you exactly who gets what, and waits for your yes. Then it sends
                everyone a receipt.
              </p>
            </Reveal>

            <Reveal delay={0.24} duration={0.6}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {site.ctaLabel}
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="/#how-it-works"
                  className="text-sm font-medium underline decoration-border decoration-2 underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  See a full day of it
                </a>
              </div>
            </Reveal>

            {/* A ledger line, not a row of centred stat cards. */}
            <Reveal delay={0.34} duration={0.6}>
              <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-border pt-6">
                {ledger.map((item) => (
                  <div key={item.label} className="flex items-baseline gap-2.5">
                    <CountUp
                      value={item.value}
                      className="font-mono text-lg font-medium tabular-nums"
                    />
                    <dt className="text-sm text-muted-foreground">
                      {item.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* The message, then the receipt it produces. */}
          <div className="lg:pt-3">
            <Reveal delay={0.2} duration={0.6} y={20}>
              <p className="ml-auto w-fit max-w-[17rem] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
                Pay Emeka 15k, Tunde 8k, Ada 5k
              </p>
            </Reveal>
            <Receipt className="mt-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
