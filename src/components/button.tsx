import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../utils/utils';

const widthVariants = cva('', {
  variants: {
    width: {
      default: 'w-fit',
      full: 'w-full'
    }
  },
  defaultVariants: {
    width: 'default'
  }
});

const buttonVariants = cva(
  `
    inline-flex items-center w-full justify-center gap-2 whitespace-nowrap relative rounded-md 
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

const secondaryColorVariants = cva(`absolute w-full  -right-1 rounded-md border`, {
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
    size: {
      default: 'h-10 px-4 py-2 -bottom-1',
      sm: 'h-9 -bottom-[.27rem]',
      lg: 'h-11 px-8 -bottom-1',
      icon: 'h-10 w-10 -bottom-1'
    },
    showBackground: {
      true: 'block',
      false: 'hidden'
    }
  },
  defaultVariants: {
    secondaryColor: 'default',
    showBackground: true,
    size: 'default'
  }
});

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof widthVariants>,
    VariantProps<typeof buttonVariants>,
    VariantProps<typeof secondaryColorVariants>,
    PropsWithChildren {}

export default function Button({
  variant,
  width,
  size,
  disabled,
  secondaryColor,
  showBackground: show,
  children,
  className,
  ...props
}: Props) {
  return (
    <div className={cn(widthVariants({ width }), 'relative')}>
      <div
        className={cn(secondaryColorVariants({ secondaryColor, size, showBackground: show }))}
      ></div>
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          `${disabled ? 'cursor-none pointer-events-none' : 'cursor-pointer pointer-events-auto'}`
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
