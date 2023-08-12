import React , {useEffect , useState , useMemo, useReducer, useCallback } from 'react'
import {View , Text , StyleSheet, TextInput , ScrollView ,
TouchableWithoutFeedback , Keyboard ,Alert, Image  ,ActivityIndicator, FlatList , TouchableOpacity} from 'react-native'
import filter from "lodash.filter"

const API_ENDPOINT = `https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json`;

const Order = ({navigation}) => {
   const [isLoading , setIsLoading] = useState(false);
   const [data , setData] = useState([]);
   const [error , setError] = useState(null);
   const [fullData , setFullData] = useState([]);
   const [userInput , setUserInput] = useState("")


   const dismissKeyboard = () => {
          Keyboard.dismiss();
       }

     const fetchData = async () => {
           try {
               const response = await fetch(
               'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json'
               );
               const json = await response.json();
               setData(json.menu);
               setFullData(json.menu);
           }
           catch (error) {
              console.error(error);
           }
           finally {
              setIsLoading(false);
           }
           };

           useEffect(() => {
           setIsLoading(true);

           fetchData();
           }, []);


           const goTo = () => {
              Alert.alert('Item added to the cart');
           }


   const filterData = (item) => {
         if(userInput === ""){
         return (
//            <TouchableOpacity >
                <View style={styles.innerContainer}>
                <View>
                <Text style={styles.itemText}>{item.name}</Text>

                <Text style={styles.itemText2}>{'$' + item.price}</Text>
                <TouchableOpacity style={styles.logout} onPress={goTo}>
                    <Text>Add to cart</Text>
                 </TouchableOpacity>
                </View>
                  <Image
                     source={{ uri: `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${item.image}?raw=true` }}
                  style={styles.image3} />
                </View>
//                </TouchableOpacity>
         )
         }
         if (item.name.toLowerCase().includes(userInput.toLowerCase())) {
            return (
//               <TouchableOpacity >
                   <View style={styles.innerContainer}>
                   <View>
                   <Text style={styles.itemText}>{item.name}</Text>

                   <Text style={styles.itemText2}>{'$' + item.price}</Text>
                   <TouchableOpacity style={styles.logout} onPress={goTo}>
                       <Text>Add to cart</Text>
                    </TouchableOpacity>
                   </View>
                     <Image

                        source={{ uri: `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${item.image}?raw=true` }}
                     style={styles.image3} />

                   </View>
//                </TouchableOpacity>
            )
         }
   }

   return (
//   <ScrollView>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>

            <View style={styles.container}>
              <TextInput
                 style={styles.textInput}
                 placeholder = " Search your dish"
                 onChangeText = {(query) => setUserInput(query)}

              />
              <FlatList
                 ItemSeparatorComponent={() => (
                   <View style={{ backgroundColor: "#fdf5e6" , height : 5}} />
                 )}
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({item , index})=> filterData(item)}
                  />

            </View>

      </TouchableWithoutFeedback>
//      </ScrollView>
   )
}
    styles = StyleSheet.create({

       textInput : {
          paddingHorizontal : 20,
          paddingVertical : 2 ,
          borderWidth : 1 ,
          borderRadius : 8 ,
          borderColor : "grey",
          marginTop : 10,
          marginLeft : 20,
          marginRight : 20,
          marginBottom : 10
       },
       container : {
          flex : 1
       },
       innerContainer: {
          paddingHorizontal: 20,
          paddingVertical: 2,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop : 0,
          marginLeft : 10,
          marginRight : 10,
          borderWidth : 0.3,
          borderColor : 'red'
      },
      itemText: {
          color: 'red',
          fontSize: 18,
          marginTop : 10,
          fontWeight : 'bold'
      },
      itemText2: {
          color: 'black',
          fontSize: 18,
          marginTop : 5
      },
      image3 : {
         height: 70,
         height: 70,
         width: 90,
         marginRight : 1,
         borderRadius : 10,
         borderColor : 'red',
         borderWidth : 1,
         marginTop : 20
      },
      logout : {
            borderWidth : 1,
            marginLeft : 0,
            height : 24,
            width : 80,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor : 'white',
            borderRadius : 7,
            marginTop : 10,
            marginBottom : 10
         },
         cart : {
            marginBottom : 70 , marginLeft : 20 , fontWeight : 'bold'
         }
    })
    export default Order ;