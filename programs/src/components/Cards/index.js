import React, { useState, useEffect } from 'react';
import './styles.css';
import { apiData } from '../../api';

const Cards = () => {
  const [cardInfo, setCardInfo] = useState([]);

  const getCardInfo = () => {
    apiData()
      .then((data) => setCardInfo(data))
      .catch((err) => console.log(err, 'getcardInfo Err'));
  }
  useEffect(() => {
    getCardInfo();
  }, [])

  return(
    <div>
      <h1>Card</h1>
      <div>
        {
          cardInfo.map((val) => {
            console.log(val, 'val');
          })
        }
      </div>
    </div>
  );
};

export default Cards;