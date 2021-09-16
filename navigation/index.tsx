/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme, TabRouter } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Image } from 'react-native';
import { Text,View } from '../components/Themed';

import ChatRoomScreen from '../screens/ChatRoomScreen';
import ChatScreen from '../screens/ChatScreen';
import LoginScreen from '../screens/LoginScreen'

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

function LogoTitle(route) {
  return (
    <View>
      <Image style={{width: 50, height: 50}} source={route.params.image}/>
    </View>
  )
}


// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      //Changing Colors of app
      
      headerStyle: {
        backgroundColor: 'black'
      }
    }}>

      <Stack.Screen 
        name="Root" 
        component={ChatScreen} 
        options={{
          title: "",
          
          headerRight: () => {
            return(
            <View style={{marginRight: 10}}>
              <FontAwesome name="search" size={24} color="white" />
            </View>
            )
          },
          headerLeft: () => {
            return(
              <View style={{marginLeft: 10}}>
                <Feather name="settings" size={24} color="white" />
              </View>
            )
          }
          
        }}
      />

      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen} 
        options={({route}) => ({
          title: route.params.name,
        })}
      />

      </Stack.Navigator>
  );
}
