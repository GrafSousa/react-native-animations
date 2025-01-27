import { View, Button } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { styles } from './styles';

const ANGLE = 15;

export function Wobble() {
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }],
  }));

  const handlePress = () => {
    rotation.value = withSequence(
      withTiming(-ANGLE),
      withRepeat(
        withTiming(ANGLE, { duration: 100, easing: Easing.elastic(1.5) }),
        7,
        true
      ),
      withTiming(0, { duration: 100, easing: Easing.elastic(1.5) })
    );
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />

      <Button title='Click to shake' onPress={handlePress} />
    </View>
  );
}
