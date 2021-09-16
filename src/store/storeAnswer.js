// action type
export const ADD_ANSWER = "ADD_ANSWER";
export const DELETE_ANSWER = "DELETE_ANSWER";

// action creator
export const addAnswer = answer => ({type: ADD_ANSWER, answer});
export const deleteAnswer = answer => ({type: DELETE_ANSWER, answer});
 
// initial state
const initialAnswer = {
    answer : {},
};

// reducer
export default function Answer (state = initialAnswer, action) {
    switch(action.type) {
        case ADD_ANSWER:
            return {
                ...state, answer : {...state.answer, [action.answer.q]:action.answer.a},
            };
        case DELETE_ANSWER:
            return {
                answer: {}
            };
        default:
            return state;
    }
};