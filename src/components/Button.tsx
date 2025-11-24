import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className,
  ...props
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-600';
      case 'outline':
        return 'bg-transparent border border-primary-500';
      case 'ghost':
        return 'bg-transparent';
      default:
        return 'bg-primary-500';
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'sm':
        return 'py-2 px-3';
      case 'lg':
        return 'py-4 px-6';
      default:
        return 'py-3 px-5';
    }
  };

  const getTextStyle = () => {
    if (variant === 'outline' || variant === 'ghost') return 'text-primary-500';
    return 'text-white';
  };

  return (
    <StyledTouchableOpacity
      className={`rounded-lg flex-row justify-center items-center ${getVariantStyle()} ${getSizeStyle()} ${disabled ? 'opacity-50' : ''} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? '#025940' : '#fff'} />
      ) : (
        <StyledText className={`font-semibold text-center ${getTextStyle()}`}>
          {title}
        </StyledText>
      )}
    </StyledTouchableOpacity>
  );
};
