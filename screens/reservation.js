import React, {useState} from 'react';
import {View , Text , StyleSheet} from 'react-native'
import {Calendar, LocaleConfig} from 'react-native-calendars';

const App = () => {
  const [selected, setSelected] = useState('');

  return (
  <View>
     <Text>Reserve your table for the party</Text>
     <Calendar
     style={{
         borderWidth: 2,
         borderColor: 'red',
         padding : 5,
         marginHorizontal : 10,
         marginVertical : 30

       }}
       onDayPress={day => {
         setSelected(day.dateString);
       }}
       markedDates={{
         [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'black'}
       }}
     />
  </View>

  );
};

export default App;