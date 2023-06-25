// Style your elements here
import styled from 'styled-components'

export const BgContainer1 = styled.div`
  height: 100vh;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   width: 50%;
`
// export const NotesContainer = styled.div`
//   //   width: 50%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   //   margin-bottom: 50px;
// `
export const Heading = styled.h1`
  color: #4c63b6;
  font-size: 23px;
  font-family: 'Bree Serif';
  margin-bottom: 40px;
  text-align: center;
`

export const Form = styled.form`
  padding: 20px;
  //   width: 50%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  //   box-shadow: 0px 4px 16px 4px #7b879416;
  //   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
  //   margin-left: 230px;
`
export const TitleInput = styled.input`
  outline: none;
  border-width: 0px;
  color: #475569;
  margin-bottom: 20px;
`
export const NotesInput = styled.textarea`
  outline: none;
  border-width: 0px;
  color: #475569;
`
export const Button = styled.button`
  background-color: #4c63b6;
  padding: 10px;
  border-radius: 5px;
  color: #ffffff;
  border-width: 0px;
  align-self: flex-end;
`

export const NotesList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  //   width: 50%;
`
export const NoNotesContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
`
export const NoNotesHeading = styled.h1`
  color: #334155;
  font-size: 20px;
`
export const Sentence = styled.p`
  color: #475569;
  font-size: 16px;
`
