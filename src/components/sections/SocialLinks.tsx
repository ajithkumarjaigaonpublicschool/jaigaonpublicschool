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
      <li className={type=="footer" ? " bg-white rounded-full p-2" :""}>
        <a href='https://www.facebook.com/profile.php?id=100063838244783' className='hover:cursor-pointer'>
          <FontAwesomeIcon icon={faFacebookF} className={iconType[type]}/>
        </a>
      </li> 
      {/* <li className={type=="footer" ? " bg-white rounded-full p-2" :""}>
        <a href='' className='hover:cursor-pointer'>
            <FontAwesomeIcon icon={faTwitter} className={iconType[type]}/>
          </a>
        </li>    */}
      <li className={type=="footer" ? " bg-white rounded-full p-2" :""}>
        <a href='https://www.youtube.com/@JaigaonPublicSchool' className='hover:cursor-pointer'>
          <FontAwesomeIcon icon={faYoutube} className={iconType[type]}/>
        </a>
      </li>    
      <li className={type=="footer" ? " bg-white rounded-full p-2" :""}>
        <a href='https://www.instagram.com/jaigaonpublicschool?igsh=dTdseGt2Z2l5bTBn' className='hover:cursor-pointer'>
          <FontAwesomeIcon icon={faInstagram} className={iconType[type]}/>
        </a>
      </li>    
    </ul>
  )
}

export default SocialLinks;