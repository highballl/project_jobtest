// action type
export const ADD_SORTEDVALUES = "ADD_SORTEDVALUES";
export const DELETE_SORTEDVALUES = "DELETE_SORTEDVALUES";

// action creator
export const addSortedValues = sortedValues => ({type: ADD_SORTEDVALUES, sortedValues});
export const deleteSortedValues = sortedValues => ({type: DELETE_SORTEDVALUES, sortedValues});
 
// initial state
const initialSortedValues = {
    sortedValues: [],
};

// reducer
export default function sortedValues (state = initialSortedValues, action) {
    switch(action.type) {
        case ADD_SORTEDVALUES:
            return {
                sortedValues:action.sortedValues,
            };
        case DELETE_SORTEDVALUES:
            return {
                sortedValues: [],
            };
        default:
            return state;
    }
};