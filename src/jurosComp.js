import React, { useState } from "react";
import { render } from "react-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export function CompoundInterest(){
  const [initial, setInitial] = useState();
  const [months, setMonths] = useState();
  const [interest, setInterest] = useState();
  const [result, setResult] = useState();

  const calculate = () => {
    const result = initial * Math.pow(1 + interest, months);
    setResult(result.toFixed(2));
  };

  return (

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40vh",
        }}
      >
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
            onChange={(e) => setInterest(e.target.value / 100)}
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
          <div style={{ fontSize: "30px" }}>${result}</div>
        </form>
      </div>
  );
};

