
import React from 'react'
import { Navigate } from 'react-router-dom'


const Protected = ({ component: Component, ...rest }) => {
    const isLogin = () => {
        let storeToken = localStorage.getItem("data");
        if (storeToken) {
            return true;
        } return false;
    }
    if (isLogin()) {
        return <Component {...rest} />;
    }
    return <Navigate to='/login' />

}

export default Protected;