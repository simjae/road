import { StyleSheet } from 'react-native';
import { ButtonColors } from './Colors';
import Typography from './Typography'; // Typography 스타일 불러오기

type ButtonState = 'default' | 'hover' | 'active' | 'disabled';

type GradientButtonColor = Record<ButtonState, string>;

type ButtonColorsType = {
  primary: GradientButtonColor;
  secondary: GradientButtonColor;
  tertiary: GradientButtonColor;
  quaternary: GradientButtonColor;
  outline: GradientButtonColor & { border: string }; // outline에 추가 속성 포함
  utility: {
    white: string;
    black: string;
  }; // 상태별 색상이 없는 그룹
};
const buttonSizeStyles = {
  xsmall: {
    height: 24,
    paddingHorizontal: 8,
  },
  small: {
    height: 32,
    paddingHorizontal: 12,
  },
  medium: {
    height: 40,
    paddingHorizontal: 16,
  },
  large: {
    height: 48,
    paddingHorizontal: 20,
  },
} as const;

const buttonRadiusStyles = {
  rounded: 30,
  square: 8,
} as const;

const getButtonStateColor = ({
  bg,
  state,
}: {
  bg: keyof typeof ButtonColors;
  state: ButtonState;
}) => {
  const buttonGroup = ButtonColors[bg];

  // 상태별 색상을 지원하지 않는 그룹(utility)은 기본값 반환
  if (bg === 'utility' || !('default' in buttonGroup)) {
    return ButtonColors.utility.white;
  }

  // 상태별 색상을 지원하는 그룹 처리
  return (buttonGroup as GradientButtonColor)[state] || ButtonColors.utility.white;
};


export const buttonStyles = ({
  size = 'medium',
  state = 'default',
  bg = 'primary',
  radius = 'rounded',
  textStyle = 'bodyMedium', // Typography에서 사용할 텍스트 스타일
}: {
  size?: keyof typeof buttonSizeStyles;
  state?: 'default' | 'hover' | 'active' | 'disabled';
  bg?: keyof typeof ButtonColors;
  radius?: keyof typeof buttonRadiusStyles;
  textStyle?: keyof typeof Typography; // Typography의 키를 사용
}) => {
  const sizeStyles = buttonSizeStyles[size];
  const borderRadius = buttonRadiusStyles[radius];
  const backgroundColor = bg === 'outline' ? 'transparent' : getButtonStateColor({ bg, state });
  const borderColor = bg === 'outline' ? getButtonStateColor({ bg: 'outline', state }) : 'transparent';
  const textColor = bg === 'outline' ? borderColor : ButtonColors.utility.white;

  return StyleSheet.create({
    button: {
      ...sizeStyles,
      backgroundColor,
      borderRadius,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: bg === 'outline' ? 1 : 0,
      borderColor,
    },
    buttonText: {
      ...Typography[textStyle], // Typography에서 텍스트 스타일 가져오기
      color: textColor, // 텍스트 색상은 버튼 스타일에 따라 동적으로 변경
    },
  });
};
