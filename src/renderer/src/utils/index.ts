import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const dateFormatter = new Intl.DateTimeFormat(window.context.locale, {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
})

export function formateDateFromMS(ms: number) {
  return dateFormatter.format(new Date(ms))
}

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
