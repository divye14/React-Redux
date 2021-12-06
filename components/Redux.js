import React, { useState } from "react";
import ReduxContainer from '../container/ReduxContainers';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Reduxapp = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.comp2}>
                <ReduxContainer/>
            </View>
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
    },
    comp2:{
        backgroundColor:'orange',
        margin:10,
        padding:10
    }
});