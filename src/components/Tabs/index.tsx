import React from 'react';
import { View, Pressable, Text, ScrollView } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { styles, TAB_WIDTH } from './styles';

interface TabsProps {
  tabs: string[];
}

export function Tabs({ tabs }: TabsProps) {
  const borderTranslateX = useSharedValue(-TAB_WIDTH);

  const handlePress = (tab: string) => {
    const newOffset = (() => {
      switch (tab) {
        case 'home':
          return -TAB_WIDTH;
        case 'search':
          return 0;
        case 'profile':
          return TAB_WIDTH;
        default:
          return -TAB_WIDTH;
      }
    })();

    borderTranslateX.value = withTiming(newOffset);
  };

  const animatedBorderStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: borderTranslateX.value }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.map((value, index) => (
          <Pressable
            key={index}
            style={
              index !== tabs.length - 1
                ? [styles.tab, styles.divider]
                : styles.tab
            }
            onPress={() => handlePress(value)}
          >
            <Text style={styles.text}>{value}</Text>
          </Pressable>
        ))}
      </View>

      <Animated.View style={[styles.animatedBorder, animatedBorderStyle]} />
    </View>
  );
}
