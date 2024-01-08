import React from 'react';
import { Image } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from "../components/customDrawerContent";

import HomeScreen from '../drawerScreens/HomeScreen';
import Profile from '../drawerScreens/Profile';
import Attendance from '../drawerScreens/Attendence';
import MarkView from '../drawerScreens/Markview';
import LeaveEntry from '../drawerScreens/LeaveEntry';

function MainScreen({navigation}) {
  const Drawer = createDrawerNavigator();

  function drawerOption(option){
    switch(option){
      case 0: navigation.navigate("Profile");
      break;
      case 1: navigation.navigate("Attendance");
      break;
      case 2: navigation.navigate("MarkView");
      break;
      case 3: navigation.navigate("LeaveEntry");
      break;
    }
    
  }


  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} drawerPressOption = {drawerOption} />}>
      <Drawer.Screen
        name="HomeScreen"
        options={{headerTitle:()=>{return <Image source={require("../assets/images/clg_logo.png")} style={{width:50,height:50}}/>}, headerTitleAlign:"center"}}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
      />
      <Drawer.Screen
        name="Attendance"
        component={Attendance}
      />
      <Drawer.Screen
        name="LeaveEntry"
        component={LeaveEntry}
      />
      <Drawer.Screen
        name="MarkView"
        component={MarkView}
      />
    </Drawer.Navigator>
  );
}

export default MainScreen;