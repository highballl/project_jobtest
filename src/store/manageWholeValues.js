// action type
export const ADD_VALUES = "ADD_VALUES";
export const DELETE_VALUES = "DELETE_VALUES";

// action creator
export const addValues = values => ({type: ADD_VALUES, values});
export const deleteValues = values => ({type: DELETE_VALUES, values});
 
// initial state
const initialValues = {
    values: [],
};

// reducer
export default function Values (state = initialValues, action) {
    switch(action.type) {
        case ADD_VALUES:
            return {
                values:action.values,
            };
        case DELETE_VALUES:
            return {
                values: [],
            };
        default:
            return state;
    }
};