// Write your code here
import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  BgContainer1,
  //   NotesContainer,
  Heading,
  Form,
  TitleInput,
  NotesInput,
  Button,
  NotesList,
  NoNotesContainer,
  Image,
  NoNotesHeading,
  Sentence,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => setTitle(event.target.value)

  const onChangeNote = event => setNote(event.target.value)

  const onAddNotes = event => {
    event.preventDefault()
    const newNotes = {id: uuidv4(), title, note}
    setNotesList(prevState => [...prevState, newNotes])

    setTitle('')
    setNote('')
  }

  return (
    <BgContainer1>
      {/* <NotesContainer> */}
      <Heading>Notes</Heading>
      <Form onSubmit={onAddNotes}>
        <TitleInput
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="Title"
        />
        <NotesInput
          value={note}
          rows="6"
          onChange={onChangeNote}
          placeholder="Take a Note..."
        />
        <Button type="submit">Add</Button>
      </Form>

      {notesList.length > 0 ? (
        <NotesList>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} noteDetails={eachNote} />
          ))}
        </NotesList>
      ) : (
        <NoNotesContainer>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNotesHeading>No Notes Yet</NoNotesHeading>
          <Sentence>Notes you add will appear here</Sentence>
        </NoNotesContainer>
      )}
      {/* </NotesContainer> */}
    </BgContainer1>
  )
}
export default Notes
