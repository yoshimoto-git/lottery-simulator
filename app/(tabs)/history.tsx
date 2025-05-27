import { Text, View, useColorScheme } from 'react-native';

export default function HistoryScreen() {
  const theme = useColorScheme();
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#000' : '{theme}#fff'  
    }}>
      <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>履歴ページ</Text>
    </View>
  );
}
