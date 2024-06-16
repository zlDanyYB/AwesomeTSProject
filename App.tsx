import { SafeAreaView, } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import IonIcon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/presentation/components/MainScreen';

export const App =()=>{
  return (
  <NavigationContainer>
   <PaperProvider
    settings={{
      icon: (props)=> <IonIcon {...props} />
    }}
   >
    <SafeAreaView style={{flex:1}} >    
      {/*<CounterM3Screen/>*/}
    </SafeAreaView>
   </PaperProvider>
   <MainScreen></MainScreen>
  </NavigationContainer>
  )
}

