import React, { useState, useRef, useEffect } from 'react';
import Login from './Login';
import Signup from './Signup';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/store/modules';

const Auth = () => {
    const signupState = useSelector((state: RootState) => state.user.signupState)

    return (
        <>
            <Login />
            {
                signupState && <Signup />
            }
        </>
    );
};
export default Auth;