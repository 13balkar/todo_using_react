import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,addnotes]=React.useState([]);
  function add(note){
    addnotes(prev =>{
        return [...prev,note];
    })
  }
  function Delete(id){
    addnotes(prev =>{
        return  prev.filter((item,index)=>{
            return index!==id;
        });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea click={add}/>
      { notes.map( (item,index)=>{
          return <Note id={index} title={item.title} content={item.content} del={Delete}/>
      } ) }
      
      <Footer />
    </div>
  );
}

export default App;
