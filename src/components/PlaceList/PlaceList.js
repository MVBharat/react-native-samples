import React from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import ListItem from '../ListItem/ListItem'

const placeList = (props) => {
    const placeOutput = props.places.map((place, i) => (
        <ListItem 
            key={i} 
            placeName={place} 
            onItemPressed={() => props.onItemDeleted(i)} 
            />
    ))

    return (
        <ScrollView style={styles.listContainer} >{placeOutput}</ScrollView>
    )

}

const styles = StyleSheet.create ({
  listContainer: {
    width: "100%",
    marginTop: 20
  }
})
export default placeList