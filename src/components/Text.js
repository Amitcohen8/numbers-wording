

import React,{useContext} from 'react';
import styled from 'styled-components';
import { NumberContext } from '../context/numberContext';
import { device } from '../utills/constants';

const Text = () => {
const {wordingNumber} =  useContext(NumberContext)
  return (
   
      <Wording>{wordingNumber ? wordingNumber : ""}</Wording>
    
  );
}

const Wording = styled.div`
font-size:1.5rem;
margin-left:1rem;
letter-spacing: 3px;
@media only screen and ${device.mobileL}{
    text-align:center;
    margin: 1rem;
  }
`
export default Text;
