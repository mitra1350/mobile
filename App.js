import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      name:"mitra",
      clock: 0
    };
  }

  componentDidMount(){
    this.setState({
      name:"ninja"
    });
    this.interval = setInterval(()=>this.changClock(), 1000);
  }
changClock(){
  this.setState(prevState => this.setState({
    clock: prevState.clock + 1
  }));
}

  render() {
    return (
      <View style={styles.container}>
        <Text>mitra</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>{this.state.name}</Text>
        <Text>{this.state.clock}</Text>
        <Header mashin="BMW" motor="hyundai"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
