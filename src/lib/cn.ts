/** Tiny classname joiner — avoids pulling in clsx/tailwind-merge for a landing page. */
export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}
