import { Moon, Sun, Sunrise } from "lucide-react";
import { Reveal } from "./motion/Reveal";
import { Typewriter } from "./motion/Typewriter";
import { useAutoAdvance } from "./motion/useAutoAdvance";

const day = [
  {
    icon: Sunrise,
    period: "Morning",
    time: "07:30",
    caption: "Before the gate is even open.",
    exchanges: [
      {
        you: "Send 2k to Nkechi every Monday",
        feyi: "Standing order set. Mondays, 08:00.",
      },
      {
        you: "Buy 2GB MTN for 08012345678",
        feyi: "Delivered. ₦1,200 debited.",
      },
    ],
  },
  {
    icon: Sun,
    period: "Afternoon",
    time: "13:15",
    caption: "Suppliers and staff, in two messages.",
    exchanges: [
      {
        you: "Send ₦500 airtime to my staff list",
        feyi: "4 lines topped up. ₦2,000 total.",
      },
      {
        you: "Pay Emeka 15k, Tunde 8k, Ada 5k",
        feyi: "3 transfers ready. Confirm?",
      },
    ],
  },
  {
    icon: Moon,
    period: "Evening",
    time: "20:45",
    caption: "Closing the books without opening a book.",
    exchanges: [
      { you: "Show me today's spending", feyi: "₦31,200 across 7 payments." },
      {
        you: "Send ₦120k to landlord on Friday",
        feyi: "Scheduled for Friday, 09:00.",
      },
    ],
  },
];

function Exchange({
  you,
  feyi,
  delay,
}: {
  you: string;
  feyi: string;
  delay: number;
}) {
  return (
    <div className="grid max-w-sm gap-2.5">
      <p className="ml-auto w-fit max-w-[92%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-left text-sm text-primary-foreground">
        <Typewriter text={you} delay={delay} speed={26} />
      </p>
      <p className="w-fit max-w-[92%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm text-muted-foreground">
        {feyi}
      </p>
    </div>
  );
}

export function DailyLife() {
  const { ref, index, progress, select, enabled, holdProps } = useAutoAdvance({
    count: day.length,
    dwell: 7000,
  });

  return (
    <section
      id="how-it-works"
      className="border-t border-border py-24 lg:py-36"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-baseline">
          <Reveal>
            <h2 className="max-w-[15ch] font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
              One day, four messages, nothing missed.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
              A Tuesday, in full
            </p>
          </Reveal>
        </div>

        <div ref={ref} {...holdProps} className="mt-14">
          {/* Reduced motion gets everything at once instead of a timed carousel. */}
          {!enabled ? (
            <div className="grid gap-12 md:grid-cols-3">
              {day.map((slot) => (
                <div key={slot.period}>
                  <div className="flex items-baseline gap-3 border-t-2 border-foreground pt-4">
                    <span className="font-display text-sm font-bold">
                      {slot.period}
                    </span>
                    <span className="font-mono text-xs tabular-nums text-muted-foreground">
                      {slot.time}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {slot.caption}
                  </p>
                  <div className="mt-6 grid gap-5">
                    {slot.exchanges.map((ex) => (
                      <Exchange
                        key={ex.you}
                        you={ex.you}
                        feyi={ex.feyi}
                        delay={0}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Each tab carries its own fill bar, which is also the timer. */}
              <div
                className="grid gap-px bg-border md:grid-cols-3"
                role="tablist"
              >
                {day.map((slot, i) => {
                  const active = i === index;
                  return (
                    <button
                      key={slot.period}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-controls={`day-panel-${i}`}
                      id={`day-tab-${i}`}
                      onClick={() => select(i)}
                      className="group bg-background pt-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span className="relative -mt-4 block h-0.5 bg-border">
                        <span
                          className="absolute inset-y-0 left-0 bg-foreground"
                          style={{
                            width: active
                              ? `${progress * 100}%`
                              : i < index
                                ? "100%"
                                : "0%",
                          }}
                        />
                      </span>
                      <span className="mt-4 flex items-baseline gap-3 md:pr-6">
                        <slot.icon
                          aria-hidden
                          className={`size-4 shrink-0 self-center transition-opacity ${
                            active ? "opacity-100" : "opacity-40"
                          }`}
                        />
                        <span
                          className={`font-display text-sm font-bold transition-opacity ${
                            active ? "opacity-100" : "opacity-45"
                          }`}
                        >
                          {slot.period}
                        </span>
                        <span
                          className={`font-mono text-xs tabular-nums transition-opacity ${
                            active
                              ? "text-muted-foreground opacity-100"
                              : "opacity-40"
                          }`}
                        >
                          {slot.time}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {day.map((slot, i) => (
                <div
                  key={slot.period}
                  id={`day-panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`day-tab-${i}`}
                  hidden={i !== index}
                  className="pt-10"
                >
                  <div className="grid gap-10 lg:grid-cols-[22rem_1fr] lg:gap-16">
                    <p className="max-w-[24ch] font-display text-xl font-bold leading-snug tracking-[-0.01em]">
                      {slot.caption}
                    </p>
                    <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
                      {slot.exchanges.map((ex, row) => (
                        /* key includes the index so the typewriter restarts on each tab */
                        <Exchange
                          key={`${index}-${ex.you}`}
                          you={ex.you}
                          feyi={ex.feyi}
                          delay={250 + row * 700}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
