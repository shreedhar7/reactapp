import React , {useEffect} from 'react'
import {View , Text , StyleSheet } from 'react-native'

const Order = () => {

   return (
      <View style={styles.cont}>
         <Text>
            Order here
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
export default Order ;