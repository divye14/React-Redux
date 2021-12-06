import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import CalendarPicker from "react-native-calendar-picker";

class Calendar extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedStartDate:null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }
    onDateChange(date){
        this.setState({
            selectedStartDate:date
        });
    }
    render(){
        const {selectedStartDate} = this.state;

        //ternary operator
        const startDate = selectedStartDate ? selectedStartDate.toString():'';  
        return(
          <View>
               <View style={styles.cont}>
                <CalendarPicker onDateChange={this.onDateChange}/>
           </View>
           <View style={styles.center}>
                <Text style={styles.text1}>{"\n"}{startDate}</Text>
            </View>
          </View>
           
        );
    }
}

const styles = StyleSheet.create({
    cont:{
        backgroundColor:'grey',
        borderRadius:10,
        margin:10,
        padding:10,
    },
    container:{
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
    },
    text1:{
        color:'green',
        fontWeight:'bold',
        fontSize:20,
        margin:50
    },
    appbutton:{
        backgroundColor: "#009688", 
        borderRadius: 10,
        paddingVertical: 10,
        elevation: 10,
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
})

export default Calendar;