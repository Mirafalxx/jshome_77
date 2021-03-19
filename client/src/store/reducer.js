import { FETCH_TREDS_REQUEST, FETCH_TREDS_SUCCESS, FETCH_TREDS_FAILURE } from './action'
const initialState = {
    loading: false,
    modalOpen: false,
    treds: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TREDS_REQUEST:
            return { ...state, loading: true }
        case FETCH_TREDS_SUCCESS:
            return { ...state, treds: action.treds, loading: false }
        case FETCH_TREDS_FAILURE:
            return { ...state, loading: false }
        default:
            return state
    }
}


export default reducer;