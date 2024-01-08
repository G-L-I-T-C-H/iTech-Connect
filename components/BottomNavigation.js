import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Classroom from './Classroom';
import Home from './Home';
import Peer from './Peer';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  
  const navigation = useNavigation();
  
    return (
    <Tab.Navigator
        screenOptions={(route)=>({
        headerShown:true,
        tabBarActiveTintColor:"#B666D2",
        tabBarIcon:({color,size,focused})=>{
            let iconName;
            if(route.route.name === "Home"){
                iconName = focused ? 'home' : 'home-outline';
            }else if (route.route.name === 'Peer') {
                iconName = focused ? 'person-add' : 'person-add-outline';
                size = focused ? size + 8 : size+5;
          } else if (route.route.name === 'Class') {
                iconName = focused ? 'school' : 'school-outline';
                size = focused ? size + 8 : size+5;
          }

            return <Ionicons name={iconName} size={size} color={color} /> 
        }
        })}
    
    
    
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Peer" component={Peer} />
      <Tab.Screen name = "Class" component={Classroom} />
    </Tab.Navigator>
  );
};


export default BottomNavigation;