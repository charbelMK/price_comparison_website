export const initialState = {
    term: null,
};

export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
    SET_SEARCH_RESULTS: "SET_SEARCH_RESULTS",
};

const reducer = (state, action) => {
    console.log(action);
    
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
            };
        
        case actionTypes.SET_SEARCH_RESULTS:
            return {
                ...state,
                term: action.products,
            } 

        default:
            return state;
    }
};

export default reducer;