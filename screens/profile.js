import React , {useEffect} from 'react'
import {View , Text , StyleSheet } from 'react-native'

const Profile = () => {

   return (
      <View style={styles.cont}>
         <Text>
            Profile Page
        </Text>
      </View>
   )
}
styles= StyleSheet.create({
   cont : {
      alignItems : 'center',
      justifyContent : 'center',
      flex : 1
   }
})
export default Profile ;