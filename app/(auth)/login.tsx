import React from 'react';
import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/Screen';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function Login() {
  return (
    <Screen>
      <Container centerContent maxWidth="sm">
        <View className="w-full mb-8">
          <Text className="text-3xl font-bold text-white mb-2">Bienvenido de nuevo</Text>
          <Text className="text-gray-400">Ingresa a tu cuenta para continuar</Text>
        </View>

        <View className="w-full gap-4">
          <Input 
            placeholder="Correo electrónico" 
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input 
            placeholder="Contraseña" 
            secureTextEntry
          />
          
          <Button 
            title="Iniciar Sesión" 
            onPress={() => console.log('Login')} 
            className="mt-4"
          />
          
          <Button 
            title="Volver" 
            variant="ghost" 
            onPress={() => router.back()} 
          />
        </View>
      </Container>
    </Screen>
  );
}
