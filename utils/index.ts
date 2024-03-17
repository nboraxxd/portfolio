import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message
  } else if (error && typeof error === 'object' && 'message' in error) {
    return error.message
  } else {
    return 'An unknown error occurred'
  }
}
