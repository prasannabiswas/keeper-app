import { useState } from "react";
import "./App.css";
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExpanded,setIsExpaded] = useState(false);

  const [note,setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const {value, name} = event.target;

    setNote((prevValue)=>{
      // if( name ==="title"){
      //   return {
      //     title: value,
      //     content: prevValue.content
      //   }
      // }else{
      //   return {
      //     title: prevValue.title,
      //     content: value
      //   }
      // }
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  function submitNote(event){
    props.clickHandler(note);
    setNote({
      title: "",
      content: ""
    });
    setIsExpaded(false);
    event.preventDefault();
  }

  function expand(){
    setIsExpaded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input 
          name="title" 
          placeholder="Title" 
          value={note.title}
          onChange={handleChange}
        />: null}
        <textarea 
          name="content" 
          placeholder="Take a note..." 
          onClick={expand}
          rows={isExpanded ? 3 : 1} 
          value={note.content} 
          onChange={handleChange}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}><AddTwoToneIcon/></Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
