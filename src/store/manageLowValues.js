// action type
export const ADD_LOWVALUES = "ADD_LOWVALUES";
export const DELETE_LOWVALUES = "DELETE_LOWVALUES";

// action creator
export const addLowValues = lowValues => ({type: ADD_LOWVALUES, lowValues});
export const deleteLowValues = lowValues => ({type: DELETE_LOWVALUES, lowValues});
 
// initial state
const initialLowValues = {
    lowValues: [],
};

// reducer
export default function lowValues (state = initialLowValues, action) {
    switch(action.type) {
        case ADD_LOWVALUES:
            return {
                lowValues:action.lowValues,
            };
        case DELETE_LOWVALUES:
            return {
                lowValues: [],
            };
        default:
            return state;
    }
};