import React, { useEffect, useState } from 'react';
import ServiceContext from '../contexts/ServiceContext';
import axios from 'axios';

const ServerProvider = ({children}) => {
  const [allServices,setAllServices]=useState([])
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BasicServer}/services`)
    .then(data=>{
      setAllServices(data.data)
    })
  },[])
  const [darkIstrue,setDarkIStrue]=useState(false)
  const serviceInfo={
    darkIstrue,
    setDarkIStrue,
    allServices
    
  }
  return (
    <div>
      <ServiceContext value={serviceInfo}>
        {children}
      </ServiceContext>
    </div>
  );
};

export default ServerProvider;