import React, { Fragment, useState, useContext, useEffect } from 'react';
import styled from 'styled-components'
import { NumberContext } from '../context/numberContext';
import { HistoryContext } from '../context/historyContext';
import Button from './Button'
import { setQueue } from '../utills/utills'
import { device } from '../utills/constants';
const numWords = require('num-words')

const Form = ({theme}) => {

    const [input, setInput] = useState("")
    
    const { setWordingNumber } = useContext(NumberContext)
    const {recent,setRecent} =  useContext(HistoryContext)

    const handleChange = (e) => {
        const { value } = e.target;
        setInput(value)
        
        const activeList = [...recent].filter(el => {
            return (el.toString().includes(value.toString()))
        }

        )

        setRecent(activeList)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setWordingNumber(numWords(input))
        const list = setQueue(recent, {num:input,date:(new Date()).toISOString()})
        localStorage.setItem('history', JSON.stringify(list));
        setInput("")


    }
    

    useEffect(() => {
        const history = localStorage.getItem('history');
        if (history?.length) {
            setRecent(JSON.parse(history))
        }

    }, [input,setRecent])


    return (
        <Fragment>
            <MainForm >
               
                    <Input type="number" value={input}
                        placeholder="please enter a number"

                        onChange={(e) => { handleChange(e) }}
                        theme={theme}

                    />
                   
                   <ButtonWrapper><Button  value="submit" onclick={(e) => { handleSubmit(e) }}  /></ButtonWrapper> 
            </MainForm>
            
        </Fragment>
    )
}


const Input = styled.input`
cursor:initial;
::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
border-radius: 3px;
padding: 0.5rem 1rem;
font-family: 'Trocchi', serif;
font-size: 20px;
border: 2px solid ${props=>props.theme.toggleBorder};
background:${props=>props.theme.toggleBorder}
color:${props=>props.theme.text}
}
`

const MainForm = styled.form`
display:flex;
margin:1rem;
align-items:center;
@media only screen and ${device.mobileL}{
   
    
  }
`

const ButtonWrapper = styled.div`
float:right;

`




export default Form
