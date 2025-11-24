import React from 'react';
import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/Screen';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function Register() {
  return (
    <Screen>
      <Container centerContent maxWidth="sm">
        <View className="w-full mb-8">
          <Text className="text-3xl font-bold text-white mb-2">Crear Cuenta</Text>
          <Text className="text-gray-400">Únete a Kontify hoy mismo</Text>
        </View>

        <View className="w-full gap-4">
          <Input 
            placeholder="Nombre completo" 
          />
          <Input 
            placeholder="Correo electrónico" 
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input 
            placeholder="Contraseña" 
            secureTextEntry
          />
          <Input 
            placeholder="Confirmar contraseña" 
            secureTextEntry
          />
          
          <Button 
            title="Registrarse" 
            onPress={() => console.log('Register')} 
            className="mt-4"
          />
          
          <Button 
            title="¿Ya tienes cuenta? Inicia sesión" 
            variant="ghost" 
            onPress={() => router.replace('/(auth)/login')} 
          />
        </View>
      </Container>
    </Screen>
  );
}
