import React , {useEffect , useState} from 'react'
import {View , Text , StyleSheet, TextInput , ScrollView ,
TouchableWithoutFeedback , Keyboard , Image , ActivityIndicator, FlatList , TouchableOpacity} from 'react-native'
import filter from "lodash.filter"

const API_ENDPOINT = `https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json`;

const Order = () => {
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





   const filterData = (item) => {
         if(userInput === ""){
         return (
            <TouchableOpacity >
                <View style={styles.innerContainer}>
                <View>
                <Text style={styles.itemText}>{item.name}</Text>

                <Text style={styles.itemText2}>{'$' + item.price}</Text>
                </View>
                  <Image
                     source={{ uri: `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${item.image}?raw=true` }}
                  style={styles.image3} />
                </View>
                </TouchableOpacity>
         )
         }
         if (item.name.toLowerCase().includes(userInput.toLowerCase())) {
            return (
               <TouchableOpacity >
                   <View style={styles.innerContainer}>
                   <View>
                   <Text style={styles.itemText}>{item.name}</Text>

                   <Text style={styles.itemText2}>{'$' + item.price}</Text>
                   </View>
                     <Image

                        source={{ uri: `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${item.image}?raw=true` }}
                     style={styles.image3} />
                   </View>
                </TouchableOpacity>
            )
         }
   }

   return (
      <TouchableWithoutFeedback onPress={dismissKeyboard}>

            <View style={styles.container}>
              <TextInput
                 style={styles.textInput}
                 placeholder = " Search your dish"
                 onChangeText = {(query) => setUserInput(query)}

              />
              <FlatList
                 ItemSeparatorComponent={() => (
                   <View style={{ backgroundColor: "#fdf5e6", height: 2 }} />
                 )}
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({item , index})=> filterData(item)}
                  />
            </View>
      </TouchableWithoutFeedback>
   )
}
    styles = StyleSheet.create({

       textInput : {
          paddingHorizontal : 20 ,
          paddingVertical : 8 ,
          borderWidth : 1 ,
          borderRadius : 8 ,
          borderColor : "grey",
          marginTop : 15,
          marginLeft : 20,
          marginRight : 20,
          marginBottom : 10
       },
       container : {
          flex : 1
       },
       innerContainer: {
          paddingHorizontal: 21,
          paddingVertical: 20,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop : 15,
          marginLeft : 10,
          marginRight : 10,
          borderWidth : 0.3,
          borderColor : 'red'
      },
      itemText: {
          color: 'red',
          fontSize: 18,
          marginTop : 5,
          fontWeight : 'bold'
      },
      itemText2: {
          color: 'black',
          fontSize: 18,
          marginTop : 10
      },
      image3 : {
         height: 71,
         height: 70,
         width: 90,
         marginRight : 1,
         borderRadius : 10,
         borderColor : 'red',
         borderWidth : 1
      },
    })
    export default Order ;