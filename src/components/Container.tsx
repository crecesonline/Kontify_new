import React from 'react';
import { View, ViewProps, Platform } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);

interface ContainerProps extends ViewProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  centerContent?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  maxWidth = 'lg', 
  centerContent = false,
  className, 
  ...props 
}) => {
  const getMaxWidth = () => {
    if (Platform.OS !== 'web') return 'w-full';
    
    switch (maxWidth) {
      case 'sm': return 'max-w-screen-sm';
      case 'md': return 'max-w-screen-md';
      case 'lg': return 'max-w-screen-lg';
      case 'xl': return 'max-w-screen-xl';
      case 'full': return 'w-full';
      default: return 'max-w-screen-lg';
    }
  };

  return (
    <StyledView 
      className={`flex-1 w-full self-center px-4 ${getMaxWidth()} ${centerContent ? 'items-center justify-center' : ''} ${className}`}
      {...props}
    >
      {children}
    </StyledView>
  );
};
