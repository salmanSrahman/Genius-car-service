import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';


const RequireAuth = ({children}) => {
  
  let location = useLocation();

      return (
            <div>
                  
            </div>
      );
};

export default RequireAuth;