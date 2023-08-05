import React , {useEffect} from 'react'
import {View , Text , StyleSheet } from 'react-native'

const Cart = () => {

   return (
      <View style={styles.cont}>
         <Text>
            Add to cart
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
export default Cart ;