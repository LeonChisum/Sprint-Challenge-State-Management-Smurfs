import Axios from "axios";
import thunk from 'redux-thunk'

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';
export const ADD_SMURF = 'ADD_SMURF';

export const getAllSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURFS_START})
    Axios.get('http://localhost:3333/smurfs')
         .then(res => {
             console.log(res.data)
             dispatch({type: FETCH_SMURFS_SUCCESS , payload: res.data})
         })
         .catch(err => {
             dispatch({type: FETCH_SMURFS_ERROR, payload: err})
         })
}