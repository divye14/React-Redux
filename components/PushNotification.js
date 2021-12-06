import React, {useEffect,useState } from "react";
import { StyleSheet,View,Text,Image } from "react-native";
import messaging from "@react-native-firebase/messaging";
const Push_Notification = ()=>{
    const [data, setdata] = useState({
        title:undefined,
        body:undefined,
        image:undefined,
    });
    //this is for device token
    const getToken = async ()=>{
        const token = await messaging().getToken();
        console.log('---------------------------------------------:',token);
    };

    useEffect(() => {
        getToken();
        messaging().onMessage(async remoteMessage => {
         console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));

         setdata({
             title:remoteMessage.notification.title,
             body:remoteMessage.notification.body,
             image:remoteMessage.notification.android.imageUrl,
         });

        });

        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log('onNotificationOpenedApp:', JSON.stringify(remoteMessage));

            setdata({
                title:remoteMessage.notification.title,
                body:remoteMessage.notification.body,
                image:remoteMessage.notification.android.imageUrl
            });

          });

          // Check whether an initial notification is available
    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log('Notification caused app to open from quit state:',JSON.stringify(remoteMessage),
        );

        setdata({
            title:remoteMessage.notification.title,
            body:remoteMessage.notification.body,
            image:remoteMessage.notification.android.imageUrl
        });


      }
    });

      }, []);
    return(
        <View style={styles.container}>
            <Text style={styles.textpush}>PUSH NOTIFICATION</Text>

           <View>
           <Text style={styles.text}>{data.title} {"\n"} {data.body}</Text>
           </View>

            <View style = {styles.imageview}>
            <Image resizeMode={"cover"}  source={{uri:data.image}} width={350} height={500} ></Image>
            </View>
           
        </View>
    );
}

export default Push_Notification;

const styles=StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        margin:10,
        backgroundColor:'#708090'
        
    },
    textpush:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        margin:10
    },
    imageview:{
        marginTop:20,
        borderRadius:10,
        borderColor:'balck',
        borderWidth:2,
        elevation:50,
        shadowColor:'red',
    },
    text:{
        color:'black',
        fontSize:15,
        textAlign:'center',
        fontWeight:'bold',
        borderRadius:10,
        borderWidth:2,
        padding:10,
        margin:10,
        elevation:5
    }
})
