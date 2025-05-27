import { Text, View, useColorScheme } from 'react-native';

export default function SettingsScreen() {
  const theme = useColorScheme();
  return (
    <View style={{ 
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#000' : '#fff'
    }}>
      <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>設定ページ</Text>
    </View>
  );
}
