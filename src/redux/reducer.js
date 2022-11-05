import Text from '../screens/Register102.js'

// Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const UPDATE = "UPDATE";

// Action creators
export const increment = () => ({
    type: INCREMENT,
})

export const decrement = () => ({
    type: DECREMENT,
})

export const update = () => ({
    type: UPDATE,
})

// Initial state
const initialState = {
    counter: 0
}

// Root reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case UPDATE:
            return {
                ...state,
                counter: Text
            }
        default:
            return state
    }
}

export default rootReducer