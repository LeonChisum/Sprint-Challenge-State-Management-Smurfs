
const initialState = {
    isFetching: false,
    smurfs: [],
    fetched: false,
    error: null,
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_SMURFS_START":
            return {
                ...state, 
                isFetching: true
            }
        case "FETCH_SMURFS_SUCCESS":
            return {
                ...state,
                fetched: true,
                smurfs: [...state.smurfs, ...action.payload]
            }
        case "FETCH_SMURFS_ERROR":
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
        
}