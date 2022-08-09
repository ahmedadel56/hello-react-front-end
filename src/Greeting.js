import React from 'react';
import { useSelector } from 'react-redux';

export default function Greeting() {
  const message = useSelector((state) => state.messageReducer.message);
  return (
    <>
      <div>
        this is Greeting Component
        {' '}
        <br />
        {message}
      </div>
    </>
  );
}
