
import React from 'react';

function Signature({ color }) {
  return (
    <div
      style={{
        position: "fixed",
        right: "10px",
        bottom: "10px",
        fontSize: "1em",
        color: color,
        zIndex: -1,
        filter: "blur(1px)",
      }}
    >
      by Julian Stravitz
    </div>
  );
}

export default Signature;