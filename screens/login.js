import React , {useState} from 'react'
import {View , Text , TextInput , StyleSheet ,ImageBackground, StatusBar , Image , ScrollView , Button , TouchableOpacity,TouchableWithoutFeedback,Keyboard ,Alert} from 'react-native'


const App = ({navigation}) => {
   const [inputValue, setInputValue] = useState('');
   const [inputValue2, setInputValue2] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   const [errorMessage2, setErrorMessage2] = useState('');
   const dismissKeyboard = () => {
        Keyboard.dismiss();
        }

        const handleLogin = () => {
              if (inputValue.trim() === '' ) {
                setErrorMessage('* First name field should not be empty');
              }
              else if (  inputValue2.trim() === '' ) {
                setErrorMessage2('* Last name field should not be empty');
              }
             else if (inputValue === 'admin' || inputValue === 'Admin' && inputValue2 === '12345') {
                 navigation.navigate('Home' ,{value: (inputValue)});
               }
               else if(inputValue === 'shreedhar' || inputValue === 'Admin' && inputValue2 === 'dev1'){
                  navigation.navigate('Home' );
               }
               else if(inputValue === 'rajaganapathi' || inputValue === 'Admin' && inputValue2 === 'rg'){
                  navigation.navigate('Home' );
               }
               else if(inputValue === 'Sarath' || inputValue === 'sarath' && inputValue2 === 'dev2'){
                   navigation.navigate('Home' );
               }
               else if(inputValue === 'karthi' || inputValue === 'Karthi' && inputValue2 === 'dev3'){
                   navigation.navigate('Home' );
               }

               else {
                 Alert.alert('OOPS' , 'Invalid username and password. Please try again.');
               }

        }
        const handleRegister1 = () => {
           navigation.navigate( 'Register1' )
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

      <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <ScrollView styles={{flex : 1}}>

      <View style={styles.container}>
      <ImageBackground source={require('../assets/wall2.jpg')}  >
         <StatusBar  backgroundColor = "#ff0000"  barStyle = "dark-content"   />
         <View style={styles.header}>
            <Image style={styles.headerImage} source={require('../assets/modo-logo.png')}/>
            <Text style={styles.headerText}>Lemon Restaurant</Text>
         </View>
         <View style={styles.cont2}>
            <Text style={styles.text2}>
               Happiness in every bite
            </Text>
         </View>
         <View style={styles.cont3}>
            <Text style={styles.text3}>User name</Text>
            <TextInput
               style={styles.textInput}
               placeholder = "  Enter User name"
               value={inputValue}
               onChangeText={handleInputChange}
            />
            {errorMessage !== '' && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
            <Text style={styles.text3}>Password</Text>
            <TextInput
               style={styles.textInput}
               placeholder = " Enter password"
               value={inputValue2}
               onChangeText={handleInputChange2}
               secureTextEntry
            />
            {errorMessage2 !== '' && <Text style={{ color: 'red' }}>{errorMessage2}</Text>}
            <TouchableOpacity style={styles.touchable} onPress={handleLogin}>
               <Text style={styles.touch}>Login</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
               <Text style={{color : 'white' , fontSize:15}}>
                  Don`t have an account ?
               </Text>
               <TouchableOpacity onPress={handleRegister1}>
                  <Text style={styles.register}> Register</Text>
               </TouchableOpacity>
            </View>

         </View>
         </ImageBackground>
      </View>
      </ScrollView>
      </TouchableWithoutFeedback>

   )
}
export default App;
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
      fontSize : 28,
      color : 'white',
      fontStyle : 'italic'
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
      width: '70%',
      height: 40,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 8,
      marginBottom: 10,
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
      marginBottom : 210,
      marginTop : 30,
      flexDirection: 'row',
   },
   register : {
      color : 'yellow',
      fontWeight : 'bold',
      fontSize : 15
   }

})
