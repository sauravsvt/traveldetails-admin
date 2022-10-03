import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected2 = ({ component: Component, ...rest }) => {
    const isLogin = () => {
        let storeToken = localStorage.getItem("data");
        if (storeToken) {
            return true;
        } return false;
    }
    if (isLogin()) {
        return <Navigate to='/home' />
    }
    return <Component {...rest} />
}

export default Protected2