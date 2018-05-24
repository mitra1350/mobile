import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header'
import styles from  './styles/style'


export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Header}>login</Text>

      </View>
    );
  }
}
