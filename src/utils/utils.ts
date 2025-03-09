import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function localizeDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function setCookie(name: string, value: string, expires: Date) {
  const expiry = new Date(expires).toUTCString();
  document.cookie = name + '=' + value + `; expires=${expiry}` + '; path=/';
}

export function getCookie(name: string): string | null | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) return parts.pop();

  return null;
}
