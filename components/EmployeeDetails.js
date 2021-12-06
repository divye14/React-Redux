import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from 'react-native';

const EmployeeDetails = ({route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePicture}>
        <Image style={styles.Picture} source={route.params.Profile}></Image>
      </View>
      <View style={styles.info}>
        <Text style={styles.empName}>
          Name:
          {"\t"} {route.params.Name} {"\t"}
           {route.params.lastName}
        </Text>
        <Text style={styles.empName}>Address: {route.params.Address}</Text>
        <Text style={styles.empName}>Number: {route.params.Mobile}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: 'orange',
  },
  profilePicture: {
    justifyContent: 'center',
    alignItems:'center',
    flex: 1,
    marginTop:150
  },
  Picture: {
    height: 200,
    width: 200,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  info: {
    padding: 10,
    flex: 2,
    alignItems:'flex-start',
    marginTop:20
  },

  empName: {
    fontSize: 20,
    color:'black',
    padding: 5,
  },
});
export default EmployeeDetails;
