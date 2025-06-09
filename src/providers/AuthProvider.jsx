import React, { } from 'react';
import AuthContext from '../contexts/AuthContext';

const AuthProvider = ({children}) => {

    const userInfo={
        user:"false",
        photoURL:"kisona",
        displayName:"imran",
        loading:false,
        email:"esonic@gmial.com"
       
    }
    return (
        <div>
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;