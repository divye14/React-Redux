import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList,Image, ImageBackground } from "react-native";

class ApiScreen extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        this.callApi();
    }
    async callApi(){
        let response =await fetch('https://api.napster.com/v2.0/playlists?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm')
        let respJson = await response.json();
        this.setState({data:respJson.playlists})
    }
    render(){
        return(
            <View>
                 <Text style={styles.api}>API DATA</Text>
                 <View style={styles.container}>
                <FlatList
                data={this.state.data}
                renderItem={({item})=>
                <Text style={styles.list}>
                    Id: {item.id} {"\n"}
                    name: {item.name} {"\n"}
                    modified: {item.modified}
                    </Text>}/>
            </View>
            </View>
           
        );
    }
  
}

const styles=StyleSheet.create({
    list:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        margin:10,
        padding:10,
        backgroundColor:'skyblue',
        borderRadius:10,
        borderWidth:2,
        borderColor:'blue',
        elevation:7,
        shadowOpacity:1
    },
    api:{
        alignSelf:'center',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:25,
        color:'blue',
        borderColor:'blue',
        borderRadius:10,
        borderWidth:2,
        width:200,
        marginTop:10,
        backgroundColor:'skyblue'
    },
    container:{
        backgroundColor:'grey',
        padding:10,
        margin:10,
        borderRadius:10,
        borderWidth:5,
        borderColor:'black'
    }
})

export default ApiScreen;