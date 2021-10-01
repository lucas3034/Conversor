import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Simples, Composto, Main } from './convJuros.js';
import { CompoundInterest } from './jurosComp.js';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { simp, compo, menu} from "./botoes.js";



export default function Home() {

return (
  <div>
    <header>
      <div class="container" />
      <div id="logo">
        <img src="logo.png" alt="texto" height="400" width="400" />
      </div>
    </header>
    <div class="containerCentro1">
      <div class="containerCentro2">
        <div id="menu">

          <form onSubmit={simp} class="esq">
          <button class="button" type="submit">
            Interest Converter
          </button>
          </form>
          <form onSubmit={compo} class="dir">
          <button class="button" type="submit">
            Compound Interest Converter
          </button>
          </form>
          
        </div>
      </div>
    </div>
    <div id="principal">

      <div class="efeito">

        <div class="container">
          
        <Main/>

        </div>
      </div>
    </div>
    <footer>Developed by Lucas Marinho</footer>
  </div>
)
}



render(<Home />, document.getElementById('root'));
