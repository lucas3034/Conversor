import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Main } from './convJuros.js';
import { CompoundInterest } from './jurosComp.js';
import 'bootstrap/dist/css/bootstrap.css';


export function NoConvertorSelected() {
  return (
    <p>
      Choose Your Convertor
    </p>
  );
}

export function InterestSelected() {
  return (
    <div>
      <Main />
    </div>
  );
}

export function CompoundInterestSelected() {
  return (
    <div>
      <CompoundInterest />
    </div>
  );
}

export default function Home() {
  const [comp2Render, setComp2Render] = useState(0);

  return (
    <div>
      <header>
        <div class="container" />
        <div id="logo">
          <img src="logo.png" alt="texto" height="400" width="400" />
        </div>
      </header>
      <div class="containerCenter1">
        <div class="containerCenter2">
          <div id="menu">

            <div className="App">
              <button onClick={() => setComp2Render(1)}>Interest Converter</button>
              <button onClick={() => setComp2Render(2)}>Compound Interest Converter</button>
            </div>

          </div>
        </div>
      </div>
      <div id="principal">

        <div class="effect">

          <div class="container">

            <div>
              {comp2Render === 1 && (
                <InterestSelected />
              )}
              {comp2Render === 2 && (
                <CompoundInterestSelected />
              )}
              {comp2Render === 0 && (
                <NoConvertorSelected />
              )}
            </div>

          </div>
        </div>
      </div>
      <footer>Developed by Lucas Marinho</footer>
    </div>
  )
}



render(<Home />, document.getElementById('root'));