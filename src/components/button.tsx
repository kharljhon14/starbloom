import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../utils/utils';

const buttonVariants = cva(
  `
    inline-flex items-center justify-center gap-2 whitespace-nowrap relative rounded-md cursor-pointer 
    border active:translate-1 transition duration-100 ease-in-out
    `,
  {
    variants: {
      variant: {
        default: 'bg-black text-white',
        secondary: 'bg-white'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

const secondaryColorVariants = cva(`absolute  w-full h-full -bottom-1 -right-1 rounded-md border`, {
  variants: {
    secondaryColor: {
      default: 'bg-white',
      black: 'bg-black',
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      accent: 'bg-accent',
      danger: 'bg-danger',
      success: 'bg-success'
    },
    showBackground: {
      true: 'block',
      false: 'hidden'
    }
  },
  defaultVariants: {
    secondaryColor: 'default',
    showBackground: true
  }
});

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    VariantProps<typeof secondaryColorVariants>,
    PropsWithChildren {}

export default function Button({
  variant,
  size,
  secondaryColor,
  showBackground: show,
  children,
  className,
  ...props
}: Props) {
  return (
    <div className="relative w-fit">
      <div className={cn(secondaryColorVariants({ secondaryColor, showBackground: show }))}></div>
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
