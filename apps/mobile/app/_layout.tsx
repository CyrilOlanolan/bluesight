import Constants from 'expo-constants';
import { Slot } from 'expo-router';

import '@/styles/global.css';

import StorybookUIRoot from '~/.storybook';

let Exported = Slot;

if (Constants.expoConfig?.extra?.storybookEnabled) {
  Exported = StorybookUIRoot;
}

export default Exported;
