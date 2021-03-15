

import React,{useContext} from 'react';
import styled from 'styled-components';
import { NumberContext } from '../context/numberContext';


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

`
export default Text;
