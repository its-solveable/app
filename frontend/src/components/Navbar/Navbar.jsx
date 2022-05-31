import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';


import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className='app__banner'>
         <img src={images.banner} alt='banner'/>
      </div>
         <div className='app__nav-links'>
            {['home','about','skills','work','contact'].map((item)=>{
              return (
             <li key={item}>
               <a href={`#${item}`}>
                  {item}
               </a>
            </li>
            )
            })}
         </div>
         
         <div className='app__nav-menu'>
            <HiMenuAlt4 onClick={()=>setToggle(true)}/>
            
            <div className={`app__menu-list ${toggle ? 'active' : ''}`}>
               <HiX onClick={()=>setToggle(false)}/>
               
                {['home','about','skills','work','contact'].map((item)=>{
              return (
             <li key={item}>
               <a href={`#${item}`} onClick={()=>setToggle(false)}>
                  {item}
               </a>
            </li>
            )
            })}
            
            </div>
         </div>
    </nav>
  );
};

export default Navbar