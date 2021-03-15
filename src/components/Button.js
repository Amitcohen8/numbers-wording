

import React from 'react'
import styled from 'styled-components'


const Button = ({value,children,onclick,position}) => {

  return (
      <>
   <label>{children}</label>
      <CustomButton type="button" value={value} onClick={onclick} position={position} />
      </>
    
  );
}

const CustomButton = styled.input`
border-radius: 3px;
padding: 0.5rem 1rem;
margin-left:1rem;
cursor:pointer;
font-family: 'Trocchi', serif;
font-size: 20px;
position: ${props => props.position ? 'fixed' : 'static'};
bottom: ${props => props.position ? '1rem' : 'auto'};
right: ${props => props.position ? '2rem' : 'auto'};
`
export default Button;
