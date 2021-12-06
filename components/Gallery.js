
import React,{ useState,useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View,Button } from "react-native";

//   /storage/emulated/0/Android/data/com.novasign/files/MyTest.jpg
//const image = { uri:'https://picsum.photos/200' };
let uid = Math.floor(Math.random() * 1000);

const images=[uid]

function Gallery({route,navigation}) {

    const [imagesrc,setImagesrc]= useState({uri: `https://picsum.photos/${uid}`})
    const [index,changeindex]=useState(0)
    useEffect(() => {
        console.log(index);
        console.log(images)
        setImagesrc({uri: `https://picsum.photos/${images[index]}`})
      }, [index])

    const nextImage=()=>{

        if(index===images.length-1)
        {
            images.push(Math.floor(Math.random() * 1000))
        }
       
        changeindex(index=>index+1)
       

    }

    const prevImage=()=>{
        if(index>0)
        {  
            changeindex(index=>index-1)
          
        }
     }
    return (
<View style={styles.container}>

<ImageBackground source={imagesrc} resizeMode="cover" style={styles.image}></ImageBackground>
<View style={styles.buttons}>
<Button  title='Previous'  onPress={prevImage}  ></Button> 
<Button  title='Next'  onPress={nextImage}  ></Button> 

</View>

</View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    buttons:{
        flexDirection: "row",
        justifyContent:"space-between"
    }
   
  });
  

export default Gallery;

