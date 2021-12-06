import React,{useEffect,useState} from "react";
import { StyleSheet, View, Text, Alert, TouchableOpacity } from "react-native";

const IntervalAlert = () =>
{
    const [text, settext] = useState("ALERT MESSAGE WILL APPEAR AFTER 5 SECS YOUR CLICKING");
    useEffect (()=>{
        console.warn("useEffect has been called");
    })

    const wantalert=()=>{
        setTimeout(() => {
            Alert.alert("ALERT MESSSAGE IS APPEARING" , " AFTER 5 SECS")
        }, 3000);
    }

    return(
        <View style={{flex:1, backgroundColor:'red'}}>
            <View style={{flex:1, backgroundColor:'grey', justifyContent:'center'}}>
            <Text style={{color:'black', fontSize:30, justifyContent:'center', alignSelf:'center'}}>{text}</Text>
            </View>
            <View style={styles.container}>
            <TouchableOpacity
            onPress={wantalert}
             style={styles.touchview}>
                <Text style={styles.text}>WANT ALERT MESSAGE?</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

export default IntervalAlert;

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    touchview:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "#009688", 
        borderRadius: 10,
        paddingVertical: 10,
        elevation: 10,
        width:'70%',
        height:50,
        margin:10,
        
    },
    text:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
})