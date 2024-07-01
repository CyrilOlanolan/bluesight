import * as React from 'react';
import { Pressable, Text } from 'react-native';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex justify-center items-center p-4 border-solid border rounded-[.5rem] border-radius-12',
  {
    variants: {
      variant: {
        primary:
          'bg-fill-action-primary-default active:bg-fill-action-primary-active border-stroke-action-primary-default active:border-stroke-action-primary-active',
        negative:
          'bg-fill-action-negative-default active:bg-fill-action-negative-active border-stroke-action-negative-default active:border-stroke-action-negative-active',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

const buttonTextVariants = cva('text-base font-bold', {
  variants: {
    variant: {
      primary:
        'text-content-action-primary-default active:text-content-action-primary-active',
      negative:
        'text-content-action-negative-default active:text-content-action-negative-active',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants> & {
    text: React.ReactNode;
  };

const Button = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  ButtonProps
>(({ className, variant, text, ...props }, ref) => {
  return (
    <Pressable
      className={cn(
        buttonVariants({ variant: variant || 'primary' }),
        className
      )}
      ref={ref}
      role="button"
      {...props}
    >
      <Text
        className={cn(
          buttonTextVariants({ variant: variant || 'primary' }),
          className
        )}
      >
        {text}
      </Text>
    </Pressable>
  );
});
Button.displayName = 'Button';

export { Button };
