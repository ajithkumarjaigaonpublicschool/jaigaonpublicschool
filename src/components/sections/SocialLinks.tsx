import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
// import FollowUs from './FollowUs';

const iconType = {
  header: "w-4 h-4",
  footer: "w-4 h-4 text-primary hover:text-secondary",
  followUs: "w-6 h-6 md:w-8 md:h-8 text-white hover:text-secondary"
} as const;

type IconType = keyof typeof iconType;

const SocialLinks = ({ type }: { type: IconType }) => {
  return (
    <ul className='flex gap-4'>
      <li className={type=="footer" ? " bg-white rounded-full p-2" :""}><FontAwesomeIcon icon={faFacebookF} className={iconType[type]}/></li> 
      <li className={type=="footer" ? " bg-white rounded-full p-2" :""}><FontAwesomeIcon icon={faTwitter} className={iconType[type]}/></li>   
      <li className={type=="footer" ? " bg-white rounded-full p-2" :""}><FontAwesomeIcon icon={faYoutube} className={iconType[type]}/></li>    
      <li className={type=="footer" ? " bg-white rounded-full p-2" :""}><FontAwesomeIcon icon={faInstagram} className={iconType[type]}/></li>    
    </ul>
  )
}

export default SocialLinks;