import React , {useState} from 'react'
import {View , Text , TextInput , StyleSheet,ImageBackground , StatusBar , Image , ScrollView , Button , TouchableOpacity,TouchableWithoutFeedback,Keyboard} from 'react-native'


const App = ({navigation}) => {
        const [inputValue, setInputValue] = useState('');
        const [inputValue2, setInputValue2] = useState('');
        const [errorMessage, setErrorMessage] = useState('');
        const [errorMessage2, setErrorMessage2] = useState('');
        const dismissKeyboard = () => {
           Keyboard.dismiss();
        }
        const home = () => {
           if (inputValue.trim() === '' ) {
                setErrorMessage('* User name field should not be empty');
              }
          else if (  inputValue2.trim() === '' ) {
            setErrorMessage2('* Please enter the password');
          }
           else {navigation.navigate( 'Home' )}
        }
        const handleRegister1 = () => {
           navigation.navigate( 'Register1' )
        }
        const login = () => {
           navigation.navigate( 'login' )
        }
        const handleInputChange = (text) => {
            setInputValue(text);
            setErrorMessage('');
         };
         const handleInputChange2 = (text2) => {
            setInputValue2(text2);
            setErrorMessage2('');
         };
   return (
//
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <ScrollView styles={{flex : 1}}>

      <View style={styles.container}>
      <ImageBackground source={require('../assets/wall2.jpg')} >
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
            <Text style={styles.text3}>User name</Text>
            <TextInput
               style={styles.textInput}
               placeholder = "  Enter user name"
               value={inputValue}
               onChangeText={handleInputChange}
            />
            {errorMessage !== '' && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
            <Text style={styles.text3}>Create Password</Text>
            <TextInput
               style={styles.textInput}
               placeholder = "  Enter password"
               value={inputValue2}
               onChangeText={handleInputChange2}
               secureTextEntry
            />
            {errorMessage2 !== '' && <Text style={{ color: 'red' }}>{errorMessage2}</Text>}
            <TouchableOpacity style={styles.touchable} onPress={home}>
               <Text style={styles.touch}>Create account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegister1}>
              <Text style={styles.register}> Back to previous</Text>
           </TouchableOpacity>
            <View style={styles.footer}>
               <Text style={{color : 'white' , fontSize : 17}}>
                  Already have an account ?
               </Text>
               <TouchableOpacity onPress={login}>
                  <Text style={styles.register}> Login</Text>
               </TouchableOpacity>
            </View>

         </View>
         </ImageBackground>
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
      fontSize : 25,
      color : 'white'
   },
   cont3 : {
      flex : 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:100
   },
   text3 : {
      fontSize : 20,
      color : 'white'
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
      color : 'yellow',
       fontSize : 17
   }

})
export default App;