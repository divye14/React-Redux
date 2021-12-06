import React from "react";
import { StyleSheet,View,Text ,Image} from "react-native";

const Details =({route})=>{
   
    return(
        <View style={styles.container}>
           <View style={styles.getimages}>
            <Image
             source={route.params.image}
             style={styles.getImage}/>
            </View>
           <View style={styles.box}>
           <Text style={styles.fruitname}>{route.params.name}</Text>
            <Text style={styles.desc}>{route.params.description}</Text>
           </View>
           
        </View>
    );
}
export default Details;

const styles=StyleSheet.create({
    getImage:{
        width:'80%',
        height:300,
        borderRadius:500,
        borderColor:'red',
        borderWidth:5,
        margin:10,
        alignSelf:'center',
        
    },
    box:{
        borderWidth:2,
        borderRadius:10,
        borderColor:'red',
        width:'80%',
        alignSelf:'center',


    },
    container:{
        backgroundColor:'skyblue',
        flex:1
    },

    fruitname:{
        textAlign:'center',
        margin:5,
        fontWeight:'bold',
        fontSize:40,
        color:'red',
        transform:[{rotateX:'30deg'}],
        borderBottomWidth:2, 
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        borderBottomColor:'red',
    },
    desc:{
        margin:20,
        fontSize:25,
        alignSelf:'center',
        color:'black',
        textAlign:'center'


    }

})