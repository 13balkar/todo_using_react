import React from "react";

function CreateArea(props) {

  const [note,changenote]=React.useState({
      title:"", content:""
  });

  function HandleClick(event){
    props.click(note);
    changenote({title:"", content:""});
    event.preventDefault();
  }
  function HandleChange(event){
    const {name,value}=event.target;
    changenote(prev =>{
        return {
            ...prev,
            [name]:value
        }
    } )
  }
  return (
    <div>
      <form >
        <input onChange={HandleChange} name="title" placeholder="Title" value={note.title} />
        <textarea  onChange={HandleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={HandleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
