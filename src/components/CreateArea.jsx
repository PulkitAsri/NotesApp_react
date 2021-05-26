import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded,setisExpanded] =useState(false);

  const expand =()=>setisExpanded(true);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevItem) => {
      return { ...prevItem, [name]: value };
    });

    console.log(note);
  }
  return (
    <div>
      <form 
      className="create-note"
      onSubmit={(event) => event.preventDefault()}>

        {isExpanded&&<input
          value={note.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />}

        <textarea
          value={note.content}
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded?3:1}
        />
        <Zoom in={isExpanded?true:false}>
          <Fab size="medium"
            onClick={() => {
              props.onButtonClick(note);
              setNote({ title: "", content: "" });
            }}
          >
          <AddIcon/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
