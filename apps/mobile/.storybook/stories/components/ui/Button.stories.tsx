import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/Button';

const ButtonMeta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
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

export default ButtonMeta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    variant: 'primary',
    text: 'Primary',
  },
};

export const Negative: StoryObj<typeof Button> = {
  args: {
    variant: 'negative',
    text: 'Negative',
  },
};
