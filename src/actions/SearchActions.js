
export const fetchNeo = data => {
    const api_key = process.env.NEXT_PUBLIC_API_KEY
    const { start_date, end_date } = data

    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${api_key}`

    return (dispatch) => {
        dispatch({type: 'LOADING'})
        function handleResponse(json) {
            if (json.error || json.code === 400 || json.element_count === 0) {
                if (json.code === 400) {
                    return dispatch({type: 'ERROR', payload: 'Date range can only span 7 days.'})
                } else if (json.element_count === 0) {
                    return dispatch({ type: 'ERROR', payload: 'No NEO\'s found in the given date range.'})
                }

                return dispatch({ type: 'ERROR', payload: json.error.message })
            } else {
                dispatch({ type: 'SET_RESULTS', payload: json.near_earth_objects })
            }
        }

        fetch(url)
            .then(resp => resp.json())
            .then(json => handleResponse(json))
    }
}