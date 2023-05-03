import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              title: 'Início',
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}