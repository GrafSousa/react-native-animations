import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginVertical: 50,
    backgroundColor: THEME.COLORS.PURPLE_100,
  },
});
