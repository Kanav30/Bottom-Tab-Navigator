import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class YT extends React.Component {
  render(){
  return (
    <View>
      <Text
      style={styles.text}
      >YouTube Page</Text>
      <TouchableOpacity>
      <Image source = {require('../assets/youtube.png')} 
        style={{width: 100, height: 100,marginLeft: 100, marginTop: 60}}
      />
      </TouchableOpacity>
      
    </View>
  );
  }

}

const styles = StyleSheet.create({
 text:{
     textAlign: 'center',
     marginTop: 160,
     fontSize: 30
 }
});
