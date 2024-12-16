import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface AddressProps {
  className?: string;
  iconColor?: string;
  iconSize?: number;
  addressDetails?: {
    street: string;
    phone: string;
    email: string;
  };
}

const Address: React.FC<AddressProps> = ({ 
  className = '', 
  iconColor = 'text-primary', 
  iconSize = 24,
  addressDetails = {
    street: 'R9WG+XHF, Jaigaon Public School, Mechiabasti, Jaigaon, West Bengal 736182',
    phone: '9775045587',
    email: 'admin@jaigaonpublicschool.com'
  }
}) => {
  return (
    <ul className={`${className}`}>
      <li className="flex items-center gap-4">
        <div>
          <MapPin className={`${iconColor}`} size={iconSize}/>
        </div>
        <address className="not-italic hover:text-primary cursor-pointer">
          <a 
            href="https://www.google.com/maps/place/Jaigaon+Public+School/@26.8474364,89.3669045,16z/data=!4m10!1m2!2m1!1sR9WG+XHF,+Unnamed+Road,+Mechiabasti,+Jaigaon,+West+Bengal+736182!3m6!1s0x39e3cbcc57e7541f:0xd3fe7ac618722927!8m2!3d26.8474364!4d89.3764317!15sCkBSOVdHIFhIRiwgVW5uYW1lZCBSb2FkLCBNZWNoaWFiYXN0aSwgSmFpZ2FvbiwgV2VzdCBCZW5nYWwgNzM2MTgykgEGc2Nob29s4AEA!16s%2Fg%2F11j7hkv3c3?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" 
            rel="noopener noreferrer"
            className={`${iconColor}`}
          >
            {addressDetails.street}
          </a>
        </address>
      </li>
      <li className="flex items-center gap-4">
        <div>
          <Phone className={`${iconColor}`} size={iconSize} />
        </div>
        <a href={`tel:${addressDetails.phone.replace(/\D/g, '')}`} className={`hover:text-primary ${iconColor}`}>
          {addressDetails.phone}
        </a>
      </li>
      <li className="flex items-center gap-4">
        <div>
          <Mail className={`${iconColor}`} size={iconSize} />
        </div>
        <a href={`mailto:${addressDetails.email}`}  className={`hover:text-primary ${iconColor}`}>
          {addressDetails.email}
        </a>
      </li>
    </ul>
  );
};

export default Address;