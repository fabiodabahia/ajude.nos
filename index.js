import React, {component} from 'React'
import {creatAppContainer, createStackNavigator, createAppContainer} from 'react-navigation';

import Login from './Login';
import Home from '/.Home';

const MainNav = createStackNavigator (
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header:null
            }

         },
         Home:{
             screen: Home,
             navigationOptions:{
                 headerTitle: 'Home'
             }
         }
    } 
)

export default createAppContainer(MainNav);