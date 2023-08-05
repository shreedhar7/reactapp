import React , {useEffect} from 'react'
import {View , Text , StyleSheet , BackHandler , Alert , Image} from 'react-native'




const Home = () => {

//    useEffect(() => {
//        const backAction = () => {
//          Alert.alert('Hold on!', 'Are you sure you want to exit app?', [
//            {
//              text: 'Cancel',
//              onPress: () => null,
//              style: 'cancel',
//            },
//            {text: 'YES', onPress: () => BackHandler.exitApp()},
//          ]);
//          return true;
//        };
//
//        const backHandler = BackHandler.addEventListener(
//          'hardwareBackPress',
//          backAction,
//        );
//        return () => backHandler.remove();
//      }, []);
   return (

         <View style={styles.cont}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require('../assets/modo-logo.png')}/>
            </View>
            <View style={styles.cont2}>
               <Image style={styles.headerImage} source={require('../assets/im5.jpg')}/>
               <Text >
                  About restaurant
               </Text>
            </View>
         </View>



   )
}
styles= StyleSheet.create({
   cont : {
      flex : 1,
   },
   headerImage : {
         resizeMode: 'cover',
        height: 50,
        width: 50,
        marginHorizontal : 2,

      },
      cont2 : {
         flex : 0.3,
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor : "#fa8072",
      },
    header : {

         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor : "white",
         flexDirection: 'row',
         padding : 10

      },
})
export default Home ;