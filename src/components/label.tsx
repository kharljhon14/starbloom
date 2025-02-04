import { LabelHTMLAttributes } from 'react';
import { cn } from '../utils/utils';

export default function Label({
  className,
  children,
  ...Props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn('mb-1 font-semibold block', className)}
      {...Props}
    >
      {children}
    </label>
  );
}
