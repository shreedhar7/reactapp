import React , { useState, useEffect} from 'react'
import {View , Text , StyleSheet , Button  ,TextInput,Image ,TouchableOpacity,Keyboard,TouchableWithoutFeedback} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Profile = ({route}) => {
   const [image, setImage] = useState(null);
     const dismissKeyboard = () => {
        Keyboard.dismiss();
     }
   const pickImage = async () => {
       // No permissions request is necessary for launching the image library
       let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
       });

       console.log(result);

       if (!result.canceled) {
         setImage(result.assets[0].uri);
       }
     };
     const deleteImage = () => {

     }
     const logout = () => {
        console.log("logout button pressed");
     }
     const save = () => {
        console.log("save button pressed");
     }
     const discard = () => {
        console.log("discard button pressed");
     }
   return (
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.cont}>
         <Text style={styles.headText}>
            Profile
        </Text>
        <View style={styles.cont2}>
           <Text style={styles.text1}>Personal Information :-</Text>
           <Text style={styles.text}>Profile Photo</Text>
           <View style={styles.view2}>
           {image && <Image source={{ uri: image }} style={styles.avatar } />}
           <TouchableOpacity  onPress={pickImage} style={styles.button1}>
               <Text style={{color : 'white'}}>Edit photo</Text>
           </TouchableOpacity>
           <TouchableOpacity  onPress={deleteImage} style={styles.button2}>
               <Text>Remove</Text>
           </TouchableOpacity>
           </View>
           <Text style={styles.text2}>First Name</Text>
           <TextInput
              style={styles.textInput1}
              placeholder = "First Name"
           />
           <Text style={styles.text2}>Last Name</Text>
           <TextInput
              style={styles.textInput1}
              placeholder = "Last Name"
           />
           <Text style={styles.text2}>User Name</Text>
           <TextInput
              style={styles.textInput1}
              placeholder = "User Name"
           />
           <Text style={styles.text2}>Phone Number</Text>
           <TextInput
              style={styles.textInput1}
              placeholder = "Phone Number"
           />
           <Text style={{marginLeft:20,fontWeight:'bold',fontSize:15}}>Email notifications</Text>
           <View style={{marginTop: 8 , marginLeft : 20}}>
             <BouncyCheckbox
               isChecked
               fillColor ="red"
               text="Order Status"
               textStyle={{
                 textDecorationLine: 'none',
               }}
               iconImageStyle={{width: 15, height: 15}}
               onPress={(isChecked: boolean) => {}}
             />
           </View>
           <View style={{marginTop: 7 , marginLeft : 20}}>
             <BouncyCheckbox
               isChecked
               fillColor ="red"
               text="Special Offers"
               textStyle={{
                 textDecorationLine: 'none',
               }}
               iconImageStyle={{width: 15, height: 15}}
               onPress={(isChecked: boolean) => {}}
             />
           </View>
           <View style={{marginTop: 7 , marginLeft : 20}}>
             <BouncyCheckbox
               isChecked
               fillColor ="red"
               text="Password Changes"
               textStyle={{
                 textDecorationLine: 'none',
               }}
               iconImageStyle={{width: 15, height: 15}}
               onPress={(isChecked: boolean) => {}}
             />
           </View>
           <TouchableOpacity  onPress={logout} style={styles.logout}>
              <Text style={{color : 'white' , fontWeight: 'bold'}}>Logout</Text>
          </TouchableOpacity>
          <View style={styles.final}>
             <TouchableOpacity  onPress={save} style={styles.changes}>
               <Text style={{color : 'black' , fontWeight: 'bold'}}>   Save changes</Text>
           </TouchableOpacity>
           <TouchableOpacity  onPress={discard} style={styles.changes}>
               <Text style={{color : 'black' , fontWeight: 'bold'}}>Discard changes</Text>
           </TouchableOpacity>
          </View>
        </View>

      </View>
      </TouchableWithoutFeedback>
   )
}
styles= StyleSheet.create({
   cont : {
      flex : 1,
      backgroundColor : 'white'
   },
   headText : {
      fontSize : 20,
      fontWeight : 'bold',
      marginTop : 5,
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
      marginTop : 5,
      justifyContent : 'row',

   },
   text : {
      marginLeft : 20,
      marginTop : 15,
      fontSize : 15
   },
   text1 : {
      marginLeft : 20,
      marginTop : 10,
      fontWeight : 'bold',
      fontSize : 15
   },
   button1 : {
        borderWidth : 2,
        marginLeft : 40,
        height : 30,
        width : 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : 'red',
        borderRadius : 7,
        marginTop : 15
   },
   button2 : {
        borderWidth : 2,
        marginLeft : 20,
        height : 30,
        width : 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : 'white',
        marginTop : 15
   },
   view2 : {
      flexDirection: 'row',
      marginTop : 5
//      justifyContent : 'space-between',
   },
   avatar : {
      width: 60,
      height: 60,
      borderRadius:29 ,
      marginLeft : 20,
      borderColor : 'black',
      borderWidth : 1
   },
   text2 : {
      marginTop : 7,
      marginLeft: 20
   },
   textInput1 : {
      width: '90%',
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 8,
        marginBottom: 10,
        padding: 10,
        marginLeft : 20,
        marginTop : 5
   },
   logout : {
      borderWidth : 2,
      marginLeft : 124,
      height : 34,
      width : 80,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor : 'red',
      borderRadius : 7,
      marginTop : 12
   },
   final : {
      flexDirection: 'row',
   },
   changes : {
        borderWidth : 2,
        marginLeft : 50,
        height : 41,
        width : 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : 'white',
        borderRadius : 7,
        marginTop : 20
   }
})
export default Profile ;