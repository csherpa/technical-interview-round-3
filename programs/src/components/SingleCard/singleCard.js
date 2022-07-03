import React from "react";
import './styles.css';

const SingleCard = ({ info }) => {
  // console.log(info, 'SingleCardInfo')
  return (
    <div>
      <div className="card">
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