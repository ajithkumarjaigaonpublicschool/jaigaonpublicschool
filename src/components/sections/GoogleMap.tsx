import React from 'react';

interface GoogleMapsEmbedProps {
  src?: string;
  width?: number;
  height?: number;
}

const GoogleMap: React.FC<GoogleMapsEmbedProps> = ({ 
  src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14239.058666822686!2d89.3764317!3d26.8474364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3cbcc57e7541f%3A0xd3fe7ac618722927!2sJaigaon%20Public%20School!5e0!3m2!1sen!2sin!4v1733582440385!5m2!1sen!2sin", 
  width = 300, 
  height = 300 
}) => {
  return (
    <div className='w-full sm:h-[300px] md:h-[400px] rounded-md hover:shadow-lg overflow-hidden'>
      <iframe 
        src={src}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='w-full h-full'
      />
    </div>
  );
};

export default GoogleMap;