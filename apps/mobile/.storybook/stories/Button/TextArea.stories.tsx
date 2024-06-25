import { View } from 'react-native';

import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from '@/components/ui/TextArea';

const TextAreaMeta: Meta<typeof TextArea> = {
  title: 'TextArea',
  component: TextArea,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default TextAreaMeta;

export const Default: StoryObj<typeof TextArea> = {};

export const Valid: StoryObj<typeof TextArea> = {
  args: {
    variant: 'valid',
  },
};

export const Invalid: StoryObj<typeof TextArea> = {
  args: {
    variant: 'invalid',
  },
};
