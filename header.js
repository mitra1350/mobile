import React,{Component} from 'react';
import {View,Text} from 'react-native'

export default class Header extends Component{
    constructor(props){
      super(props);

      this.state = {
        otomobil: props.mashin,
        siklet: props.motor
      }

    }

    componentDidMount(){
      this.setState({
        otomobil: "benz",
        siklet: "suziki"
      });
    }

    render(){
      return(
        <View>
        <Text>{this.props.mashin}</Text>
        <Text>{this.props.motor}</Text>
        <Text>{this.state.otomobil}</Text>
        <Text>{this.state.siklet}</Text>
        </View>

      );
    }
}
