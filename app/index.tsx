import React from 'react';
import { Text, View, Image } from 'react-native';
import { Link, router } from 'expo-router';
import { Screen } from '@/components/Screen';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

export default function Index() {
  return (
    <Screen>
      <Container centerContent>
        <View className="items-center mb-8">
          <Text className="text-4xl font-bold text-primary-500 mb-2">Kontify</Text>
          <Text className="text-gray-400 text-center text-lg">
            Tu Asesor Fiscal y Legal Impulsado por IA
          </Text>
        </View>

        <Card className="w-full mb-8 items-center">
          <Text className="text-white text-xl font-semibold mb-4">Bienvenido</Text>
          <Text className="text-gray-400 text-center mb-6">
            Gestiona tus impuestos y consultas legales de manera inteligente y rápida.
          </Text>
          
          <View className="w-full gap-4">
            <Button 
              title="Iniciar Sesión" 
              onPress={() => router.push('/(auth)/login')} 
            />
            <Button 
              title="Registrarse" 
              variant="outline" 
              onPress={() => router.push('/(auth)/register')} 
            />
          </View>
        </Card>

        <Text className="text-gray-600 text-sm">
          Versión 1.0.0
        </Text>
      </Container>
    </Screen>
  );
}
