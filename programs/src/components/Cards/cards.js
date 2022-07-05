import React, { useEffect, useReducer, useRef } from 'react';
import './styles.css';
import { apiData } from '../../api';
import SingleCard from '../SingleCard/SingleCard';
import { initialState, reducer } from '../../trainingProgramReducer';

const Cards = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let prevPageNumber = useRef(0);

  useEffect(() => {
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
      <h1>Card</h1>
      <div>
        {
          state.cardInfo.map((info, i) => {
            return (
              <div key={i}>
                <SingleCard info={info}/>
              </div>
            )
          })
        }
        <div>
          {state.loadMore && <button onClick={() => dispatch({type: 'updatePage'})}>Load More</button>}
        </div>
      </div>
    </div>
  );
};

export default Cards;