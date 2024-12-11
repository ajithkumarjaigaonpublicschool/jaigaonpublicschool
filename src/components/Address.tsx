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
  iconColor = 'text-blue-600', 
  iconSize = 24,
  addressDetails = {
    street: '123 Business Street, City, State 12345',
    phone: '(555) 123-4567',
    email: 'contact@yourcompany.com'
  }
}) => {
  return (
    <ul className={`${className}`}>
      <li className="flex items-center">
        <MapPin className={`mr-3 ${iconColor}`} size={iconSize}/>
        <address className="not-italic">{addressDetails.street}</address>
      </li>
      <li className="flex items-center">
        <Phone className={`mr-3 ${iconColor}`} size={iconSize} />
        <a href={`tel:${addressDetails.phone.replace(/\D/g, '')}`}>
          {addressDetails.phone}
        </a>
      </li>
      <li className="flex items-center">
        <Mail className={`mr-3 ${iconColor}`} size={iconSize} />
        <a href={`mailto:${addressDetails.email}`}>
          {addressDetails.email}
        </a>
      </li>
    </ul>
  );
};

export default Address;