import React, { use } from 'react';
import ManageServiceCard from '../../../components/ManageServiceCard';
import ServiceContext from '../../../contexts/ServiceContext';

const ManageService = () => {
    const {allServices}=use(ServiceContext)
    console.log(allServices)
    return (
        <div>
            this is manage allServices
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    allServices?.map(service=> <ManageServiceCard key={service._id} service={service}></ManageServiceCard>)
                }
            </div>
           
        </div>
    );
};

export default ManageService;