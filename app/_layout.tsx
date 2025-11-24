import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

// This is a simple provider to wrap the app. 
// In a real app, you might want to put the Supabase Auth Provider here.
const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {
  return <View style={{ flex: 1 }}>{children}</View>;
};

export default function RootLayout() {
  return (
    <SupabaseProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: '#000000',
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </SupabaseProvider>
  );
}
