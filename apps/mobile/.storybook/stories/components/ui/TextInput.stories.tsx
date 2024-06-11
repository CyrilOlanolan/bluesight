import { View } from 'react-native';

import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from '@/components/ui/TextInput';

const TextInputMeta: Meta<typeof TextInput> = {
  title: 'TextInput',
  component: TextInput,
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

export default TextInputMeta;

export const Default: StoryObj<typeof TextInput> = {};

export const Valid: StoryObj<typeof TextInput> = {
  args: {
    variant: 'valid',
  },
};

export const Invalid: StoryObj<typeof TextInput> = {
  args: {
    variant: 'invalid',
  },
};
