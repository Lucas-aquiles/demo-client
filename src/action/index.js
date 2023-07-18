const axios = require('axios')


export function getCountries() {
    return async function (dispatch) {
        const json = await axios.get('https://demo-back-countries.onrender.com/countries')
        // console.log("aaaaa", json.data, "aaaaa")
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        })
    }
}


export function filter_Activities(payload) {
    return {
        type: 'FILTER_ACTIVITIES',
        payload
    }
}



export function getActivities() {
    return function (dispatch) {
        try {
            return fetch("https://demo-back-countries.onrender.com/activities")
                .then(response => response.json())
                .then(activity => {
                    dispatch({
                        type: "GET_ACTIVITY", payload: activity
                    });
                })
        } catch (error) {
            throw new Error(error)
        }
    };
}


export function filter_Continent(payload) {
    return {
        type: 'FILTER_CONTINENT',
        payload
    }
}

export function orderlyByName(payload) {
    return {
        type: 'ORDELY_NAME',
        payload
    }
}
export function orderlyByPoblation(payload) {
    return {
        type: 'ORDELY_POBLATION',
        payload
    }
}



export function searchCountry(payload) {
    return async function (dispatch) {
        try {
            const json = await axios.get(`https://demo-back-countries.onrender.com/countries?name=${payload}`)
            // console.log("aaaaa", json.data, "aaaaa")
            return dispatch({
                type: 'SEARCH_COUNTRY',
                payload: json.data
            })
        } catch (err) {
            return dispatch({
                type: 'ERROR_SEARCH',
                payload: "errorSearch"
            })
        }
    }
}


export function getCountriesFront() {
    return {
        type: 'GET-COUNTRIES_FRONT',

    }
}
export function searchFilter(payload) {

    return {
        type: "SEARCH_FILTER",
        payload
    }
}

export function postActivities(payload) {
    return async function (dispatch) {
        const result = await axios.post("https://demo-back-countries.onrender.com/activities", payload);
        return dispatch({
            type: "SEND_POST",
            payload: result
        })

    }
}

export function clearActivities() {
    return {
        type: "CLEAR_ACTIVITIES",
        payload: []
    }
}

export function clearError_Create() {
    return {
        type: "CLEAR_ERROR_CREATE",
        payload: []
    }
}



export function callId(payload) {
    return function (dispatch) {
        try {
            return fetch(`https://demo-back-countries.onrender.com/countries/${payload}`)
                .then(response => response.json())
                .then(details => {
                    dispatch({
                        type: "CALL_ID", payload: details
                    });
                })
        } catch (error) {
            throw new Error(error)
        }
    };
}

export function clearDetails() {

    return {
        type: "CLEAR_DETAILS",
        payload: []
    }
}
export function clearStateCountries() {
    return {
        type: "CLEAR_COUNTRIES",
        payload: []
    }
}

export function getFavorite(payload) {
    return {
        type: "GET_FAVORITE",
        payload
    }
}
export function deletFavorite(payload) {
    return {
        type: "DELET_FAVORITE",
        payload
    }
}




// "@fortawesome/fontawesome-svg-core",
//     "@fortawesome/free-brands-svg-icons",
//     "@fortawesome/free-regular-svg-icons"
//     "@fortawesome/free-solid-svg-icons"
//     "@fortawesome/react-fontawesome"