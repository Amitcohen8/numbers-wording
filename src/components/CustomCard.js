

import React, { useContext } from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'
import { HistoryContext } from '../context/historyContext';
import { handleDelete } from '../utills/utills'

const CustomCard = () => {
  
  const { recent, setRecent } = useContext(HistoryContext)
  
  const deleteHistoryItem = (item) => {
    const newHistoryList = handleDelete([...recent], item)
    localStorage.setItem('history', JSON.stringify(newHistoryList));

    setRecent(newHistoryList)
  }
  const list = recent && recent.length ? [...recent].map(el => {
    const { num, date } = el
    return (<HistoryItem key={date}>
      <StyledTypography >
        {num}
      </StyledTypography>
      <StyledTypography >
        {date}
      </StyledTypography>

      <DeleteButton 
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
<StyledCard style={{backgroundColor:`#fff`,boxShadow:'none'}} >
  <StyledCardHeader gutterBottom variant="h5" component="h2" >
    Recent Inputs
      </StyledCardHeader>
  <StyledCardContent>
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


`
const Wrapper = styled.div`

`
const StyledTypography = styled(Typography)`
padding:0 2rem 0 1rem;
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
color:'black';
`

