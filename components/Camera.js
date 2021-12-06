import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SafeAreaView, StyleSheet,Text, Image, View, Button, TouchableOpacity} from 'react-native';

const Camera = () => {
  const [imageUri, setimageUri] = useState(null);
  const [imageUriGallary, setimageUriGallary] = useState(null);
  const openCamera = () => {
    launchCamera({}, response => {
      console.log(response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setimageUri(response.assets[0]?.uri);
      }
    });
  };
  const openGallery = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        const source = {uri: 'data:image/jpeg;base64,' + response.base64};
        setimageUriGallary(response.assets[0]?.uri);
      }
    });
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'grey'}}>
     <View style={styles.container}>
     <View style={styles.opencamerabutton}>

        <TouchableOpacity
         style={styles.appbutton}
          onPress={() => {
            openCamera();
          }}
          >
            <Text style={styles.text}>OPEN CAMERA</Text>
          </TouchableOpacity>       
        </View>

          <View style={styles.opencam1}>
          {imageUri && (
          <Image
            source={{uri: imageUri}}
            style={{
              borderRadius:10,
              borderColor:'black',
              borderWidth:2,
              width:200,
              height:200
            }}></Image>
        )}
          </View>
     </View>

     <View style={styles.container2}>

     <View style={styles.opencamerabutton}>
        <TouchableOpacity
         style={styles.appbutton}
          onPress={() => {
            openGallery();
          }}
        ><Text style={styles.text}>OPEN GALLERY</Text></TouchableOpacity>
        </View>

       <View style={styles.opencam1}>
       {imageUriGallary && (
          <Image
            source={{uri: imageUriGallary}}
            style={{
              borderRadius:10,
              borderColor:'black',
              borderWidth:2,
              width:200,
              height:200
            }}></Image>
        )}
      </View>

     </View>
    </SafeAreaView>
  );
};

export default Camera;

const styles = StyleSheet.create({
  appbutton:{
    backgroundColor: "#009688", 
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 10,
    width:'80%',
    height:'20%',
    margin:12.5,
    justifyContent:'center'
},
text:{
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    padding:5,
},
opencam1:{
  borderRadius:10,
  borderColor:'black',
  borderWidth:2,
  width:200,
  height:200,
  justifyContent:'center',
  alignSelf:'center',
  margin:15
},
container:{
    flex: 1,
    backgroundColor:'#526482',
    flexDirection:'row-reverse'
},
container2:{
  flex: 1,
  backgroundColor:'#778499',
  flexDirection:'row-reverse'
},
opencamerabutton:{
  flex:1,
  justifyContent:'center',
  alignItems:'flex-end'
},

})
