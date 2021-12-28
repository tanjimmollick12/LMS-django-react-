import axios from 'axios'

import {
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGOUT,
    ADMIN_REGISTER_FAIL,
    ADMIN_REGISTER_REQUEST,
    ADMIN_REGISTER_SUCCESS,
    ADMIN_DETAILS_RESET,

} from '../contstants/adminConstants'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: ADMIN_LOGIN_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const {data} = await axios.post(
            'http://localhost:8000/api/login',
            {email, password},
            config
        )

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('adminInfo', JSON.stringify(data))
        if (data.is_superuser===true){
            document.location.href = '/dashboard'
        }else {
            document.location.href = '/userprofile'
        }
    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }

    //
}
export const logout = () => (dispatch, getState) => {


    document.location.href = '/login'
    const {
        adminLogin: {adminInfo},
    } = getState()
    const config = {
        headers: {
            Authorization: 'Bearer ' + adminInfo.token
        },
    }

    localStorage.removeItem('adminInfo')

    dispatch({type: ADMIN_LOGOUT})
    dispatch({type: ADMIN_DETAILS_RESET})

}


export const register = (username, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: ADMIN_REGISTER_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Accept-Encoding':'gzip, deflate, br',
                'Connection':'keep-alive'
            },
        }

        const {data} = await axios.post(
            'http://127.0.0.1:8000/api/register',
            {username, email, password},
            config
        )

        dispatch({
            type: ADMIN_REGISTER_SUCCESS,
            payload: data,

        })
        console.log(data)
    } catch (error) {
        dispatch({
            type: ADMIN_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
    if(ADMIN_REGISTER_SUCCESS){
         document.location.href = '/login'
    }else{
         document.location.href = '/'
    }


}

