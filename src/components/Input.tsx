import React from 'react';
import { TextInput, View, Text, TextInputProps } from 'react-native';
import { styled } from 'nativewind';

const StyledTextInput = styled(TextInput);
const StyledView = styled(View);
const StyledText = styled(Text);

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
  return (
    <StyledView className="w-full mb-4">
      {label && <StyledText className="text-gray-300 mb-1 font-medium">{label}</StyledText>}
      <StyledTextInput
        className={`w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:border-primary-500 ${error ? 'border-red-500' : ''} ${className}`}
        placeholderTextColor="#6b7280"
        {...props}
      />
      {error && <StyledText className="text-red-500 text-sm mt-1">{error}</StyledText>}
    </StyledView>
  );
};
