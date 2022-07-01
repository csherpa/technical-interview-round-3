import React, { useState, useEffect } from 'react';
import './styles.css';
import { apiData } from '../../api';
import SingleCard from '../SingleCard';

const Cards = () => {
  const [cardInfo, setCardInfo] = useState([]);

  const getCardInfo = () => {
    apiData()
      .then((data) => setCardInfo(data))
      .catch((err) => console.log(err, 'getCardInfo Err'));
  }
  useEffect(() => {
    getCardInfo();
  }, [])

  return(
    <div>
      <h1>Card</h1>
      <div>
        {
          cardInfo.map((info, i) => {
            return (
              <div key={i}>
                <SingleCard info={info}/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Cards;