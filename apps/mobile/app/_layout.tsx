import Constants from 'expo-constants';
import { Slot } from 'expo-router';

import '@/styles/global.css';

// eslint-disable-next-line no-restricted-imports
import StorybookUIRoot from '~/.storybook';

let Exported = Slot;

if (Constants.expoConfig?.extra?.storybookEnabled) {
  Exported = StorybookUIRoot;
}

export default Exported;
