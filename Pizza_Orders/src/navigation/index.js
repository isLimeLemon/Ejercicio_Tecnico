import React from 'react'
import { connect } from 'react-redux'
import { getValidSession } from '../store/session/selector'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text } from 'react-native'

import LogInScreen from '../screens/loginScreen'

const Stack = createNativeStackNavigator()

const Navigation = ({sessionValid}) => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          {
            sessionValid ?
            <Stack.Screen name='orders' component={<></>}/>
            :
            <Stack.Screen name='logIn' component={LogInScreen} />
          }
        </Stack.Navigator>
      </NavigationContainer>
  )
}
    
    const mapStateToProps = state => {
        return {
        sessionValid:getValidSession(state)
        }
    }
  
  const connectedNavigation = connect(
    mapStateToProps,
    null
  )(Navigation)


export default connectedNavigation