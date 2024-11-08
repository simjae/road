const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
    transparent: 'transparent',
    current: 'currentColor',
    white: '#FFFFFF',
    black: '#000000',

    // General Colors
    base: {
        background: '#020824',
        accent: '#F19CAD',
        primary: '#ADA2E2',
        secondary: '#FFC937',
        disabled: '#56568E',
        gray: {
            dark: '#222',
            default: '#666',
            light: '#999',
            lighter: '#C1C1C1',
        },
        purple: {
            dark: '#562F96',
            default: '#5151A3',
            light: '#9988B3',
            lighter: '#DCD4FF',
        },
    },

    // Gradients
    gradients: {
        yellow: 'linear-gradient(180deg, #FFC937 0%, #EE941F 100%)',
        purple: 'linear-gradient(180deg, #121238 0%, #7138A3 100%)',
        pink: 'linear-gradient(180deg, #FFC937 0%, #FF8EB0 100%)',
    },

    // Themes
    light: {
        text: '#11181C',
        background: '#fff',
        tint: tintColorLight,
        icon: '#687076',
        tabIconDefault: '#687076',
        tabIconSelected: tintColorLight,
    },
    dark: {
        text: '#ECEDEE',
        background: '#151718',
        tint: tintColorDark,
        icon: '#9BA1A6',
        tabIconDefault: '#9BA1A6',
        tabIconSelected: tintColorDark,
    },
} as const;

// Type Definitions
type NestedObject<T> = T extends Record<string, infer U> ? U : never;
export type ColorType = keyof typeof Colors | NestedObject<typeof Colors>;

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

export const ButtonColors: ButtonColorsType = {
  primary: {
    default: 'linear-gradient(180deg, #FEC936 15.79%, #F4E261 81.58%)',
    hover: 'linear-gradient(180deg, #FF9F2F 15.79%, #F4E261 109.21%)',
    active: 'linear-gradient(180deg, #FFA231 0%, #F1926A 177.5%)',
    disabled: 'linear-gradient(180deg, #262650 15.79%, #323258 109.21%)',
  },
  secondary: {
    default: 'linear-gradient(180deg, #5A319D 0%, #402271 177.5%)',
    hover: 'linear-gradient(180deg, #32175D 0%, #402271 177.5%)',
    active: 'linear-gradient(180deg, #7D49D0 0%, #402271 177.5%)',
    disabled: 'linear-gradient(180deg, #34345A 0%, #34345A 177.5%)',
  },
  tertiary: {
    default: '#D2D2F7',
    hover: '#B7B7E2',
    active: '#9393C5',
    disabled: '#34345A',
  },
  quaternary: {
    default: '#4F4E9F',
    hover: '#323182',
    active: '#3937BF',
    disabled: 'linear-gradient(180deg, #34345A 0%, #34345A 177.5%)',
  },
  outline: {
    border: '#AB6698',
    default: '#AB6698',
    hover: '#0F0E36',
    active: '#18174E',
    disabled: '#34345A',
  },
  utility: {
    white: '#ffffff',
    black: '#000000',
  },
};
