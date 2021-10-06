import React, { useState } from "react";
import { render } from "react-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from 'react-bootstrap/Table'
import './style.css';


function Row({ index, value }) {
  return (
    <tr>
      <td>
        {index + 1}
      </td>
      <td>
        {value}
      </td>
    </tr>
  );
}

function generator(months, interest, initial) {
  let rounds = 0;
  const list = []
  while (rounds < months) {
    initial = initial + (initial * interest / 100)
    list.push(initial)
    rounds++;
  }
  return list;
}

export function CompoundInterest() {
  const [initial, setInitial] = useState();
  const [months, setMonths] = useState();
  const [interest, setInterest] = useState();
  const [result, setResult] = useState();
  const [table, setTable] = useState([]);

  const calculate = () => {
    const parsedMonth = parseFloat(months) || 0;
    const parsedInterest = parseFloat(interest) || 0;
    const parsedInitial = parseFloat(initial) || 0;
    setTable(generator(parsedMonth, parsedInterest, parsedInitial));
  };

  return (
    <div>
      <form>
        <TextField
          label="initial value"
          variant="outlined"
          type="number"
          onChange={(e) => setInitial(e.target.value)}
        />
        <TextField
          label="Simple Monthly Interest"
          variant="outlined"
          type="number"
          onChange={(e) => setInterest(e.target.value)}
        />
        <TextField
          label="Number of months"
          variant="outlined"
          type="number"
          onChange={(e) => setMonths(e.target.value)}
        />


        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            calculate();
          }}
        >
          Calculate
        </Button>


        <br />
        <br />
        <div style={{ fontSize: "30px" }}>{result}</div>
      </form>
      <div class="container">
        <br />
        <br />
        <Table stripped bordered hover variant="dark" size="sm">
          <thead>
            <tr>
              <th>Months</th>
              <th>Interests</th>
            </tr>
          </thead>


          <tbody>
            {table.map((element, index) => {
              return (
                <tr key={index}>
                  <td>
                    {index + 1}
                  </td>
                  <td>
                    {element}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};