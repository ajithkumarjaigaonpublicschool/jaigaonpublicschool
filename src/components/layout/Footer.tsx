import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import Address from '../Address';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Jaigaon Public School</h3>
            <p className="text-gray-600 text-sm">
              Nurturing minds, building futures since 1985
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-600 hover:text-primary">About Us</a></li>
              <li><a href="/academics" className="text-gray-600 hover:text-primary">Academics</a></li>
              <li><a href="/enrollment" className="text-gray-600 hover:text-primary">Admissions</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact Info</h4>
            <Address className="space-y-2 text-sm text-gray-600" iconColor='hover:text-primary' iconSize={16}/>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <YoutubeIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>© 2024 Jaigaon Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}