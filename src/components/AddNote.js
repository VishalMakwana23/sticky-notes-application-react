import { useState } from 'react'

const AddNote = ({ addNote }) => {
  const [noteText, setNoteText] = useState('')
  const characterLimit = 200

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value)
    }
  }

  const handleClick = () => {
    if (noteText.trim().length > 0) {
      addNote(noteText)
    }
    setNoteText('')
  }

  return (
    <div className='note new'>
      <textarea
        cols='10'
        rows='8'
        value={noteText}
        placeholder='Type to add a note..'
        onChange={handleChange}
      ></textarea>
      <div className='note-footer'>
        <small>{} Remaining</small>
        <button onClick={handleClick} className='save'>
          Save
        </button>
      </div>
    </div>
  )
}

export default AddNote
