import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default class App extends React.Component {
  
  state = {
    placeName: '',
    places: [],
  }
  
  placeNameChangeHandler = (val) => {
    this.setState ({
      placeName: val
    })  
  }

  placeSubmitHandler = () => {
    if(this.state.placeName === ""){
      return
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  render() {
    // const placeOutput = this.state.places.map(palce => {
    //   <Text>{place}</Text>
    // })

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>          
          <TextInput value={this.state.placeName}
            style = {{width: 230, fontSize: 25, borderBottomWidth: 2 ,borderBottomColor : "green" ,textAlign: "center"}}
            onChangeText={this.placeNameChangeHandler}
            placeholder = "enter something"
          />
          <Button
            title="Submit"
            color="purple"
            onPress={this.placeSubmitHandler}
            />
        </View>
        {/* <View>{placeOutput}</View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    // marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer:{
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",
    
  },
  placeInput: {
    width: "70%",
  },
  placeButton: {
    width: "30%",
  }
});
