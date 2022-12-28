// libraries
import React from 'react';
// constants
import { serverData } from 'components/Credit/Calculator/config';

const shiftIndex = 1;

const getArrayFromServerData = (name: keyof { amount: number, term: number }) => serverData.map((obj) => obj[name]);

export const roundEnteredData = (e: React.ChangeEvent<HTMLInputElement>) => {
  const enteredNumber = Number(e.target.value);

  const valuesOfKeys = getArrayFromServerData(e.target.name as keyof { amount: number, term: number });

  valuesOfKeys.sort((a, b) => a - b);

  const maxValue = valuesOfKeys[valuesOfKeys.length - shiftIndex];

  if (enteredNumber >= maxValue) {
    return maxValue;
  }
  if (enteredNumber <= valuesOfKeys[0]) {
    return valuesOfKeys[0];
  }
  let closest = valuesOfKeys[0];

  valuesOfKeys.forEach((elem) => {
    if (Math.abs(elem - enteredNumber) <= Math.abs(closest - enteredNumber)) {
      closest = elem;
    }

    return elem;
  });

  return closest;
};

export const getOtherFieldFromServerData = (field: keyof { amount:number, term: number }, value: number) => {
  let otherField: number;

  serverData.forEach((elem) => {
    if (elem[field] === value) {
      Object.entries(elem).forEach(([key, v]) => {
        if (key !== field) {
          otherField = v;
        }
      });
    }
  });

  return otherField;
};
