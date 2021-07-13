import React from 'react';
// import styled from 'styled-components';

// const LoaderContainer = styled.div`
//   width: 100%;
//   position: relative;
//   z-index: 9;
//   img {
//     position: absolute;
//     top: 0;
//     left: 50%;
//     transform: translate(-50%, 50%);
//   }
// `;

const Loader = ({ view }) => {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        zIndex: '9'
      }}
    >
      <img
        src="/static/YrMx-Spin-1s-200px.gif"
        alt="loader"
        style={{
          width: '100px',
          height: '100px',
          position: 'absolute',
          top: `${view === 'main' ? '250px' : 0}`,
          left: '50%',
          transform: 'translate(-50%, 50%)'
        }}
      />
    </div>
  );
};

export default Loader;
