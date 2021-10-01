import React, { useState } from 'react';
import { render } from 'react-dom';


//Convertor Simples


function convertToMensalSimples(valoranualSimples) {
  return (valoranualSimples / 12);
}

function convertToAnualSimples(valormensalSimples) {
  return (valormensalSimples * 12);
}

function ConverterInput({ label, valor, onChange }) {
  return (
    <>
      <label labelfor={label}>{label}</label>
      <input
        id={label}
        name={label}
        type="number"
        value={valor}
        onChange={onChange}
      />
    </>
  );
  
}


export function Simples() {

  const [mensalSimples, setMensalSimples] = useState(0);
  const [anualSimples, setAnualSimples] = useState(0);

  const onChange = (evt) => {
    const value = parseFloat(evt.target.value) || 0;

    if (evt.target.name === ' Simple Monthly Interest ') {
      setMensalSimples(value);
    } else if (evt.target.name === ' Simple Annual Interest ') {
      setMensalSimples(convertToMensalSimples(value));
    }
  }

  return (
    <div className="barra1">
      <ConverterInput
        label=" Simple Annual Interest "
        valor={convertToAnualSimples(mensalSimples)}
        onChange={onChange}
      />
    <div className="barra2">
    <ConverterInput
        label=" Simple Monthly Interest "
        valor={mensalSimples}
        onChange={onChange}
      />
    </div>
    </div>
  );
}

//Convertor Composto

function convertToMensalComposto(valoranualComposto) {
  const total = ((1 + (valoranualComposto / 100)) ** (1 / 12) - 1) * 100;
  return total; //.toFixed(2);
}

function convertToAnualComposto(valormensalComposto) {
  const total2 = ((1 + (valormensalComposto / 100)) ** 12 - 1) * 100;
  return total2; //.toFixed(2);
}

export function Composto() {
  const [mensalComposto, setMensalComposto] = useState(0);
  const [anualComposto, setAnualComposto] = useState(0);

  const onChange = (evt) => {
    const value = parseFloat(evt.target.value) || 0;

    if (evt.target.name === ' Compound Monthly Interest ') {
      setMensalComposto(value);
    } else if (evt.target.name === ' Compound Annual Interest ') {
      setMensalComposto(convertToMensalComposto(value));
    }
  }

  return (
    <div className="barra1">
      <ConverterInput
        label=" Compound Annual Interest "
        valor={convertToAnualComposto(mensalComposto)}
        onChange={onChange}
      />
    <div className="barra2">
      <ConverterInput
        label=" Compound Monthly Interest "
        valor={mensalComposto}
        onChange={onChange}
      />
      </div>
    </div>
  );
}

export function Main(){
  return(

  <div>
  <h1>Interest Converter</h1>
  <br />
  <Simples/>
  <br/>
  <hr />
  <br/>
  <br />
  <Composto/>
  </div>
  );
}