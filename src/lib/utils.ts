import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args))
}

export const focusRing = [
  // base
  'outline outline-offset-2 outline-0 focus-visible:outline-2',
  // outline color
  'outline-indigo-500 dark:outline-indigo-500',
]
