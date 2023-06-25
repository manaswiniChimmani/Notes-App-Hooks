// Write your code here

import {NotesItem, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails
  return (
    <NotesItem>
      <Title>{title}</Title>
      <Note>{note}</Note>
    </NotesItem>
  )
}
export default NoteItem
