import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../theme/global.styles';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <FAB
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        style={globalStyles.fab}
        icon={({ size, color }) => (
          <Icon name="logo-playstation" size={size} color={color} />
        )}
      />
    </View>
  );
};

export default CounterM3Screen;
