import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from '@/styles/Button';
import Typography from '@/styles/Typography';

const Button = ({
  title,
  size = 'medium',
  state = 'default',
  bg = 'primary',
  radius = 'rounded',
  textStyle = 'bodyMedium', // Typography 키를 기본값으로 설정
  onPress,
}: {
  title: string;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  state?: 'default' | 'hover' | 'active' | 'disabled';
  bg?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'outline';
  radius?: 'rounded' | 'square';
  textStyle?: keyof typeof Typography; // 텍스트 스타일 선택
  onPress?: () => void;
}) => {
  const styles = buttonStyles({ size, state, bg, radius, textStyle });

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={state === 'disabled'}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
