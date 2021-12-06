import { isEmptyStatement } from "@babel/types";
import React, { Component } from "react";
import { StyleSheet, View, Text, Alert, TextInput,ToastAndroid, TouchableOpacity} from "react-native";
export default class Login extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            errMsg:'',
            namevalidate:true,
            passvalidate:true,
        }
    }
    submit(){
        var demail ="divyang@gmail.com";
        var dpassword ="123456789";
        if(this.state.email == demail && this.state.password == dpassword){
            this.props.navigation.navigate('FRUITS')
        }
        else{
            ToastAndroid.show("ENTER VALID CREDENTIALS",ToastAndroid.SHORT)
        }
    }
    clear(){
        const getuser = cb=>{
            setTimeout(() => {
                cb({
                    name:'DIVYANG'
                })
                
            },2000);
        }
        getuser(user=>{
            console.log(user)
        })

        console.log("NOT WAITING...")
    }
    validate(text,type){
        let demail ="divyang@gmail.com";
        let dpassword ="123456789";
        if(type == "EMAIL")
        {
            if(demail == text)
            {
                this.setState({
                    namevalidate:true,
                    email:text,
                    clear:text
                })
            }
            else{
                this.setState({
                    namevalidate:false
                })
            }   
        } 
        else if(type =="PASSWORD")
        {
            if(dpassword == text)
            {
                this.setState({
                    passvalidate:true,
                    password:text

                })
            }
            else{
                this.setState({
                    passvalidate:false,
                   
                })
            }
        }
    }
    render(){
        return(
           <View style={styles.header}>
               <Text style={styles.loginpage}>LOGIN PAGE</Text>
                <View style={styles.container}>
                <TextInput
                style={[styles.email,!this.state.namevalidate ? styles.erroremail: null]}
                placeholder='Enter your Email'
                placeholderTextColor="black"
                onChangeText={(text)=>this.validate(text,"EMAIL")}/>

                <TextInput
                style={[styles.password,this.state.passvalidate ? null : styles.erroremail]}
                placeholder='Enter your Password'
                placeholderTextColor="black"
                secureTextEntry={true}
                // keyboardType="numeric"
                onChangeText={(text)=>this.validate(text,"PASSWORD")}/>


                <Text style={styles.error}>{this.state.passworderror}</Text>
                <View style={styles.button}>
                <TouchableOpacity 
                onPress={()=>{this.submit()}}
                style={styles.appbutton}>
                <Text  style={styles.text}>SUBMIT</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>{this.clear()}}
                style={styles.appbutton}>
                <Text  style={styles.text}>CLEAR</Text>
                </TouchableOpacity>
                </View>
            </View>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    error:{
        color:'red',
        marginLeft:8
    },
    header:{
        flex:1,
        backgroundColor:'skyblue',
        justifyContent:'center'
    },
    loginpage:{
        fontSize:40,
        textAlign:'center',
        fontWeight:'bold',
    },
    appbutton:{
        backgroundColor: "#009688", 
        borderRadius: 10,
        justifyContent:'center',
        elevation: 20,
        width:'70%',
        height:50,
    },
    text:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    button:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
    },
    container:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'grey',
        borderRadius:10,
        borderWidth:2,
        borderColor:'black',
        elevation:50,
        margin:10
    },
    email:{
        borderColor:'skyblue',
        margin:10, 
        backgroundColor:'white', 
        color:'black', 
        fontSize:22,
        borderRadius:10,
        borderWidth:3,
        elevation:20,
    },
    erroremail:{
        borderColor:'red',
        borderWidth:3
    },
    password:{
        borderWidth:1, 
        borderColor:'skyblue', 
        margin:10, 
        backgroundColor:'white', 
        color:'black', 
        fontSize:22,
        borderRadius:10,
        borderWidth:3,
        elevation:20
    }
})