import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import './style.css';

// Simple Convertor

function convertToMonthlySimple(annualValueSimple) {
  return (annualValueSimple / 12);
}

function convertToAnnualSimple(monthlyValueSimple) {
  return (monthlyValueSimple * 12);
}

function ConverterInput({ label, amount, onChange }) {
  return (
    <>
      <label labelfor={label}>
        <input
          id={label}
          name={label}
          type="number"
          value={amount}
          onChange={onChange}
        />
        {label}

      </label>
    </>
  );
}

ConverterInput.propTypes = {
  label: propTypes.number,
  amount: propTypes.number,
  onChange: propTypes.number,
};

ConverterInput.defaultProps = {
  label: 1,
  amount: 2,
  onChange: 5,
};

export function Simple() {
  const [monthlySimple, setMonthlySimple] = useState(0);

  const onChange = (evt) => {
    const value = parseFloat(evt.target.value) || 0;

    if (evt.target.name === ' Simple Monthly Interest ') {
      setMonthlySimple(value);
    } else if (evt.target.name === ' Simple Annual Interest  ') {
      setMonthlySimple(convertToMonthlySimple(value));
    }
  };

  return (
    <div className="bar1">
      <ConverterInput
        label=" Simple Annual Interest  "
        amount={convertToAnnualSimple(monthlySimple)}
        onChange={onChange}
      />
      <div className="bar2">
        <ConverterInput
          label=" Simple Monthly Interest "
          amount={monthlySimple}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

// Compound Convertor

function convertToMonthlyCompound(annualValueCompound) {
  const total = ((1 + (annualValueCompound / 100)) ** (1 / 12) - 1) * 100;
  return total; // .toFixed(2);
}

function convertToAnnualCompound(monthlyValueCompound) {
  const total2 = ((1 + (monthlyValueCompound / 100)) ** 12 - 1) * 100;
  return total2; // .toFixed(2);
}

export function Compound() {
  const [monthlyCompound, setMonthlyCompound] = useState(0);

  const onChange = (evt) => {
    const value = parseFloat(evt.target.value) || 0;

    if (evt.target.name === ' Compound Monthly Interest ') {
      setMonthlyCompound(value);
    } else if (evt.target.name === ' Compound Annual Interest ') {
      setMonthlyCompound(convertToMonthlyCompound(value));
    }
  };

  return (
    <div className="bar1">
      <ConverterInput
        label=" Compound Annual Interest "
        amount={convertToAnnualCompound(monthlyCompound)}
        onChange={onChange}
      />
      <div className="bar2">
        <ConverterInput
          label=" Compound Monthly Interest "
          amount={monthlyCompound}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export function Main() {
  return (

    <div>
      <h1>Interest Converter</h1>
      <br />
      <Simple />
      <br />
      <hr />
      <br />
      <br />
      <Compound />
    </div>
  );
}
