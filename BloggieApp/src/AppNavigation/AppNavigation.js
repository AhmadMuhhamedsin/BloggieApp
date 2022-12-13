import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreatePost from '../screens/CreatePost/CreatePost';
import Post from '../screens/Details/Post';
const Stack = createNativeStackNavigator();

export default function AppNavigation({AppState}) {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown: false}}>
        {(props) => <Home {...props} AppState={AppState} />}
      </Stack.Screen>
      <Stack.Screen name="Post" options={{headerShown: false}}>
        {(props) => <Post {...props} AppState={AppState} />}
      </Stack.Screen>
      <Stack.Screen name="CreatePost" options={{headerShown: false}}>
        {(props) => <CreatePost {...props} AppState={AppState} />}
      </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>  
    )
}