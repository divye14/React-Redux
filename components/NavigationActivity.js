import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";

const NavigationActivity = ({navigation})=>{
    return(
        <View  >

            <ScrollView>
                <View style={styles.container}>

                <TouchableOpacity onPress={()=>navigation.navigate("HEADER")}
            style={styles.appbutton}>
                <Text style={styles.text}>Go To Header Page</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("LISTVIEW")}
            style={styles.appbutton}>
                <Text style={styles.text}>Go To ListView Page</Text>
            </TouchableOpacity>


                <TouchableOpacity onPress={()=>navigation.navigate("HOME")}
            style={styles.appbutton}>
                <Text style={styles.text}>Go To Login Page</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("EMPLOYEE")}
            style={styles.appbutton}>
                <Text style={styles.text}>Go To Employee Page</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>navigation.navigate("CALENDAR")}
            style={styles.appbutton}>
                <Text style={styles.text}>Go To Calendar Page</Text>
            </TouchableOpacity>

          
            <TouchableOpacity onPress={()=>navigation.navigate("GEOLOCATION")}
            style={styles.appbutton}>
                <Text style={styles.text}>Go To GeoLocation Page</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("API")}
            style={styles.appbutton}>
                <Text style={styles.text}>Go To ApiScreen Page</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("CALCULATOR")}
            style={styles.appbutton}>
                <Text style={styles.text}>Go To Calculator Page</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("ALERT")}
            style={styles.appbutton}>
                <Text style={styles.text}>Go To Alert Page</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("ITEM")}
            style={styles.appbutton}>
                <Text style={styles.text}>Go To AddItem Page</Text>
            </TouchableOpacity>

            
            <TouchableOpacity onPress={()=>navigation.navigate("NOTIFICATION")}
            style={styles.appbutton}>
                <Text style={styles.text}>Go To Notification Page</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>navigation.navigate("CAMERA")}
            style={styles.appbutton}>
                <Text style={styles.text}>Go To Camera Page</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>navigation.navigate("GALLERY")}
            style={styles.appbutton}>
                <Text style={styles.text}>Go To Multi Images Page</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>navigation.navigate("REDUXAPP")}
            style={styles.appbutton}>
                <Text style={styles.text}>Go To REDUX PAGE</Text>
            </TouchableOpacity>

                </View>
            </ScrollView>
           
        </View>
    );
}
const styles=StyleSheet.create({
    appbutton:{
        backgroundColor: "#009688", 
        borderRadius: 10,
        paddingVertical: 10,
        elevation: 10,
        width:'70%',
        height:60,
        margin:12.5,
    },
    text:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    container:{
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
    },
})

export default NavigationActivity;