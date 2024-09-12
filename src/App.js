import { useState } from 'react'
import './App.css'
import NotesList from './components/NotesList'
import { nanoid } from 'nanoid'

function App() {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: 'First Note', date: '12/05/2024' },
    { id: nanoid(), text: 'Second Note', date: '13/05/2024' },
    { id: nanoid(), text: 'Third Note', date: '14/05/2024' },
    { id: nanoid(), text: 'Fourth Note', date: '15/05/2024' },
    { id: nanoid(), text: 'Fifth Note', date: '16/05/2024' },
    { id: nanoid(), text: 'Sixth Note', date: '17/05/2024' },
  ])

  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <div className='container'>
      <NotesList notes={notes} addNote={addNote} deleteNote={deleteNote} />
    </div>
  )
}

export default App
