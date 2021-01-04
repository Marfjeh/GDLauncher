import React, { memo } from 'react';
import styled from 'styled-components';

const Logo = styled.svg`
  height: ${props => props.size || 40}px;
  -webkit-app-region: no-drag;
  * {
    transition: opacity 0.1s ease-in-out;
  }
 ${props =>
   !props.hover
     ? `&:hover {
    * {
      cursor: ${props.showPointerCursor ? 'pointer' : 'auto'};
      opacity: 0.9;
    } `
     : ``}
  }
`;

function BisectHosting({ size, showPointerCursor, onClick, hover }) {
  return (
    null
  );
}

export default memo(BisectHosting);
