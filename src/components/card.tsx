import { PropsWithChildren } from 'react';
import { cn } from '../utils/utils';
import { cva, VariantProps } from 'class-variance-authority';

const cardVariants = cva(`rounded-md border shadow-black shadow-full`, {
  variants: {
    color: {
      default: 'bg-white ',
      primary: 'bg-primary ',
      secondary: 'bg-secondary ',
      accent: 'bg-accent ',
      success: 'bg-success ',
      danger: 'bg-danger '
    },
    size: {
      default: 'p-4',
      sm: 'p-3 max-w-sm',
      md: 'p-4 max-w-md',
      lg: 'p-8 max-w-lg'
    }
  },
  defaultVariants: {
    color: 'default',
    size: 'default'
  }
});

interface Props extends VariantProps<typeof cardVariants>, PropsWithChildren {
  className?: string;
}

export default function Card({ color, size, children, className }: Props) {
  return <div className={cn(cardVariants({ color, size, className }))}>{children}</div>;
}
