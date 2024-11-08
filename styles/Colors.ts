export const Color = {
    transparent: 'transparent',
    current: 'currentColor',
    white: '#FFFFFF',
    background: '#020824',
    accent: '#F19CAD',
    primary: '#ADA2E2',
    secondary: '#FFC937',
    disabled: '#56568E',
    grayDark: '#222',
    gray: '#666',
    grayLight: '#999',
    grayLighter: '#C1C1C1',
    purpleDark: '#562F96',
    purple: '#5151A3',
    purpleLight: '#9988B3',
    purpleLighter: '#DCD4FF',
    gradientYellow: 'linear-gradient(180deg, #FFC937 0%, #EE941F 100%)',
    gradientPurple: 'linear-gradient(180deg, #121238 0%, #7138A3 100%)',
    gradientPink: 'linear-gradient(180deg, #FFC937 0%, #FF8EB0 100%)',
} as const;

type ColorValues = (typeof Color)[keyof typeof Color];
export type ColorType = keyof { [key in ColorValues]: key };

export const ButtonColor = {
    primary: 'linear-gradient(180deg, #FEC936 15.79%, #F4E261 81.58%);',
    primaryHover: 'linear-gradient(180deg, #FF9F2F 15.79%, #F4E261 109.21%);',
    primaryActive: 'linear-gradient(180deg, #FFA231 0%, #F1926A 177.5%);',
    primaryDisabled: 'linear-gradient(180deg, #262650 15.79%, #323258 109.21%)',

    secondary: 'linear-gradient(180deg, #5A319D 0%, #402271 177.5%)',
    secondaryHover: 'linear-gradient(180deg, #32175D 0%, #402271 177.5%)',
    secondaryActive: 'linear-gradient(180deg, #7D49D0 0%, #402271 177.5%)',
    secondaryDisabled: 'linear-gradient(180deg, #34345A 0%, #34345A 177.5%)',

    tertiary: '#D2D2F7',
    tertiaryHover: '#B7B7E2',
    tertiaryActive: '#9393C5',
    tertiaryDisabled: '#34345A',

    quaternary: '#4F4E9F',
    quaternaryHover: '#323182',
    quaternaryActive: '#3937BF',
    quaternaryDisabled: 'linear-gradient(180deg, #34345A 0%, #34345A 177.5%)',

    outlineBorder: '#AB6698',
    outline: '#AB6698',
    outlineHover: '#0F0E36',
    outlineActive: '#18174E',
    outlineDisabled: '#34345A',

    white: '#ffffff',
    black: '#000000',
};

export type ButtonColorType = keyof typeof ButtonColor;
