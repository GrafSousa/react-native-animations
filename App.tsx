import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { THEME } from './src/styles/theme';

import * as Animate from './src/components';

export default function App() {
  return (
    <View style={styles.container}>
      <Animate.Tabs tabs={['home', 'profile', 'settings', 'indicators']} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
    justifyContent: 'center',
  },
});
