import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from './screens/details';
import Welcome from './screens/welcome';

const RootStack = createStackNavigator();

function AppNavigator(){
    return(
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name="Home" component={Welcome} />
                <RootStack.Screen name="Detail" component={Detail} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;