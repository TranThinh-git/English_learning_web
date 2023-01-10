import React from 'react'
import { useState } from 'react'
import './homeStyle.scss'
import WordsList from './WordsList'
import { v4 } from 'uuid'
import { useCallback } from 'react'

const Home = () => {
  const [wordsList, setWordList] = useState([]);
  const [textInput, setTextInput] = useState('');

  const onTextInputChange = useCallback((text) => {
    setTextInput(text.target.value);
  }, [])
  
  const onAddBtnClick = useCallback (() =>{
    if(textInput === '')
      window.alert('You didn\'t input anything')
    else
      setWordList([ { id: v4(), name : textInput}, ...wordsList]);
    setTextInput('')
  }, [textInput, wordsList])

  return (
    <div className='form'>
      <span>English Words</span>
      <div className='addWord'>
        <input 
          type = 'text' 
          placeholder='Input your english word'
          value={textInput}
          onChange={onTextInputChange}
          ></input>
        <button onClick={onAddBtnClick}>Add</button>
      </div>
      <WordsList wordsList = {wordsList}/>
    </div>
    
  )
}

export default Home