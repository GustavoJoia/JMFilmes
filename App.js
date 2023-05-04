import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Stream from './src/screens/Stream';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Stream' >
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              title: 'Início',
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Stream'
            component={Stream}
            options={{
              title: 'Streaming',
              headerTitle: '',
              headerShown: true
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
