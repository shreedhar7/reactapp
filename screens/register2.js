import React from 'react'
import {View , Text , TextInput , StyleSheet , StatusBar , Image , ScrollView , Button , TouchableOpacity,TouchableWithoutFeedback,Keyboard} from 'react-native'


const App = () => {
const dismissKeyboard = () => {
        Keyboard.dismiss();
        }
   return (
//
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <ScrollView styles={{flex : 1}}>

      <View style={styles.container}>
         <StatusBar  backgroundColor = "#ff0000"  barStyle = "dark-content"   />
         <View style={styles.header}>
            <Image style={styles.headerImage} source={require('../assets/modo-logo.png')}/>
            <Text style={styles.headerText}>Modo Restaurant</Text>
         </View>
         <View style={styles.cont2}>
            <Text style={styles.text2}>
               Personal Information
            </Text>
         </View>
         <View style={styles.cont3}>
            <Text style={styles.text3}>Email address</Text>
            <TextInput
               style={styles.textInput}
               placeholder = "  Enter email"
            />
            <Text style={styles.text3}>Create Password</Text>
            <TextInput
               style={styles.textInput}
               placeholder = "  Enter password"
               secureTextEntry
            />

            <TouchableOpacity style={styles.touchable}>
               <Text style={styles.touch}>Create account</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.register}> Back to previous</Text>
           </TouchableOpacity>
            <View style={styles.footer}>
               <Text>
                  Already have an account ?
               </Text>
               <TouchableOpacity>
                  <Text style={styles.register}> Login</Text>
               </TouchableOpacity>
            </View>

         </View>
      </View>
      </ScrollView>
      </TouchableWithoutFeedback>
//
   )
}
const styles=StyleSheet.create({
   container : {
      flex : 1,
      backgroundColor : '#fff5ee',
   },
   header : {

      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor : "black",
      flexDirection: 'row',
      padding : 15

   },
   headerText : {
      fontSize : 29,
      justifyContent : 'center',
      fontWeight : 'bold',
      marginHorizontal : 20,
      color : '#ff0000'
   },
   headerImage : {
      resizeMode: 'cover',
     height: 50,
     width: 50,
     marginHorizontal : 20
   },
   cont2 : {
      flex : 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:100
   },
   text2 : {
      fontSize : 25
   },
   cont3 : {
      flex : 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:100
   },
   text3 : {
      fontSize : 20
   },
   textInput : {
      width: '80%',
      height: 40,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 8,
      marginBottom: 12,
      padding: 10,
      marginVertical: 10,

   },
   touchable : {
      borderWidth : 2,
      marginTop : 50,
      height : 35,
      width : 200,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor : '#ff0000',
      borderRadius : 7,


   },
   touch : {
     color : '#ffffff',
     fontWeight : 'bold',
     fontSize : 17
   },
   footer : {
      marginBottom : 280,
      marginTop : 30,
      flexDirection: 'row',
   },
   register : {
      color : '#ff0000',

   }

})
export default App;