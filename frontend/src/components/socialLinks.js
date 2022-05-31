import React from 'react';

import { images } from '../constants'

const SocialLinks = () => {
   return (
      <div className='app__social-icons'>
      {[
         {link:'https//:t.me/its_solveable',icon:'telegram'},
         {link:'https://www.facebook.com/ternenge.samuel.52',icon:'facebook'},
         {link:'https://twitter.com/TernengeEmmanu1',icon:'twitter'},
         {link:'https://wa.me/+2349013089948',icon:'whatsapp'}
         ].map(item=>{
            return (
         <a key={item.icon} id={item.icon} href={item.link}>
            <img src={images[item.icon]} alt={item.icon} />
         </a>
         )
         })}
      </div>
   )
}

export default SocialLinks;
