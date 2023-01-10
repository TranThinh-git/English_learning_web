import React from 'react'
import Words from './Words'

function WordsList({ wordsList }) {
  return (
    <div>
        {wordsList.map((word) => (
            <Words key={word.id} word = {word} />
        ))}
    </div>
  )
}

export default WordsList