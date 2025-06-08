import React, { useState } from 'react';
import ServiceContext from '../contexts/ServiceContext';

const ServerProvider = ({children}) => {
  const [darkIstrue,setDarkIStrue]=useState(false)
  const service={
    darkIstrue,
    setDarkIStrue,
    name:"imrans service"
  }
  return (
    <div>
      <ServiceContext value={service}>
        {children}
      </ServiceContext>
    </div>
  );
};

export default ServerProvider;