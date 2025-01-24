import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const TAB_WIDTH = 150;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  tabContainer: {
    flexDirection: 'row',
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
    width: 64,

    borderRadius: 20,
    backgroundColor: THEME.COLORS.PURPLE_100,
  },
});
