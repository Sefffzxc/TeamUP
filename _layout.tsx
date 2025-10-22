import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="ApplyRoleScreen" options={{ headerShown: false }} />
        <Stack.Screen name="SettingsScreen" options={{ headerShown: false }} />
        <Stack.Screen name="EditProfileScreen" options={{ headerShown: false }} />
        
        <Stack.Screen name="ApplyRoleForm" options={{ headerShown: false }} />
        <Stack.Screen name="RoleApplicationSuccess" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
