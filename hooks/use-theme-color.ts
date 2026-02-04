/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme as useRNColorScheme } from 'react-native';

// Align with your Tailwind config colors
const Colors = {
  light: {
    text: '#000',
    background: '#fff',
    tint: '#FF9C01', // secondary color
    icon: '#CDCDE0', // gray-100
    tabIconDefault: '#CDCDE0',
    tabIconSelected: '#FF9C01',
  },
  dark: {
    text: '#CDCDE0', // gray-100
    background: '#161622', // primary
    tint: '#FF9C01', // secondary
    icon: '#CDCDE0',
    tabIconDefault: '#CDCDE0',
    tabIconSelected: '#FF9C01',
  },
};

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useRNColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}