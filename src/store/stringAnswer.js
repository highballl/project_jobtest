// action type
export const ADD_STRING_ANSWER = "ADD_STRING_ANSWER";
export const DELETE_STRING_ANSWER = "DELETE_STRING_ANSWER";


// action creator
export const addStringAns = stringAnswer => ({type: ADD_STRING_ANSWER, stringAnswer});
export const delStringAns = stringAnswer => ({type: DELETE_STRING_ANSWER, stringAnswer});

// initial state
const initialStringAnswer = {
    stringAnswer : ""
};

// reducer
export default function StringAnswer (state = initialStringAnswer, action) {
    switch(action.type) {
        case ADD_STRING_ANSWER:
            return {
                ...state, stringAnswer:action.stringAnswer
            };
        case DELETE_STRING_ANSWER:
            return {
            };
        default:
            return state;
    }
};