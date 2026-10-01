import{useState} from "react"
import "./App.css"
function App() {
  const[title,setTitle]=useState("")
  const[content,setContent]=useState("")
  const [notes,setNotes]=useState([])
  const [editId,setEditId]=useState(null);




  const addNote=()=>{
    if(content.trim()===""){
      alert("content is required");


      return;
    }
    const newNote={
      id:Date.now(),
      title:title,
      content:content
    };
    setNotes([...notes,newNote]);
    setTitle("");
    setContent("");
  };

const deleteNote=(id)=>{
  setNotes(notes.filter((note)=>note.id!==id));
};

const updateNote=()=>{
  setNotes(
    notes.map((note)=>note.id===editId?{...note,title:title,content:content}:note)
  );
setTitle("");
setContent("");
setEditId(null);
};

return(
  <div className="App">
  <h1>Notes App</h1>
  <div className="note-form">
  <input
type="text"
placeholder="enter title"
value={title}
onChange={(e)=>setTitle(e.target.value)}/>

<textarea
placeholder="Enter content"
value={content}
onChange={(e)=>setContent(e.target.value)}/>
<button onClick={editId?updateNote:addNote}>{editId?"Update Note":"Add Note"}</button>
</div>

<div className="notes">
{notes.map((note)=>(
  <div className="note" key={note.id}>
    <h2>{note.title}</h2>
    <p>{note.content}</p>
    <button onClick={()=>deleteNote(note.id)}>Delete</button>

    <button onClick={()=>{setEditId(note.id);setTitle(note.title);setContent(note.content);}}>Edit</button>
    </div>
))}
</div>
</div>
)
}
export default App