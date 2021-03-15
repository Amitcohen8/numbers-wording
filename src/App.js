
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
    <Container>
      <Form/>
      <Text/>
    </Container>
    <CustomCard/>
    <Button value={theme === 'light' ? `Dark Mode` : 'Light Mode'} onclick={()=>{toggleTheme()}} position/>
    </>
    </ThemeProvider>
    
  );
}

const Container = styled.div`
display:flex;
align-items:center;
flex-wrap:wrap;
`

export default App;
