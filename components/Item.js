import React,{useState} from "react";
import { StyleSheet, View, Text, Alert, TextInput, TouchableOpacity } from "react-native";
import  database  from "@react-native-firebase/database";


const addItem = item=>{
    database().ref('/items').push({
        name:item
    });

};

export default function AddItem(){
    const [name, onChangeText] = useState('');


    const handleSubmit=()=>{
        addItem(name);
        Alert.alert('Item Saved Successfully');
    }

    return(
        <View style={styles.main}>
            <Text style={styles.title}>Add Item</Text>
            <TextInput 
            style={styles.itemInput}
            onChangeText={(text)=>onChangeText(text)}/>
           <View style={styles.addbutton}>
           <TouchableOpacity
            style={styles.appbutton}
            onPress={handleSubmit}>
                <Text style={styles.text}>ADD</Text>
            </TouchableOpacity>
           </View>
        </View>
    );
}

const styles=StyleSheet.create({

    main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'grey',
      },
      title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color:'white'
      },
    appbutton:{
        backgroundColor: "#009688", 
        borderRadius: 10,
        paddingVertical: 10,
        elevation: 10,
        width:'70%',
        height:50,
        margin:10,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    addbutton:{
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    itemInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
      },
})
