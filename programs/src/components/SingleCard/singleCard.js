import React from "react";
import './SingleCard.css';

const SingleCard = ({ info }) => {
  // console.log(info, 'SingleCardInfo')
  return (
    <div className="cards-content">
      <div className="cards">
        <img src={info.image.cloudinaryURL} alt="Program Img"  data-testid="background" style={{width: '100%'} }/>
        <div className="container">
          <h4>Program Name: {info.name}</h4>
          <p>Institution Name: {info.institution.name}</p>
          <p>Program type: {info.programType}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleCard;