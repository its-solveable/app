import React from 'react';

import {Navigators, SocialLinks} from '../../components'

const AppWrap = (Component, cmp_id ,  cmp_style ) => function HOC() {
   return (
      <div id={cmp_id} key={cmp_id} className='app__container'>
            <Component />
         <div className='app__wrapper'>
         <SocialLinks />
         <div className='app__copyright'>
            <p>© 2022 ternenge </p>
            <p> All rights reserved </p>
         </div>
         <Navigators active={cmp_id} />
         </div>
      </div>
   );
}


export default AppWrap;