import React from 'react';
import MainLeft from './MainLeft';
import MainRight from './MainRight';

function Main({ name }) {
  return (
    <div style={{ display: 'flex', marginTop: '20px' }}>
      <MainLeft />
      <MainRight name={name} />
    </div>
  );
}

export default Main;
