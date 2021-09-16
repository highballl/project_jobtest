// action type
export const ADD_HIGHVALUES = "ADD_HIGHVALUES";
export const DELETE_HIGHVALUES = "DELETE_HIGHVALUES";

// action creator
export const addHighValues = highValues => ({type: ADD_HIGHVALUES, highValues});
export const deleteHighValues = highValues => ({type: DELETE_HIGHVALUES, highValues});
 
// initial state
const initialHighValues = {
    highValues: [],
};

// reducer
export default function highValues (state = initialHighValues, action) {
    switch(action.type) {
        case ADD_HIGHVALUES:
            return {
                highValues:action.highValues,
            };
        case DELETE_HIGHVALUES:
            return {
                highValues: [],
            };
        default:
            return state;
    }
};