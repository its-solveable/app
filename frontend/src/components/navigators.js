import React from 'react';

const Navigators =({active}) =>{
   console.log(active);
   return (
      <div className='app__navigators'>
      {['home','about','skills','work','testimonial','contact'].map((item,index)=>{return(
         <a href={`#${item}`}
         className={active === item ? 'active':''}
         >
            {index + 1}
         </a>
      )})}
      </div>
   );
}

export default Navigators;