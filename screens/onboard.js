import React from 'react'
import {View , Text , TextInput , StyleSheet , StatusBar , Image , ScrollView , Button , TouchableOpacity} from 'react-native'


const App = () => {
   return (
//     <ScrollView>
      <View style={styles.container}>
         <StatusBar  backgroundColor = "#ff0000"  barStyle = "dark-content"   />
         <View style={styles.header}>
            <Image style={styles.headerImage} source={require('../assets/modo-logo.png')}/>
            <Text style={styles.headerText}>Modo Restaurant</Text>
         </View>
         <View style={styles.cont2}>
            <Text style={styles.text2}>
               Let us get to know you
            </Text>
         </View>
         <View style={styles.cont3}>
            <Text style={styles.text3}>User Name</Text>
            <TextInput
               style={styles.textInput}
               placeholder = "  Enter username"
            />
            <Text style={styles.text3}>Email</Text>
            <TextInput
               style={styles.textInput}
               placeholder = " Enter your email"
            />
            <TouchableOpacity style={styles.touchable}>
               <Text style={styles.touch}>Next</Text>
            </TouchableOpacity>
         </View>
      </View>
//    </ScrollView>
   )
}
const styles=StyleSheet.create({
   container : {
      flex : 1,
      backgroundColor : '#fff5ee',
   },
   header : {
      flex : 0.1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor : "black",
      flexDirection: 'row',
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
      flex : 0.2,
      alignItems: 'center',
      justifyContent: 'center',
   },
   text2 : {
      fontSize : 25
   },
   cont3 : {
      flex : 0.3,
      alignItems: 'center',
      justifyContent: 'center',
   },
   text3 : {
      fontSize : 20
   },
   textInput : {
      borderWidth: 1,
      height: 40,
      margin: 12,
      width : 300,
      borderRadius : 5,
      alignItems: 'center',
            justifyContent: 'center',
   },
   touchable : {
      borderWidth : 2,
      marginTop : 20,
      height : 25,
      width : 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor : '#ff0000',
      borderRadius : 7
   },
   touch : {
     color : '#ffffff',
     fontWeight : 'bold'
   }

})
export default App;