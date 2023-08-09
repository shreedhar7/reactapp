import React , { useState, useEffect} from 'react'
import {View , Text , StyleSheet , Button , Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
   const [image, setImage] = useState(null);

   const pickImage = async () => {
       // No permissions request is necessary for launching the image library
       let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
       });

       console.log(result);

       if (!result.canceled) {
         setImage(result.assets[0].uri);
       }
     };

   return (
      <View style={styles.cont}>
         <Text style={styles.headText}>
            Profile
        </Text>
        <View style={styles.cont2}>
           <Text style={styles.text1}>Personal Information</Text>
           <Button title="Pick an image from camera roll" onPress={pickImage} />
                 {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
      </View>
   )
}
styles= StyleSheet.create({
   cont : {
      flex : 1
   },
   headText : {
      fontSize : 21,
      fontWeight : 'bold',
      marginTop : 15,
      marginLeft : 150,
      color : 'red',
      fontStyle : 'italic'
   },
   cont2 : {
      flex : 1,
      borderWidth : 1,
      borderRadius : 8,
      borderColor : 'red',
      marginLeft : 9,
      marginRight : 9,
      marginTop : 5
   },
   text1 : {
      marginLeft : 10,
      marginTop : 5,
      fontWeight : 'bold'
   }
})
export default Profile ;