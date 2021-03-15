
import styled, { ThemeProvider } from 'styled-components'
import Form from './components/Form.js';
import React from 'react';
import Text from './components/Text'
import CustomCard from './components/CustomCard'
import Button from './components/Button'
import { lightTheme, darkTheme } from './styles/theme';
import { ThemeContext } from './context/themeContext'
import { GlobalStyles } from './styles/global'


function App() {

  const {theme,toggleTheme} = React.useContext(ThemeContext)
  return (

    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
    <AppContainer>
    <Container>
      <Form/>
      <Text/>
    </Container>
    <CustomCard/>
    <ButtonWrapper>
    <Button value={theme === 'light' ? `Dark Mode` : 'Light Mode'} onclick={()=>{toggleTheme()}} position/>
    </ButtonWrapper>
    
    </AppContainer>
    </>
    </ThemeProvider>
    
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
