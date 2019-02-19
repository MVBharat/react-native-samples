import React from 'react'
import {View, TextInput, Button, StyleSheet } from 'react-native'

class placeInput extends React.Component {

  state ={
    placeName: ""
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    })
  }

  placeNameSubmitHandler = () => {
    if(this.state.placeName.trim() === ""){
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  }

  render(){
    return(
      <View style={styles.inputContainer}>          
          <TextInput 
                placeholder = "Enter Place name"
                value = {this.state.placeName}
                onChangeText = {this.placeNameChangedHandler}
                style = { styles.placeInput}
          />
          <Button
              title="Submit"  
              style= {styles.placeButton}            
              onPress={this.placeNameSubmitHandler}
          />
      </View>
      )
    }
  }

const styles = StyleSheet.create({

  inputContainer:{
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",  
  },
  placeInput: {
    width: "70%",
    fontSize: 25, 
    borderBottomWidth: 2,
    borderBottomColor : "green" ,
    marginRight: 20
  
  },
  placeButton: {
    width: "30%",
    color: "purple"
  },
})

export default placeInput