import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user} =useContext(AuthContext)
    if(user){
        return children;
    }
       return <Navigate to='/login' replace={true}></Navigate>
    
};

export default PrivateRouter;