# Kontify Structure Backup v1

Este archivo contiene un respaldo de la estructura modular y limpia del proyecto Kontify.
Se han eliminado claves, tokens y lógica de negocio sensible, conservando únicamente la arquitectura, tipos e interfaces.

## Contenido del Backup

- **src/core/**: Tipos, constantes y utilidades base.
- **src/features/**: Módulos funcionales (Chat AI, Expertos).
- **Configuración**: Archivos base de Expo, TypeScript y Vercel.

## Entorno Esperado

- **Framework**: Expo (React Native + Web)
- **Backend**: Supabase (Auth + DB)
- **AI**: OpenAI (GPT-4o-mini)
- **Deploy**: Vercel

## Restauración

1. Descomprimir el archivo.
2. Ejecutar `npm install`.
3. Configurar variables de entorno en `.env.local`:
   - `EXPO_PUBLIC_SUPABASE_URL`
   - `EXPO_PUBLIC_SUPABASE_ANON_KEY`
   - `EXPO_PUBLIC_OPENAI_API_KEY`
4. Ejecutar `npx expo start`.

## Archivos Manuales Requeridos

- `.env.local` (Variables de entorno)
- `google-services.json` (Firebase/Android si aplica)
- `GoogleService-Info.plist` (Firebase/iOS si aplica)
