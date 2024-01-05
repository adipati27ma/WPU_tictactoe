/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';

export default function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
