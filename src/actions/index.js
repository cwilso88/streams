import streams from '../components/api/streams';
import { SIGN_IN, 
        SIGN_OUT, 
        CREATE_STREAM,
        FETCH_STREAMS,
        FETCH_STREAM,
        UPDATE_STREAM,
        DELETE_STREAM,
        EDIT_STREAM } from './types';

import { async } from 'q';



export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}
export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = formValues => async dispatch => {
         const response = await streams.post('/streams', formValues);

         dispatch({
             type: CREATE_STREAM,
             payload: response.data
         });
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    });
}

export const fetchStream = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    });
}

export const editStream = id => async dispatch => {
    const response = await streams.put(`/streams/${id}`);

    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    });
}

