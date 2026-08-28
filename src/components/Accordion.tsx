import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export type AccordionItem = {
  question: string
  /** May contain inline markup (e.g. <strong> around amounts). */
  answer: string
}

export function Accordion({ items }: { items: readonly AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <div className="surface rounded-2xl px-6">
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `${baseId}-panel-${i}`
        const buttonId = `${baseId}-button-${i}`

        return (
          <div key={item.question} className="border-b last:border-b-0 border-border/50">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex flex-1 w-full items-start justify-between gap-4 rounded-md py-5 text-left text-sm font-medium outline-none transition-all hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                {item.question}
                <ChevronDown
                  aria-hidden
                  className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5 text-sm text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </div>
        )
      })}
    </div>
  )
}
