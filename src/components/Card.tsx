import React from 'react';
import { View, ViewProps } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);

interface CardProps extends ViewProps {
  variant?: 'default' | 'outlined' | 'elevated';
}

export const Card: React.FC<CardProps> = ({ variant = 'default', className, children, ...props }) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'outlined':
        return 'bg-transparent border border-gray-700';
      case 'elevated':
        return 'bg-gray-800 shadow-lg';
      default:
        return 'bg-gray-900';
    }
  };

  return (
    <StyledView
      className={`rounded-xl p-4 ${getVariantStyle()} ${className}`}
      {...props}
    >
      {children}
    </StyledView>
  );
};
