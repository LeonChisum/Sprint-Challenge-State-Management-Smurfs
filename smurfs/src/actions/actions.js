import Axios from "axios";

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';

const getAllSmurfs = () => dispatch => {
    Axios.get('http://localhost:3333/smurfs')
         .then(res => (
             console.log(res),
             dispatch({type: FETCH_SMURFS, payload: res})
         ))
}