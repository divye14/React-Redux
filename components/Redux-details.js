import React from "react";
import { StyleSheet,View,Text, Image, TouchableOpacity } from "react-native";
const ReduxDetails = ()=>{
    return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'blue',fontWeight:'bold', fontSize:20}}>THIS IS REDUX DETAILS COMPONENT</Text>
            <Text style={{textAlign:'center', color:'black', fontWeight:'bold', fontSize:20}}>Reducer Container Connected</Text>
            <View style={styles.container}>
                
            <View style={styles.fruitimage}>
                <Image
                style={styles.fruit}
                 source={require('../assets/images/watermelon.jpg')}/>
            </View>
            <View style={{flex:1, margin:10}}>
                <Text style={{
                    fontSize:16,
                    color:'black', 
                    fontWeight:'bold',
                    alignSelf:'center'
                   }}>WaterMelon</Text>
            </View>
            <View style={{ margin:10,flx:1, margin:10,alignItems:'center',}}>
                <TouchableOpacity style={{backgroundColor:'green',padding:10, borderRadius:10,alignItems:'center'}}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:17,alignSelf:'center'}}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
            </View>


            <View style={styles.container}>
                
                <View style={styles.fruitimage}>
                    <Image
                    style={styles.fruit}
                     source={require('../assets/images/apple.jpg')}/>
                </View>
                <View style={{flex:1, margin:10}}>
                    <Text style={{
                        fontSize:16,
                        color:'black', 
                        fontWeight:'bold',
                        alignSelf:'center'
                       }}>Apple</Text>
                </View>
                <View style={{ margin:10,flx:1, margin:10,alignItems:'center',}}>
                    <TouchableOpacity style={{backgroundColor:'green',padding:10, borderRadius:10,alignItems:'center'}}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:17,alignSelf:'center'}}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
                </View>

                <View style={styles.container}>
                
                <View style={styles.fruitimage}>
                    <Image
                    style={styles.fruit}
                     source={require('../assets/images/orange.jpg')}/>
                </View>
                <View style={{flex:1, margin:10}}>
                    <Text style={{
                        fontSize:16,
                        color:'black', 
                        fontWeight:'bold',
                        alignSelf:'center'
                       }}>Orange</Text>
                </View>
                <View style={{ margin:10,flx:1, margin:10,alignItems:'center',}}>
                    <TouchableOpacity style={{backgroundColor:'green',padding:10, borderRadius:10,alignItems:'center'}}>
                        <Text style={{color:'white',fontWeight:'bold',fontSize:17,alignSelf:'center'}}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
                </View>
        </View>
    );
}
export default ReduxDetails;

const styles=StyleSheet.create({
    container:{
        backgroundColor:'red',
        flexDirection:'row',
        width:'100%',
        height:'20%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        margin:10
    },
    fruitimage:{
        flex:1,
        alignItems:'center',
        margin:10
    },
    fruit:{
        width:'80%',
        height:'100%',
        borderWidth:2,
        borderRadius:40,
        borderColor:'blue',
    }
})