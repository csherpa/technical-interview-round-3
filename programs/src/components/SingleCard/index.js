import React from "react";
import './styles.css';

const SingleCard = ({ info }) => {
  console.log(info, 'SingleCardInfo')
  return (
    <div>
    <div class="card">
      <img src={info.image.cloudinaryURL} alt="Program Img" style={{width: '100%'}}/>
      <div class="container">
        <h4><b>Program Name:{info.name}</b></h4>
        <p>Institution Name: {info.institution.name}</p>
        <p>Program type: {info.programType}</p>
      </div>
    </div>
    </div>
  )
}

export default SingleCard;