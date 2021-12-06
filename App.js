import React from 'react';
import {Text,View, StyleSheet, Alert,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Details from './components/Details';
import Calendar from './components/Calendar';
import Glocation from './components/GeoLocation';
import ApiScreen from './components/API';
import NavigationActivity from './components/NavigationActivity';
import ListView from './components/ListView';
import Fruits from './components/Fruits';
import Calcu from './components/Calculator';
import IntervalAlert from './components/AlertInterval';
import AddItem from './components/Item';
import Push_Notification from './components/PushNotification';
import Camera from './components/Camera';
import Gallery from './components/Gallery';
import Employee from './components/Employee';
import Titleheader from './components/HeaderTitle';
import EmployeeDetails from './components/EmployeeDetails';
import Reduxapp from './components/Redux';
const stack = createNativeStackNavigator();
const App = ()=>{
  return(
   <NavigationContainer>
     <stack.Navigator initialRouteName="NAV_ACTIVITY">
       <stack.Screen name="HEADER" component={Titleheader}/>
       <stack.Screen name="NAV_ACTIVITY" component={NavigationActivity}/>
       <stack.Screen name="HOME" component={Login}/>
       <stack.Screen name="FRUITS" component={Fruits} options={{headerBackVisible:false}}/>
       <stack.Screen name="DETAILS" component={Details}/>
       <stack.Screen name="EMPLOYEE" component={Employee}/>
       <stack.Screen name="EMPLOYEEDETAILS" component={EmployeeDetails}/>

       <stack.Screen name="CALENDAR" component={Calendar}/>
       <stack.Screen name="GEOLOCATION" component={Glocation}/>
       <stack.Screen name="API" component={ApiScreen} options={{headerBackVisible:false}}/>
       <stack.Screen name="LISTVIEW" component={ListView}/>
       <stack.Screen name="CALCULATOR" component={Calcu}/>
       <stack.Screen name="ALERT" component={IntervalAlert}/>
       <stack.Screen name="ITEM" component={AddItem}/>
       <stack.Screen name="NOTIFICATION" component={Push_Notification}/>
       <stack.Screen name="CAMERA" component={Camera}/>
       <stack.Screen name="GALLERY" component={Gallery}/>
       <stack.Screen name="REDUXAPP" component={Reduxapp}/>
     </stack.Navigator>
   </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
})