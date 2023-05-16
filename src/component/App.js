import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from 'react';

function App(){

 
  const [noteItems, setNoteItems] = useState([]); 

  function addNote(newNote){
    setNoteItems((prevNotes)=>{
      return [...prevNotes,newNote];
    });
  }

  function deleteNote(id){
    setNoteItems((prevNotes)=> {
      return prevNotes.filter((noteItem, index)=>{
        return index !== id;
      })
    })
  }

  return(
    <div>
    <Header />
    <CreateArea clickHandler={addNote} />
    {noteItems.map((noteItem,index)=>{
      return (
        <Note 
          key={index}
          id={index} 
          title={noteItem.title} 
          content={noteItem.content}
          onDelete={deleteNote}
        />
      );
    })}
    
    <Footer />
  </div>
  );
}

export default App;
