import * as Types from './types'

import Axios from 'axios'

export const  register = (user, history) => dispatch => {
    Axios.post('https://virtserver.swaggerhub.com/networkinss/PinPointPage/1.0.0/user', user) 
        .then(response => {
            console.log(response)
            console.log('Your request is success...')
        })
        .catch(error => {
            console.log(error)
            // dispatch({
            //     type: Types.USER_ERROR,
            //     payload: {
            //         error: error.response.data
            //     }
            // })
        })
}

export const  login = (user, history) => dispatch => {
    Axios.get(`https://virtserver.swaggerhub.com/networkinss/PinPointPage/1.0.0/user/login${user}`) 
        .then(response => {
            console.log(response)
            console.log('Your request is success...')
        })
        .catch(error => {
            console.log(error)
            console.log(user)
            // dispatch({
            //     type: Types.USER_ERROR,
            //     payload: {
            //         error: error.response.data
            //     }
            // })
        })
}