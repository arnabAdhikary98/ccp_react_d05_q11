import React from 'react';
import BottomMainRight from './BottomMainRight';

function MainRight({ name }) {
  return (
    <div style={{ flex: 1, border: '1px solid gray', padding: '10px' }}>
      <h2>Main Right</h2>
      <BottomMainRight name={name} />
    </div>
  );
}

export default MainRight;
