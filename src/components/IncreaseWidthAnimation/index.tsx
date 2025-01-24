import { Button, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

import { styles } from './styles';

export function IncreaseWidthAnimation() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.box, width }} />

      <Button onPress={handlePress} title='Click me' />
    </View>
  );
}
