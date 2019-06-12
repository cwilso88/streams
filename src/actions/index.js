import streams from '../components/api/streams';
import { SIGN_IN, SIGN_OUT } from './types';
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

export const createStream = formValues => {
    return(dispatch) => {
         streams.post('/streams', formValues)
    };
};
