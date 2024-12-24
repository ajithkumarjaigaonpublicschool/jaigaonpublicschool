import React from 'react'
import SocialLinks from '../sections/SocialLinks'
import GoogleMap from '../sections/GoogleMap'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo-bg.webp';
import Address from '../Address'

const Footer = () => {
   const getCurrentYear = () => new Date().getFullYear();
   const companyName = "Jaigaon Public School"
  return (
    <footer className=''>
      <div className='bg-primary text-white space-y-8 p-8 md:py-20 lg:px-32'>
      <div className='w-full flex justify-between items-center border-b pb-4 border-white'>
          <div className="space-y-4 flex flex-col justify-start items-start">
            <Link
              href="/"
            >
              <Image src={logo} alt="Logo"width={60} height={60} className='object-cover' />
            </Link>

            {/* <h3 className="text-lg font-semibold text-primary">Jaigaon Public School</h3> */}
            <p className="text-sm">
              Nurturing minds, building futures since 2019
            </p>
          </div>
        {/* social Links */}
        <div>
          <SocialLinks type="footer"/>
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-2 space-y-4 gap-4'>
        <GoogleMap className='sm:h-[300px] md:h-[400px]'/>
        <div className='space-y-4 md:flex md:justify-between md:items-start md:space-y-0'>
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-white hover:text-secondary">About Us</a></li>
              <li><a href="/academics" className="text-white hover:text-secondary">Academics</a></li>
              <li><a href="/enrollment" className="text-white hover:text-secondary">Admissions</a></li>
              <li><a href="/contact" className="text-white hover:text-secondary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact Info</h4>
            <Address className="space-y-2 text-sm text-white" iconColor='hover:text-secondary' iconSize={16}/>
          </div>
        </div>
      </div>
    </div>
    <div className='w-full h-16 flex justify-center items-center bg-customBlue'>
      <p className='text-white'>&copy; {getCurrentYear()} <Link href='/' className='hover:text-secondary'>{companyName}</Link>. All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default Footer