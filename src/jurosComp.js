import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from 'react-bootstrap/Table';
import './style.css';

function generator(months, interest, initial) {
  let rounds = 0;
  const list = [];
  let valor = initial;
  while (rounds < months) {
    valor += (valor * interest) / 100;
    list.push(valor);
    rounds += 1;
  }
  return list;
}

function CompoundInterest() {
  const [initial, setInitial] = useState();
  const [months, setMonths] = useState();
  const [interest, setInterest] = useState();
  const [result] = useState();
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
        <div style={{ fontSize: '30px' }}>{result}</div>
      </form>
      <div className="container">
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
            {table.map((element, KeyId) => (
              <tr key={KeyId.id}>
                <td>
                  {KeyId + 1}
                </td>
                <td>
                  {element}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export { CompoundInterest as default };
