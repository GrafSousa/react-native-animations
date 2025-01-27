import React from 'react';
import { View, Pressable, Text, TextInput } from 'react-native';

import Animated, {
  useAnimatedProps,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { styles, TAB_WIDTH, DIVIDER_WIDTH } from './styles';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

interface TabsProps {
  tabs: string[];
}

export function Tabs({ tabs }: TabsProps) {
  const offsetX = useSharedValue(0);
  const middleTabPosition = (TAB_WIDTH - DIVIDER_WIDTH) / 2;

  const borderTranslateX = useSharedValue(middleTabPosition);

  const handlePress = (index: number) => {
    borderTranslateX.value = withTiming(TAB_WIDTH * index + middleTabPosition);
  };

  const scrollHandler = useAnimatedScrollHandler((event) => {
    offsetX.value = event.contentOffset.x;
  });

  const animatedBorderStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: borderTranslateX.value - offsetX.value }],
  }));

  return (
    <View style={styles.container}>
      <AnimatedTextInput style={[styles.text, { marginBottom: 42 }]} />
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabContainer}
        onScroll={scrollHandler}
      >
        {tabs.map((value, index) => (
          <Pressable
            key={index}
            style={
              index !== tabs.length - 1
                ? [styles.tab, styles.divider]
                : styles.tab
            }
            onPress={() => handlePress(index)}
          >
            <Text style={styles.text}>{value}</Text>
          </Pressable>
        ))}
      </Animated.ScrollView>

      <Animated.View style={[styles.animatedBorder, animatedBorderStyle]} />
    </View>
  );
}
