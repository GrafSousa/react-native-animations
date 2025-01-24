import { useEffect } from 'react';
import { View, Text } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { styles } from './styles';

const DURATION = 2000;

export function WithTiming() {
  const linearAnimation = useSharedValue(160);
  const defaultAnimation = useSharedValue(160);

  const linearStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: linearAnimation.value }],
  }));

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: defaultAnimation.value }],
  }));

  useEffect(() => {
    linearAnimation.value = withRepeat(
      withTiming(-linearAnimation.value, {
        duration: DURATION,
        easing: Easing.linear,
      }),
      -1,
      true
    );

    defaultAnimation.value = withRepeat(
      withTiming(-defaultAnimation.value, {
        duration: DURATION,
      }),
      -1,
      true
    );
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]}>
        <Text style={styles.text}>inout</Text>
      </Animated.View>

      <Animated.View style={[styles.box, linearStyle]}>
        <Text style={styles.text}>linear</Text>
      </Animated.View>
    </View>
  );
}
