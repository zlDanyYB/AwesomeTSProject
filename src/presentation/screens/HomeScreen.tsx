import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Icon name="home" size={30} color="#4F8EF7" />
      <Text style={styles.text}>Home Screen</Text>
      
      <View style={styles.bottomIconsContainer}>
        <Icon
          name="calculator"
          size={30}
          color="#7b68ee"
          style={styles.bottomIconLeft}
          onPress={() => navigation.navigate('Counter')}
        />
      
        <Icon
          name="cloud"
          size={30}
          color="#7b68ee"
          style={styles.bottomIconRight}
          onPress={() => navigation.navigate('Main')}
        />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b0c4de'
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 70,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  bottomIconLeft: {
    position: 'absolute',
    left: 90,
    
  },
  bottomIconRight: {
    position: 'absolute',
    right: 90,
  },
  
});

export default HomeScreen;
