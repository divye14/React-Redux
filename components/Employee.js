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

const Employee = ({navigation}) => {
  const [empName, setEmpname] = useState([
    {
      key: '1',
      name: 'Emp1',
      image: require('../assets/images/5.png'),
      lastName: 'Emp11',
      Address: 'pune',
      Mobile: '1111111111',
    },
    {
      key: '2',
      name: 'Emp2',
      image: require('../assets/images/2.png'),
      lastName: 'Emp22',
      Address: 'pune',
      Mobile: '222222222',
    },
    {
      key: '3',
      name: 'Emp3',
      image: require('../assets/images/4.png'),
      lastName: 'Emp33',
      Address: 'pune',
      Mobile: '3333333333',
    },
    {
      key: '4',
      name: 'Emp4',
      image: require('../assets/images/1.png'),
      lastName: 'Emp44',
      Address: 'Mumbai',
      Mobile: '4444444444',
    },
    {
      key: '5',
      name: 'Emp5',
      image: require('../assets/images/3.png'),
      lastName: 'Emp55',
      Address: 'Mumbai',
      Mobile: '5555555555',
    },


    {
      key: '6',
      name: 'Emp6',
      image: require('../assets/images/5.png'),
      lastName: 'Emp66',
      Address: 'pune',
      Mobile: '1111111111',
    },
    {
      key: '7',
      name: 'Emp7',
      image: require('../assets/images/2.png'),
      lastName: 'Emp77',
      Address: 'pune',
      Mobile: '222222222',
    },
    {
      key: '8',
      name: 'Emp8',
      image: require('../assets/images/4.png'),
      lastName: 'Emp88',
      Address: 'pune',
      Mobile: '3333333333',
    },
    {
      key: '9',
      name: 'Emp9',
      image: require('../assets/images/1.png'),
      lastName: 'Emp99',
      Address: 'Mumbai',
      Mobile: '4444444444',
    },
    {
      key: '10',
      name: 'Emp10',
      image: require('../assets/images/3.png'),
      lastName: 'Emp100',
      Address: 'Mumbai',
      Mobile: '5555555555',
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
      style={styles.list}
        data={empName}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.key}
            onPress={() =>
             navigation.navigate('EMPLOYEEDETAILS',{
                Name: item.name,
                Address: item.Address,
                Mobile: item.Mobile,
                lastName: item.lastName,
                Profile: item.image,
              })
            }>
            <View style={styles.listDisplay}>
              <Text style={styles.listText}>{item.name}</Text>
              <Image style={styles.images} source={item.image}></Image>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  listDisplay: {
    flex: 2, 
    flexDirection: 'row',
    justifyContent: 'center',
    margin:9,
    backgroundColor:'grey',
    width:'70%',
    alignSelf:'center',
    borderRadius:7,
    shadowColor:'black',
    shadowRadius:15,
    shadowOpacity:1,
    elevation:5,
    shadowOffset:{width:0, height:0}
  },
  images: {
    width: 100,
    height: 100,
    margin: 7,
    borderRadius: 7,
    borderColor: 'black',
    borderWidth: 1,
  },
  listText: {
    width: '25%',
    textAlignVertical: 'center',
    padding: 10,
    color: '#000',
    fontSize:20,
    fontWeight:'bold'
  },
});
export default Employee;
