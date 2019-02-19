import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from './actionTypes';

const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    }
}

const deletePlace = () => {
    return{
        type: DELETE_PLACE
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