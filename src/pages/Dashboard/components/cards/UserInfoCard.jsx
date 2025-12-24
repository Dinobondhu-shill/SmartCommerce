import { Mail, PhoneCall } from 'lucide-react';
import React from 'react';

const UserInfoCard = ({user}) => {
    return (
        
      <div>
         <div className="mt-20 text-center">
        <h2 className="text-2xl pb-6 font-semibold text-black">{user? user.name : "Unknown"}</h2>
        <hr />
      </div>  
      <div className="pt-5 pl-5 mt-0 space-y-1.5">
        <div className='flex items-center gap-1.5'>
            <Mail className="mr-2 text-gray-500" />
            <p className="text-gray-600 text-lg font-semibold">{  user?  user.email : "Email is not Provided"}</p>
        </div>
        <div className='flex items-center gap-1.5'>
            <PhoneCall className="mr-2 text-gray-500" />
            <p className="text-gray-600 text-lg font-semibold">{  user?  user.phone : "Phone No is not Provided"}</p>
        </div>
        <div className='flex items-center gap-1.5'>
            <Mail className="mr-2 text-gray-500" />
            <p className="text-gray-600 text-lg font-semibold">{  user?  user.email : "Email is not Provided"}</p>
        </div>
      
        <hr />
      </div>  
      </div>
    );
};

export default UserInfoCard;