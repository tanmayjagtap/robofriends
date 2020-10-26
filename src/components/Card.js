import React from 'react';
import './Card.css';

const Card = ({name,id,email})=>{
    //const{name,id,email}=props; //---destructuring or you can do it as done in the above line
    return(
        <div className='shadow-5 dib br-2 grow ma2 pa3 tc pointer bg'>
            <img src={`https://robohash.org/${id}`} alt='robots'></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;