
import styled from 'styled-components'
import Form from './components/Form.js';
import React from 'react';
import Text from './components/Text'
import CustomCard from './components/CustomCard'
import Button from './components/Button'
import { GlobalStyles } from './styles/global'


function App() {

  
  return (

   
      <>
      <GlobalStyles/>
    <AppContainer>
    <Container>
      <Form/>
      <Text/>
    </Container>
    <CustomCard/>
    <ButtonWrapper>
    <Button position/>
    </ButtonWrapper>
    
    </AppContainer>
    </>
   
    
  );
}

const Container = styled.div`
display:flex;
align-items:center;
flex-wrap:wrap;
`

const ButtonWrapper = styled.div`

`
const AppContainer = styled.div`

`
export default App;
