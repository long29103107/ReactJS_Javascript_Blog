import React from 'react';
import './Loader.css';

export default function Loader() {
  return (
    <div className="loader">
      <span className="loader__ball loader__ball--1" />
      <span className="loader__ball loader__ball--2" />
      <span className="loader__ball loader__ball--3" />
    </div>
  );
}
