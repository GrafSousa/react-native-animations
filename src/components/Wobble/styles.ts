import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    marginBottom: 30,
    borderRadius: 15,
    backgroundColor: THEME.COLORS.PURPLE_100,
  },
});
