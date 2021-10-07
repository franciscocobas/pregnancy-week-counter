import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './styles/global.scss';

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
  const [remainingDays, setRemainingDays] = useState<number>();

  useEffect(() => {
    // 13/06/2021

    const conceptionDate = new Date('2021-06-13T06:00:00');
    const estimatedBirthDate = new Date('2022-03-26T06:00:00');
    const today = new Date();
    const difference = today.getTime() - conceptionDate.getTime();
    const weeksNumber = difference / (1000 * 60 * 60 * 24 * 7);
    const differenceRemainingDays =
      estimatedBirthDate.getTime() - today.getTime();
    const tmpRemainingDays = differenceRemainingDays / (1000 * 60 * 60 * 24);

    setWeeks(Math.floor(weeksNumber).toString());
    setRemainingDays(Math.floor(tmpRemainingDays));
  }, []);

  return (
    <StyledHomePageComponent>
      <h1>Semanas de embarazo</h1>
      <p>🤰🏻</p>
      <p>{weeks}</p>
      <div className='estimation-birth-date'>
        <h2>Fecha estimada de nacimiento:</h2>
        <p>26/03/2022</p>
        <h3>Días restantes:</h3>
        <p>{remainingDays}</p>
      </div>
    </StyledHomePageComponent>
  );
}

export default App;
