import React, {Component, useState} from 'react';
import {
  Button,
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
class Titleheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      header: 'HEADER TITLE',
    };
  }
  submit = () => {
    var textin = this.state.text;
    this.setState({header: textin});
  };
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.textStyle}> {this.state.header}</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="enter the text"
            placeholderTextColor="white"
            fontWeight="bold"
            onChangeText={text => {
              this.setState({text});
            }}></TextInput>
          <TouchableOpacity style={styles.appbutton}onPress={() => {this.submit();}}>
              <Text style={styles.text}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#142136',
  },
  container: {
    margin: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex:1
  },
  header: {
    width: '90%',
    height:80,
    backgroundColor: '#bac9e0',
    marginTop: '10%',
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
  },
  textStyle: {
    textAlign: 'center',
    color: 'black',
    fontWeight:'bold',
    fontSize: 25,
    padding: 5
  },
  appbutton:{
    backgroundColor: "#009688", 
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 10,
    width:'70%',
    height:60,
    margin:12.5,
    justifyContent:'center'
},
text:{
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
},
  input: {
    borderColor: 'white',
    width: 250,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
    color:'white'
  },
  button: {
    borderRadius: 5,
  },
});
export default Titleheader;