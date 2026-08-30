import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useStartOnView } from "./motion/useStartOnView";

/**
 * The receipt Feyi sends back into the chat after a transaction.
 * Fields mirror ReceiptService.buildReceiptText in the execution-core module,
 * so what the page shows is what the product actually sends.
 */
const LINES: Array<{ k: string; v: string; sub?: string }> = [
  { k: "Type", v: "transfer" },
  { k: "Amount", v: "₦15,000.00" },
  { k: "Reference", v: "FEY-8K2M4Q1D" },
  { k: "To", v: "Emeka Okafor", sub: "0123456789" },
  { k: "Date", v: "29 Aug, 08:14" },
];

/* Torn bottom edge. Drawn as SVG rather than a CSS mask so the fill and the
   outline are two real, theme-token colours instead of one masked block that
   vanishes whenever the card and the page ground match. */
const TOOTH = 14;
const TEETH = 26;
const TEAR_W = TOOTH * TEETH;
const TEAR_H = 10;
const TEAR_PATH = (() => {
  let d = `M0 0`;
  for (let i = 0; i < TEETH; i++) {
    const x = i * TOOTH;
    d += ` L${x + TOOTH / 2} ${TEAR_H} L${x + TOOTH} 0`;
  }
  return d;
})();

function TornEdge() {
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${TEAR_W} ${TEAR_H}`}
      preserveAspectRatio="none"
      className="block h-2.5 w-full text-border"
    >
      {/* Filled shape first, unstroked, so closing it back along the top
          does not draw a line across the receipt's bottom edge. */}
      <path d={`${TEAR_PATH} L${TEAR_W} 0 L0 0 Z`} className="fill-card" />
      {/* Then the zigzag alone, stroked. */}
      <path
        d={TEAR_PATH}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function Receipt({ className }: { className?: string }) {
  const { ref, started } = useStartOnView<HTMLDivElement>();
  const reduced = useReducedMotion();
  const [printed, setPrinted] = useState(0);

  useEffect(() => {
    if (!started) return;
    if (reduced) {
      setPrinted(LINES.length + 2);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setPrinted(i);
      if (i >= LINES.length + 2) clearInterval(id);
    }, 170);
    return () => clearInterval(id);
  }, [started, reduced]);

  const shown = (i: number) => printed > i;

  return (
    <div ref={ref} className={className}>
      <div
        className={`receipt relative bg-card text-card-foreground ${
          shown(LINES.length + 1) ? "glint" : ""
        }`}
      >
        <div className="px-6 pt-6 pb-7">
          <div
            className={`flex items-center gap-2.5 transition-opacity duration-300 ${
              shown(0) ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-primary">
              <Check
                aria-hidden
                className="size-3 text-primary-foreground"
                strokeWidth={3.5}
              />
            </span>
            <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em]">
              Transaction successful
            </span>
          </div>

          <div className="mt-5 border-t border-dashed border-border pt-4">
            <dl className="grid gap-2.5">
              {LINES.map((line, i) => (
                <div
                  key={line.k}
                  className={`grid grid-cols-[5.5rem_1fr] items-baseline gap-3 transition-all duration-300 ${
                    shown(i + 1)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-1"
                  }`}
                >
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
                    {line.k}
                  </dt>
                  <dd className="font-mono text-sm tabular-nums">
                    {/* The amount gets a landing beat the moment it prints. */}
                    <span
                      className={
                        line.k === "Amount" && shown(i + 1) && !reduced
                          ? "inline-block animate-settle font-medium"
                          : line.k === "Amount"
                            ? "inline-block font-medium"
                            : undefined
                      }
                    >
                      {line.v}
                    </span>
                    {line.sub && (
                      <span className="block text-[0.72rem] text-muted-foreground">
                        {line.sub}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <p
            className={`mt-5 border-t border-dashed border-border pt-4 font-mono text-[0.7rem] leading-relaxed text-muted-foreground transition-opacity duration-300 ${
              shown(LINES.length + 1) ? "opacity-100" : "opacity-0"
            }`}
          >
            Forward this to Emeka as proof of payment.
          </p>
        </div>
      </div>
      <TornEdge />
    </div>
  );
}
