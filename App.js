import React from 'react';
import { StyleSheet,View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'
import PlaceDetails from './src/components/PlaceDetails/PlaceDetails'

import placeImage from './assets/place.jpg'

export default class App extends React.Component {
  
  state = {
    places: [],
    selectedPlace: null,
  }
  
  placeAddedHandler = (placeName) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
            key: Math.random(),
            name: placeName,
            image: 
            // placeImage,
            {
              uri: "https://www.trawell.in/images/pics/bangalore_local.jpg"
            }
          })
      }
    })
  }

  placeSelectedHandler = (key) => {
    this.setState(prevState =>{
      return{
        selectedPlace: prevState.places.find(place => {
          return place.key === key
        })
      } 
    })
  }

  itemDeltedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlace.key
        }),
        selectedPlace: null
      }
    })
  }

  closeModalHandler = () => {
    this.setState({
      selectedPlace: null
    })
  }

  render() {
    
    return (
      <View style={styles.container}>
        <PlaceDetails 
            selectedPlace = {this.state.selectedPlace } 
            onItemDeleted = {this.itemDeltedHandler}
            onModalClosed = {this.closeModalHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />        
        <PlaceList
          places={this.state.places} 
          onItemSelected = {this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
