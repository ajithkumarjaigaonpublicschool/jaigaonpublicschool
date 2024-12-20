import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import GoogleMap from '@/components/sections/GoogleMap';
import ContactForm from '@/components/form/ContactForm';
import Address from '@/components/Address';
import Metadata from '@/components/Metadata';


const ContactPage: React.FC = () => {
  // Initialize state with type
  return (
    <>
      <Metadata title="Contact Us | Jaigaon Public School" description="Contact us - admin@jaigaonpublicschool.com, 9775045587"/>
      <div className="container mx-auto px-4 py-8 lg:px-32">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-gray-100 p-6 rounded-lg space-y-4">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <Address className='space-y-4' />
          {/* Google Maps Iframe */}
          <GoogleMap className='sm:h-[300px] md:h-[400px]'/>
        </div>

        {/* Contact Form */}
          <ContactForm />
      </div>
    </div>
    </>
  );
};

export default ContactPage;