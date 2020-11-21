import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Img1 from '../Images/winding.jpg';
import Img2 from '../Images/form.jpg';
import Img3 from '../Images/tending.png';

function Cards(props) {
  return (
    <div className='cards'>
     
     
      <div className='cards__container'>
     
  
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src={Img1}
              text='Winding Application'
             
              path='/winding'
            />
            <CardItem
              src={Img2}
              text='Forming Application'
             
              path='/forming'
            />
          
          
            <CardItem
              src={Img3}
              text='Machine Tending'
              
              path='/tending'
            />
            
           </ul>
           
        </div>
      </div>
    </div>
  );
}

export default Cards;