import React, {useState} from 'react';
import {View , Text , StyleSheet,TouchableOpacity,Alert} from 'react-native'
import {Calendar, LocaleConfig} from 'react-native-calendars';

const App = () => {
  const [selected, setSelected] = useState('');
  const timing = () => {
     Alert.alert('Feature coming soon');
  }
  return (
  <View>
     <Text style={styles.heading}>Reserve your table for the party</Text>
     <Calendar
     style={{
         borderWidth: 2,
         borderColor: 'red',
         padding : 5,
         marginHorizontal : 10,
         marginVertical : 20

       }}
       onDayPress={day => {
         setSelected(day.dateString);
       }}
       markedDates={{
         [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'black'}
       }}
     />
     <View>
        <Text style={styles.time}>Select the time</Text>
        <View style={{flexDirection: 'row',justifyContent : 'space-between' , marginRight : 20, marginTop : 20}}>
            <TouchableOpacity style={styles.touch} onPress={timing}>
               <Text style={{fontWeight : 'bold'}}>10 am</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch} onPress={timing}>
               <Text style={{fontWeight : 'bold'}}>12 pm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch} onPress={timing}>
               <Text style={{fontWeight : 'bold'}}>2 pm</Text>
            </TouchableOpacity>

        </View>
        <View style={{flexDirection: 'row',justifyContent : 'space-between' , marginRight : 20 , marginTop : 20}}>
           <TouchableOpacity style={styles.touch} onPress={timing}>
              <Text style={{fontWeight : 'bold'}}>6 pm</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.touch} onPress={timing}>
              <Text style={{fontWeight : 'bold'}}>8 pm</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.touch} onPress={timing}>
              <Text style={{fontWeight : 'bold'}}>10 pm</Text>
           </TouchableOpacity>
        </View>
     </View>
  </View>

  );
};
styles = StyleSheet.create({
   heading: {
      fontSize : 21,
      marginLeft : 30,
      marginTop : 10,
      fontWeight : 'bold',
      color : 'red',
   },
   time : {
      marginLeft : 20,
      fontSize : 19,
   },
   touch : {
      marginLeft : 20,
      marginTop : 15,
      borderWidth : 1,
      borderRadius : 10,
      width : 80,
      height : 40,
      alignItems : 'center' ,
      justifyContent : 'center',
      backgroundColor : '#deb887'
   }
})

export default App;