import React from 'react';
import { Button, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { styles } from './styles';

export function TranslateXAnimation() {
  const translateX = useSharedValue(0);

  const handlePress = () => {
    translateX.value += 50;
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }],
  }));

  return (
    <>
      <Animated.View style={[styles.box, animatedStyle]} />
      <View style={styles.container}>
        <Button title='Click me' onPress={handlePress} />
      </View>
    </>
  );
}
