import React, { useState, useEffect, useReducer } from 'react';
import './styles.css';
import { apiData } from '../../api';
import SingleCard from '../SingleCard/SingleCard';

const Cards = () => {
  const [cardInfo, setCardInfo] = useState([]);
  // useEffect(() => {
  //   apiData(pgnym)
  //     .then((data) => setCardInfo((prevData) => prevData.concat(data)))
  //     .catch((err) => console.log(err, 'getCardInfo Err'));
  // }, [pgnym]);

  useEffect(() => {
    apiData()
      .then((data) => setCardInfo((prevData) => prevData.concat(data)))
      .catch((err) => console.log(err, 'getCardInfo Err'));
  }, []);

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