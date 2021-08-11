import {SET_TODOS, TOFFLE_TODO_STATUS, RESET_COUNTER} from '../action-types';

const initialState = {
    todos: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_TODOS: {
            return {...state, todos: []};
        }
        case TOFFLE_TODO_STATUS: {
            return {...state, todos: []};
        }
        case RESET_COUNTER: {
            return {...state, todos: []};
        }
        default: {
            return state;
        }
    }
}

export default reducer;
