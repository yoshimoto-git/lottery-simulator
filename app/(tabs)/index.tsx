// app/(tabs)/index.tsx

import { useState } from 'react';
import { Button, Text, View, useColorScheme } from 'react-native';

export default function HomeScreen() {
  const theme = useColorScheme();

  const [numbers, setNumbers] = useState<number[]>([]);

  const drawLottery = () => {
    const generated = new Set<number>();
  
    while (generated.size < 6) {
      const num = Math.floor(Math.random() * 43) + 1;
      generated.add(num);
    }
  
    const result = Array.from(generated);
    setNumbers(result.sort((a, b) => a - b ));
    console.log(result);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme === 'dark' ? '#000' : '#fff' }}>
      <Text style={{ color: theme === 'dark' ? '#fff' : '#000'}}>宝くじ結果: {numbers.join(', ')}</Text>
      <Button title="抽選する" onPress={drawLottery} />
    </View>
  );
}
