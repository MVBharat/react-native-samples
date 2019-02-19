import React from 'react'
import { Modal, View, Text, Button, Image, StyleSheet } from 'react-native'

const placeDetails = (props) => {
    
    let modalContent = null;

    if(props.selectedPlace){
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage} />
                <Text style={styles.placeName} >{props.selectedPlace.name} </Text>            
            </View>
        )
    }


    return(
        <Modal
            onRequestClose={props.onModalClosed} 
            visible = {props.selectedPlace !== null}
            animationType= "slide" >
            
            <View style= {styles.modalContent}>
                {modalContent}
                <View style={styles.operationButton}>
                    <Button title="Delete" color="red" onPress={props.onItemDeleted} />
                    <Button title="close" onPress={props.onModalClosed} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

    modalContent: {
        margin: 22,        
    },
    placeImage: {
        width: "100%",
        height: 200,
    },
    placeName: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold"
    },
    operationButton:{
        margin: 20,
        padding: 20,
        
    }

})

export default placeDetails