import * as React from 'react';
import { TextInput } from 'react-native';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const areaVariants = cva(
  [
    'w-[322px] h-[100px] rounded-[.5rem] border border-solid py-3 px-4 gap-[10px] placeholder:text-content-action-neutral-placeholder',
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

const TextArea = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  React.ComponentPropsWithoutRef<typeof TextInput> & {
    variant?: 'default' | 'valid' | 'invalid';
  }
>(({ multiline = true, className, variant, ...props }, ref) => {
  return (
    <TextInput
      ref={ref}
      multiline={multiline}
      textAlignVertical="top"
      className={cn(areaVariants({ variant: variant || 'default' }), className)}
      placeholder={props.placeholder || 'TextArea'}
      {...props}
    />
  );
});

TextArea.displayName = 'TextArea';

export { TextArea };
