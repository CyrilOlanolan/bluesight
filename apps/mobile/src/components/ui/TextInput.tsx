import * as React from 'react';
import { TextInput as TextInputPrimitive } from 'react-native';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const inputVariants = cva(
  [
    'p-4 border-solid border rounded-[.5rem] placeholder:text-content-action-neutral-placeholder',
  ],
  {
    variants: {
      variant: {
        default:
          'border-stroke-surface-neutral-default bg-fill-action-neutral-primary text-content-action-neutral-default',
        valid:
          'border-stroke-surface-positive-default bg-fill-surface-positive-default text-content-surface-positive-default',
        invalid:
          'border-stroke-surface-negative-default bg-fill-surface-negative-default text-content-surface-negative-default',
      },
    },
  }
);

const TextInput = React.forwardRef<
  React.ElementRef<typeof TextInputPrimitive>,
  React.ComponentPropsWithoutRef<typeof TextInputPrimitive> & {
    variant?: 'default' | 'valid' | 'invalid';
  }
>(({ className, variant, ...props }, ref) => {
  return (
    <TextInputPrimitive
      ref={ref}
      className={cn(
        inputVariants({ variant: variant || 'default' }),
        className
      )}
      placeholder={props.placeholder || 'TextInput'}
      {...props}
    />
  );
});

TextInput.displayName = 'TextInput';

export { TextInput };
