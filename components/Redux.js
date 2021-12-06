import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Reduxapp = ()=>{
    const [count, setCount] = useState(5);
    const increment = ()=>{
       setCount=count++
    }
    return(
        <View style={styles.container}>
            <Text style={styles.counttext}>TIMES:{"\t"}{count}</Text>
            <TouchableOpacity
             onpress={increment}
             style={styles.one}>
                <Text style={styles.incre}>INCREASE</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onpress={()=>setCount(count-1)}
            style={styles.one}>
                <Text style={styles.incre}>DECREASE</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Reduxapp;

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'grey'
    },
    one:{
        backgroundColor:'green',
        borderRadius:5,
        width:'50%',
        justifyContent:'center',
        alignItems:'center',
        margin:5

    },
    incre:{
        fontSize:25,
        color:'white',
        padding:5,
        margin:2
    },
    counttext:{
        fontSize:25,
        fontWeight:'bold',
        color:'white'
    }
});