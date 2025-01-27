import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const TAB_WIDTH = 150;
export const DIVIDER_WIDTH = 64;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  tabContainer: {
    marginBottom: 8,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: TAB_WIDTH,
  },
  divider: {
    borderRightWidth: 1,
    borderRightColor: THEME.COLORS.GREY_100,
  },
  text: {
    color: THEME.COLORS.LABEL,
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  animatedBorder: {
    height: 8,
    width: DIVIDER_WIDTH,

    borderRadius: 20,
    backgroundColor: THEME.COLORS.PURPLE_100,
  },
});
