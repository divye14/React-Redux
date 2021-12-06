import React, { Component } from "react";
import { StyleSheet, FlatList, View, Text, Alert, TouchableHighlight } from "react-native";

export default class ListView extends Component{
    render(){
        return(
            <FlatList style={styles.container}
            data={[
                {title:'SAMSUNG'},
                {title:'NOKIA'},
                {title:'MI'},
                {title:'APPLE'},
                {title:'REALME'},
                {title:'ONE PLUS'},
                {title:'VIVO'},
                {title:'POCO'},
                {title:'OPPO'},
                {title:'MOTO'},
                {title:'IQOO'},
                {title:'HONOR'},
                {title:'LAVA'},
                {title:'LENOVO'},
                {title:'ASUS'},
                {title:'LG'},
                {title:'INTEX'},
                {title:'HUAWEI'},
                {title:'GOOGLE'},
                {title:'SONY'},

                {title:'HTC'},
                {title:'RELIANCE'},
                {title:'TCL'},
                {title:'HTC'},
                {title:'MICROMAX'},
                {title:'YOLO'},
                {title:'YUREKA'},
                {title:'PANASONIC'},
                {title:'KARBONN'},
                {title:'LYF'},


            ]}
            renderItem={({item})=> 
            <TouchableHighlight
             onPress={()=>[Alert.alert('Phone',item.title,[{text:'Understood', onPress:()=>console.log(item.title)}])]}
            >
            <Text style={styles.item}>{item.title}</Text>
            </TouchableHighlight>
            }

            >
            </FlatList>
        );
    }
}


const styles = StyleSheet.create({

    container:{
        marginBottom:10
    },
   
    item:{
        padding:5,
        margin:5,
        color:'white',
        fontWeight:'bold',
        fontSize:25,
        borderWidth:5,
        textAlign:'center',
        backgroundColor:'#5b0e2d'
    }
})