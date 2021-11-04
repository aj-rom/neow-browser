const initialState = { error: '', isLoading: false, results: [] }
export const browseReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'BROWSE_LOADING':
            return { ...state, isLoading: true}
        case 'SET_BROWSE_RESULTS':
            return { ...state, isLoading: false, results: action.payload, error: '' }
        case 'BROWSE_ERROR':
            return { ...state, error: action.payload, isLoading: false }
        default:
            return state
    }
}