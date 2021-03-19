import axiosTred from '../axiosTred'

export const FETCH_TREDS_REQUEST = 'FETCH_TREDS_REQUEST';
export const FETCH_TREDS_SUCCESS = 'FETCH_TREDS_SUCCESS';
export const FETCH_TREDS_FAILURE = 'FETCH_TREDS_FAILURE';


export const fetchTredsRequest = () => ({ type: FETCH_TREDS_REQUEST });
export const fetchTredsSuccess = (treds) => ({ type: FETCH_TREDS_SUCCESS, treds });
export const fetchTredsFailure = () => ({ type: FETCH_TREDS_FAILURE });


export const fetchTreds = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchTredsRequest());
            const response = await axiosTred.get('/treds')
            dispatch(fetchTredsSuccess(response.data))
        }
        catch (error) {
            dispatch(fetchTredsFailure())
        }
    }
}

export const createTred = (author, description) => {
    return async (dispatch) => {
        axiosTred.post('/treds/new', { author, description })
    }
}