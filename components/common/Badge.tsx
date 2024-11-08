import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/styles/Colors';
import Typography from '@/styles/Typography';

const Badge = ({
  text,
  color = Colors.base.primary,
  textStyle = 'captionBold',
}: {
  text: string;
  color?: string;
  textStyle?: keyof typeof Typography;
}) => {
  return (
    <View style={[styles.badge, { backgroundColor: color }]}>
      <Text style={[Typography[textStyle], styles.text]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
  },
});

export default Badge;
