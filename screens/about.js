import React , {useEffect , useState} from 'react'
import {View , Text , StyleSheet , BackHandler , Alert , Image, TouchableOpacity , FlatList} from 'react-native'
import {  Feather } from '@expo/vector-icons';



const Home = ({navigation}) => {

    useEffect(() => {
        const backAction = () => {
          Alert.alert('Hold on!', 'Are you sure you want to exit app?', [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'YES', onPress: () => BackHandler.exitApp()},
          ]);
          return true;
        };

        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
        return () => backHandler.remove();
      }, []);
       const [isLoading, setLoading] = useState(true);
        const [data, setData] = useState([]);

        const getMenu = async () => {
        try {
        const response = await fetch(
        'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json'
        );
        const json = await response.json();
        setData(json.menu);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
        };

        useEffect(() => {
        getMenu();
        }, []);

        const Item = ({ name, price , description ,image}) => (
        <TouchableOpacity onPress={order}>
        <View style={styles.innerContainer}>
        <View>
        <Text style={styles.itemText}>{name}</Text>

        <Text style={styles.itemText2}>{'$' + price}</Text>
        </View>
          <Image
             source={{ uri: `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${image}?raw=true` }}
          style={styles.image3} />
        </View>
        </TouchableOpacity>
        );

        const renderItem = ({ item }) => (
        <Item name={item.name} price={item.price} description={item.description} image={item.image}/>
        );

       const handleButtonPress = () => {
           // Add your button press functionality here
           console.log('Icon button pressed!');
         };
         const order = () => {

           navigation.navigate( 'Search' )
         };
   return (

         <View style={styles.cont}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require('../assets/modo-logo.png')}/>
                <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
                      <Feather name="search" size={24} color="red" />
                    </TouchableOpacity>
            </View>
            <View style={styles.cont2}>

               <Text style={styles.name}>
                  Modo restaurant
               </Text>
               <Text style={styles.name2}>
               <Feather name="map-pin" size={20} color="white" />
                Chennai
               </Text>

               <View style={styles.view2}>
               <Text style={styles.para}>We are a family owned {'\n'}South Indian restaurant,{'\n'}focused on tradition {'\n'}recipes served with {'\n'}modern twist</Text>
               <Image style={styles.image2} source={require('../assets/im5.jpg')}/>
               </View>

            </View>
            <View style={styles.view3}>
               <Text style={styles.order}>Order for delivery !</Text>
               <View style={styles.view4}>
               <TouchableOpacity onPress={order} style={styles.button1}>
                  <Text>Starters</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={order} style={styles.button1}>
                  <Text>Mains</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={order} style={styles.button1}>
                  <Text>Desserts</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={order} style={styles.button1}>
                  <Text>Drinks</Text>
               </TouchableOpacity>
               </View>
            </View>
            <View style={styles.view5}>
               <FlatList
               ItemSeparatorComponent={() => (
                             <View style={{ backgroundColor: "#fdf5e6", height: 2 }} />
                           )}
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={renderItem}
                />
            </View>
         </View>



   )
}
styles= StyleSheet.create({
   cont : {
      flex : 1,
      backgroundColor : 'white'

   },
   headerImage : {
         resizeMode: 'cover',
        height: 51,
        width: 50,
        marginHorizontal : 2,

      },
      cont2 : {
         flex : 0.39,
         backgroundColor : "red",
      },
      view2 : {
         justifyContent: 'space-between',
         flexDirection: 'row',
      },
    header : {

         alignItems: 'center',
         justifyContent: 'space-between',
         backgroundColor : "white",
         flexDirection: 'row',
         padding : 11,


      },
      button: {
          padding: 10,
          borderRadius: 50,
          backgroundColor: '#f0f0f0',
        },
        name : {
           fontSize : 27,
           marginHorizontal : 35,
           marginTop : 15,
           fontWeight : 'bold',
           fontStyle : 'italic',
           marginLeft : 20
        },
        image2 : {
           height: 140,
           width: 120,
           marginRight : 10,
           marginTop : 1,
           borderRadius : 10,
           borderColor : 'white',
           borderWidth : 1
        },
        name2 : {
           fontSize : 22,
           marginLeft : 15,
           fontWeight : 'bold',
           fontStyle : 'italic',
           color : 'yellow',
           marginTop : 5,

        },
        para : {
           fontSize : 20,
           marginLeft : 15,
           marginTop : 19,
           fontStyle : 'italic'
        },
        view3 : {
           backgroundColor : 'white',
//           marginTop : 10
           flex : 0.15
        },
        order : {
          fontSize : 18,
          marginTop : 8,
          fontWeight : 'bold',
          marginLeft : 10
        },
        view4 : {
           flexDirection: 'row',
           justifyContent: 'space-between',
           marginLeft : 10,
           marginRight : 10,
           marginTop : 15
        },
        button1: {
            backgroundColor: '#f5f5f5',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 11,
          },
          view5 : {
             flex : 0.46
          },
         innerContainer: {
               paddingHorizontal: 20,
               paddingVertical: 10,
               backgroundColor: 'white',
               flexDirection: 'row',
               justifyContent: 'space-between',
           },
           itemText: {
               color: 'red',
               fontSize: 19,
               marginTop : 5,
               fontWeight : 'bold'
           },
           itemText2: {
               color: 'black',
               fontSize: 18,
               marginTop : 5,
           },
           image3 : {
              height: 70,
              height: 70,
              width: 90,
              marginRight : 1,
              borderRadius : 10,
              borderColor : 'red',
              borderWidth : 1
           },
           description : {
              fontSize : 10
           }

})
export default Home ;