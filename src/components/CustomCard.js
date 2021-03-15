

import React, { useContext } from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'
import {useTheme} from '@material-ui/core/styles'
import { HistoryContext } from '../context/historyContext';
import { ThemeContext } from '../context/themeContext';
import { handleDelete } from '../utills/utills'
import { device } from '../utills/constants';


const CustomCard = ({theme}) => {
    const muiTheme = useTheme()
  const inlineTheme = useContext(ThemeContext).theme
  const inlineStyleMain = inlineTheme === 'light' ? '#fff' : '#363537';
  const inlineStyleSecondary= inlineTheme === 'light' ? '#363537' : '#fff';
  const { recent, setRecent } = useContext(HistoryContext)
  
  const deleteHistoryItem = (item) => {
    const newHistoryList = handleDelete([...recent], item)
    localStorage.setItem('history', JSON.stringify(newHistoryList));

    setRecent(newHistoryList)
  }
  const list = recent && recent.length ? [...recent].map(el => {
    const { num, date } = el
    return (<HistoryItem key={date} theme={muiTheme}>
      <StyledTypography style={{color:inlineStyleSecondary}} theme={muiTheme}>
        {num}
      </StyledTypography>
      <StyledTypography style={{color:inlineStyleSecondary}} theme={muiTheme}>
        {date}
      </StyledTypography>

      <DeleteButton style={{ color: inlineStyleSecondary }}
        aria-label="delete"
        onClick={() => { deleteHistoryItem(num) }}
      >
        <DeleteIcon />
      </DeleteButton>
    </HistoryItem>
    )
  }) : null;
  return (

  <>
  { list?.length ?
  <Wrapper>
<StyledCard style={{backgroundColor:`${inlineStyleMain }`,boxShadow:'none'}} >
  <StyledCardHeader gutterBottom variant="h5" component="h2" theme={theme}>
    Recent Inputs
      </StyledCardHeader>
  <StyledCardContent theme={muiTheme}>
    {list}
  </StyledCardContent>
</StyledCard></Wrapper> : null }
</>

  

);
}
export default CustomCard;


const StyledCardContent = styled.div`
display:flex;
flex-wrap:wrap;

  ${props => props.theme.breakpoints.down("xs")} {
   
    justify-content:center;
    font-size:0.75rem;
    margin-left:auto;
    margin-bottom: 20px;
    
  }

`
const Wrapper = styled.div`

`
const StyledTypography = styled(Typography)`
padding:0 2rem 0 1rem;
${props => props.theme.breakpoints.down("xs")} {
   padding-left:0.5rem;
 }
font-family: 'Trocchi', serif;
Font-weight:600;

`
const HistoryItem = styled.div`
display flex;
align-items:center;
background-color:#4db6ac;
margin-right:1rem;
margin-bottom:1rem;
border-radius:5px;
Font-weight:bold;


  ${props => props.theme.breakpoints.down("xs")} {
    justify-content:center;
    font-size:0.75rem;
    margin-bottom: 20px; 
  }

`
const DeleteButton = styled(IconButton)`
fill: "#2E444E";
`
const StyledCard = styled(Card)`
 margin:0 1rem;
font-size:44px;
  padding: 7px 14px;
`;

const StyledCardHeader = styled(Typography)`
color:${props=>props.theme.text};
@media only screen and ${device.mobileL}{
    text-align:center;
  }
`

