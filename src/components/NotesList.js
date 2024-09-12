import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NotesList = ({ notes, addNote, deleteNote }) => {
  return (
    <div className='notes-list'>
      {notes.map((note) => {
        return <Note key={note.id} {...note} deleteNote={deleteNote} />
      })}
      <AddNote addNote={addNote} />
    </div>
  )
}

export default NotesList
