import { StyleSheet } from 'react-native';
import { ButtonColor } from './Colors';

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
};

const buttonStateStyles = {
    primary: {
        default: ButtonColor.primary,
        hover: ButtonColor.primaryHover,
        active: ButtonColor.primaryActive,
        disabled: ButtonColor.primaryDisabled,
    },
    secondary: {
        default: ButtonColor.secondary,
        hover: ButtonColor.secondaryHover,
        active: ButtonColor.secondaryActive,
        disabled: ButtonColor.secondaryDisabled,
    },
    tertiary: {
        default: ButtonColor.tertiary,
        hover: ButtonColor.tertiaryHover,
        active: ButtonColor.tertiaryActive,
        disabled: ButtonColor.tertiaryDisabled,
    },
    quaternary: {
        default: ButtonColor.quaternary,
        hover: ButtonColor.quaternaryHover,
        active: ButtonColor.quaternaryActive,
        disabled: ButtonColor.quaternaryDisabled,
    },
    outline: {
        default: ButtonColor.outline,
        hover: ButtonColor.outlineHover,
        active: ButtonColor.outlineActive,
        disabled: ButtonColor.outlineDisabled,
    },
};

const buttonRadiusStyles = {
    rounded: 30,
    square: 8,
};

export const buttonStyles = ({
    size = 'medium',
    state = 'default',
    bg = 'primary',
    radius = 'rounded',
}: {
    size?: keyof typeof buttonSizeStyles;
    state?: 'default' | 'hover' | 'active' | 'disabled';
    bg?: keyof typeof buttonStateStyles;
    radius?: keyof typeof buttonRadiusStyles;
}) => {
    const sizeStyles = buttonSizeStyles[size];
    const stateStyles = buttonStateStyles[bg][state];
    const radiusStyles = buttonRadiusStyles[radius];

    return StyleSheet.create({
        button: {
            ...sizeStyles,
            backgroundColor: bg === 'outline' ? ButtonColor.white : stateStyles,
            borderRadius: radiusStyles,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: bg === 'outline' ? 1 : 0,
            borderColor:
                bg === 'outline'
                    ? buttonStateStyles.outline[state]
                    : 'transparent',
        },
        buttonText: {
            fontSize: 16,
            fontWeight: '700',
            color:
                bg === 'outline'
                    ? buttonStateStyles.outline[state]
                    : ButtonColor.white,
        },
    });
};
