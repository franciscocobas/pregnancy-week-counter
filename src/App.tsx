import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './styles/global.scss';

import nosotresImg from './images/nosotres.webp';

const StyledHomePageComponent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  h1,
  h2 {
    margin-bottom: 0;
  }
  p {
    margin: 0;
  }
  p:nth-child(2) {
    font-size: 5rem;
  }
  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin: 1rem 0;
    border: 3px solid black;
    box-shadow: 0 0 10px black;
  }
  p:nth-child(3) {
    font-size: 10rem;
    text-shadow: 2px 2px black;
    line-height: 1;
    background-color: var(--main-red);
    max-width: 300px;
    margin: 0 auto;
    color: white;
    padding-bottom: 1rem;
    border-radius: 10% 50% 10% 50% / 50% 10% 50% 10%;
  }
  .estimation-birth-date {
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem 0;
    h2,
    h3 {
      margin: 0;
      color: black;
      /* text-shadow: 1px 1px var(--main-red); */
    }
    p:last-child {
      color: black;
      font-size: 1.25rem;
      font-family: 'Yaldevi Light';
      font-style: italic;
    }
  }
`;

function App() {
  const [weeks, setWeeks] = useState<string>('');

  useEffect(() => {
    // 13/06/2021

    const conceptionDate = new Date('2021-06-13T06:00:00');
    const today = new Date();
    const difference = today.getTime() - conceptionDate.getTime();
    const weeksNumber = difference / (1000 * 60 * 60 * 24 * 7);

    setWeeks(Math.floor(weeksNumber).toString());
  }, []);

  return (
    <StyledHomePageComponent>
      <h1>Semanas de embarazo</h1>
      <img src={nosotresImg} alt='Nosotres ^^' />
      <p>{weeks}</p>
      <div className='estimation-birth-date'>
        <h2>Fecha estimada de nacimiento:</h2>
        <p>26/03/2022</p>
      </div>
    </StyledHomePageComponent>
  );
}

export default App;
