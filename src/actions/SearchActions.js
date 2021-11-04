
export const fetchNeo = data => {
    const api_key = process.env.NEXT_PUBLIC_API_KEY
    const { start_date, end_date } = data

    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${api_key}`
    console.log('FETCHING')
    return (dispatch) => {
        dispatch({type: 'SEARCH_LOADING'})
        function handleResponse(json) {
            if (json.error || json.code === 400 || json.element_count === 0) {
                const type = 'SEARCH_ERROR'
                if (json.code === 400) {
                    return dispatch({type: type, payload: 'Date range can only span 7 days.'})
                } else if (json.element_count === 0) {
                    return dispatch({ type: type, payload: 'No NEO\'s found in the given date range.'})
                }

                return dispatch({ type: type, payload: json.error.message })
            } else {
                dispatch({ type: 'SET_SEARCH_RESULTS', payload: json.near_earth_objects })
            }
        }

        fetch(url)
            .then(resp => resp.json())
            .then(json => handleResponse(json))
    }
}