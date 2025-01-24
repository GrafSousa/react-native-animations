import { Button } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { styles } from './styles';
import { View } from 'react-native';

const OFFSET = 40;
const TIME = 250;

export function ShakeAnimation() {
  const translateX = useSharedValue(0);

  const handlePress = () => {
    translateX.value = withSequence(
      withTiming(-OFFSET, { duration: TIME / 2 }),
      withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),
      withTiming(0, { duration: TIME / 2 })
    );
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />

      <Button title='Press me to shake' onPress={handlePress} />
    </View>
  );
}
