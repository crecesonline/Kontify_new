import React from 'react';
import { SafeAreaView, ViewProps, Platform, StatusBar, View } from 'react-native';
import { styled } from 'nativewind';

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);

interface ScreenProps extends ViewProps {
  safeArea?: boolean;
  backgroundColor?: string;
}

export const Screen: React.FC<ScreenProps> = ({ 
  children, 
  safeArea = true, 
  backgroundColor = 'bg-black',
  className,
  ...props 
}) => {
  const Wrapper = safeArea ? StyledSafeAreaView : StyledView;
  
  return (
    <Wrapper 
      className={`flex-1 ${backgroundColor} ${className}`}
      style={{
        paddingTop: safeArea && Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }}
      {...props}
    >
      <StatusBar barStyle="light-content" backgroundColor="black" />
      {children}
    </Wrapper>
  );
};
