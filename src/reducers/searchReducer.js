const initialState = { error: '', isLoading: false, results: [] }
export const searchReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, isLoading: true}
        case 'SET_RESULTS':
            return { ...state, isLoading: false, results: action.payload, error: '' }
        case 'ERROR':
            console.log('An error has occurred:', action.error)
            return { ...state, error: action.payload, isLoading: false }
        default:
            return state
    }
}