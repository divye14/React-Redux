import React, { useState } from "react";
import { StyleSheet, View, Text,Image, FlatList, TouchableHighlight } from "react-native";

const Fruits =({navigation})=>{
    const [fruits, setfruits] = useState([
        {
            key:'1',
            image:require('../assets/images/apple.jpg'),
            name:'Apple',
            description:'Well shaped, smooth skinned fruit that is free of bruises. Brownish freckled areas do not affect flavour.'
        },
        {
            key:'2',
            image:require('../assets/images/mango.jpg'),
            name:'Mango',
            description:'Plump fruit without green background colour that yields to gentle pressure. Avoid soft, brusied or shrivelled fruit.'
        },
        {
            key:'3',
            image:require('../assets/images/banana.jpg'),
            name:'Banana',
            description:'Firm, unblemished bananas. Yellow with brown speckles indicates a sweet tender fruit.'
        },
        {
            key:'4',
            image:require('../assets/images/blackberries.jpg'),
            name:'BlackBerries',
            description:'Firm, firm, plump, blackberries'
        },
        {
            key:'5',
            image:require('../assets/images/grapes.jpg'),
            name:'Grapes',
            description:'Plump grapes that are firmly attached to green stems. Avoid wrinkled or sticky fruit.'
        },
        {
            key:'6',
            image:require('../assets/images/kiwi.jpg'),
            name:'Kiwi',
            description:'Evenly ripe fruit, free of mold or soft spots that yield to gentle pressure.'
        },
        {
            key:'7',
            image:require('../assets/images/watermelon.jpg'),
            name:'WaterMelon',
            description:'A firm symmetrical melon with fully rounded sides and a yellowish underside. If cut, select a melon with bright red flesh.'
        },
        {
            key:'8',
            image:require('../assets/images/litchi.jpg'),
            name:'Litchi',
            description:'A rosy looking skin. Lychees will not ripen further after being harvested.'
        },
        {
            key:'9',
            image:require('../assets/images/orange.jpg'),
            name:'Orange',
            description:'Firm fruit, heavy for size with smooth skin, free of soft spots.'
        },
        {
            key:'10',
            image:require('../assets/images/papaya.jpg'),
            name:'Papaya',
            description:'Fruit with smooth unblemished skin. Ripe fruit has more yellow than green colouring and yields to gentle pressure.'
        },
        {
            key:'11',
            image:require('../assets/images/pineapple.jpg'),
            name:'PineApple',
            description:'Large plump, fruit with sweet fragrance and crown of deep green (not brown) leaves. Colour is not an indication of ripeness.'
        },
        {
            key:'12',
            image:require('../assets/images/strawberry.jpg'),
            name:'StrawBerry',
            description:'Firm, plump berries that are fully red with bright green caps. Strawberries do not ripen once picked.'
        },

    ])
    return(
        <View style={styles.container}>
            <FlatList
            data={fruits}
            renderItem={({item})=>(
                <TouchableHighlight
                key={item.key}
                onPress={()=>
                    {
                    navigation.navigate('DETAILS',{
                        image:item.image,
                        name:item.name,
                        description:item.description
                    });
                }}>

                    <View style={styles.card}>
                        <Text style={styles.fruitname}>{item.name}</Text>
                        <Image style={styles.images} source={item.image}></Image>
                        
                    </View>

                </TouchableHighlight>
            )}/>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        marginTop:10,
        marginBottom:10,
        backgroundColor:'skyblue'
    },
    images:{
        width:'100%',
        height:200,
        alignSelf:'center'
    },
    card:{
        borderWidth:4,
        borderColor:'black',
        margin:10,
        width:'60%',
        alignSelf:'center'
    },
    fruitname:{
        textAlign:'center',
        margin:5,
        fontWeight:'bold',
        fontSize:25,
        borderColor:'black',
        borderWidth:2,
        backgroundColor:'grey',
        color:'white'
    }
})

export default Fruits;