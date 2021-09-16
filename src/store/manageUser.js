// action type
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";

// action creator
export const addUser = user => ({type: ADD_USER, user});
export const deleteUser = user => ({type: DELETE_USER, user});

// initial state
const initialUser = {
    user : {
        id : 0,
        date : "",
        name : "",
        gender : "",
    }
};

// reducer
export default function manageUser (state = initialUser, action) {
    switch(action.type) {
        case ADD_USER:
            return {
                ...state,
                user : { 
                    id : action.user.id,
                    date : action.user.date,
                    name : action.user.name,
                    gender : action.user.gender,
 
                }
            };
        case DELETE_USER:
            return {
                ...state,
                user: {
                    id : 0,
                    date : "",
                    name : "",
                    gender : "",
                }
            };
        default:
            return state;
    }
};