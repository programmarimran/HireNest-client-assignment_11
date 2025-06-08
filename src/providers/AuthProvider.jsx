import React, { } from 'react';
import AuthContext from '../contexts/AuthContext';

const AuthProvider = ({children}) => {

    const userInfo={
        user:"false",
       
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