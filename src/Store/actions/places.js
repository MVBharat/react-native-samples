import { ADD_PLACE, REMOVE_PLACE, SELECT_PLACE, DESELECT_PLACE } from './actionTypes';

const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    }
}

const deletePlace = () => {
    return{
        type: REMOVE_PLACE
    }
}

const selectPlace = (key) => {
    return{
        type: SELECT_PLACE,
        placeKey: key
    }
}

const deselectPlace = () => {
    return{
        type: DESELECT_PLACE,
    }
}