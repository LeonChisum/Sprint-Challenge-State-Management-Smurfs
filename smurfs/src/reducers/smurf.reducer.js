import { FETCH_SMURFS } from "../actions/actions"

const initialState = {
    smurfs: [],
}

export const reducer(state = initialState, action){
    switch(action.type){
        case FETCH_SMURFS:
            return state;
    }
        
}