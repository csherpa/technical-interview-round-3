import React, { useEffect, useReducer, useRef } from 'react';
import './Cards.css';
import { apiData } from '../../api';
import SingleCard from '../SingleCard/SingleCard';
import { initialState, reducer } from './trainingProgramReducer';

const Cards = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let prevPageNumber = useRef(0);

  useEffect(() => {
    // prevPageNumber necessary due to strict mode in development
    if(prevPageNumber.current !== state.pageNumber) {
      prevPageNumber.current = state.pageNumber;
      apiData(state.pageNumber)
        .then((data) => {
          dispatch({
            type: 'loadMore',
            data: data
          })
        })
        .catch((err) => console.log(err, 'getCardInfo Err'));
    }
  }, [state.pageNumber]);

  return(
    <div>
      <div className ="cardInfo">
        {
          state.cardInfo.map((info) =>
            <SingleCard info={info} key={info._id}/>
          )
        }
      </div>
      <div id='cardButton'>
        {state.loadMore && <button className='button' onClick={() => dispatch({type: 'updatePage'})}>Load More</button>}
      </div>
    </div>
  );
};

export default Cards;