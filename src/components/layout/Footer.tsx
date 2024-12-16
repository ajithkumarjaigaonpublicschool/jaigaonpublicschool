import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import Address from '../Address';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo-bg.png';
import GoogleMap from '../sections/GoogleMap';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link
              href="/"
            >
              <Image src={logo} alt="Logo"width={60} height={60} className='object-cover' />
            </Link>

            {/* <h3 className="text-lg font-semibold text-primary">Jaigaon Public School</h3> */}
            <p className="text-sm">
              Nurturing minds, building futures since 2019
            </p>
              <GoogleMap className='w-full h-full md:h-1/2'/>          
          </div>
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
          
          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary">
                <YoutubeIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-white">
          <p>© {currentYear} Jaigaon Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}