  
import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, deleteTour}) => {
  const [readMore, setReadmore] = useState(false)
  return <article className="single-tour">
  <img src={image}alt={name}/>
  <footer>
    <div className="tour-info">
      <h4>{name}</h4>
      <h4 className='tour-price'>${price}</h4>
    </div>
    <p>{readMore ? info: `${info.substring(0,100)}....`}</p> 
    <button onClick={()=> setReadmore(!readMore)}>
      {readMore? 'show less': 'read more'}
    </button>
    <button className='delete-btn' onClick={()=> deleteTour(id)}>
      Remove Tour
    </button>
  </footer>
  </article>;
};

export default Tour;