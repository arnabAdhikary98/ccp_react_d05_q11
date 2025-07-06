import React from 'react';

function BottomMainRight({ name }) {
  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px dashed gray' }}>
      <h3>Bottom Main Right</h3>
      <p>User Name: <strong>{name || 'No name entered'}</strong></p>
    </div>
  );
}

export default BottomMainRight;
