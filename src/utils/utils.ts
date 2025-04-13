import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function localizeDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function getInitials(firstName?: string, lastName?: string): string {
  if (!firstName || !lastName) return '';

  const fArr = firstName.split(' ');
  const lArr = lastName.split(' ');

  const firstChar = fArr[0].split('');
  const lastNameChar = lastName[lArr.length - 1].split('');

  return `${firstChar[0]}${lastNameChar[0]}`;
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
