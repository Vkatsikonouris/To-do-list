import './App.css';
import React, { useState } from 'react';


function TodoList () {
  const [todos, setTodos] = useState([]);//μεταβλητη todos
  const [inputValue, setInputValue] = useState('');
  let [number,update]=useState(0);
  const [errormessage,setmassege]=useState('')
  //let number=0;

  function handleChange(e){ //
    //console.log(e.target.value);
    setInputValue(e.target.value)
  }
  
  function handleSubmit(e){
      e.preventDefault();
      {/*Check if the inputvalue is null  */}
      if(inputValue.trim() !== ''){
        setTodos([...todos, inputValue])
        setInputValue('')
        setupdate();
        setmassege('')
      }
      else{
        setmassege("The input is null!");
      }
      
      
  }
  function setupdate(){
    update(number+1);
  }

  function handleDelete(index){
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="App">
    <h1 >This is my to do list</h1>
      <form>
      {number===0 && <p className="zero">Items in TodoList :{number}</p>}{/*Συνθίκη ανάλογα με την τιμή του αριθμού*/}
      {number===1 && <p className="notzero">Items in TodoList :{number}</p>}
      {number===2 && <p className="big">Items in TodoList :{number}</p>}
      {number>2 && <p className="vbig">Items in TodoList :{number}</p>}
        <input className="text" type='text' value={inputValue} onChange={handleChange} />
        <button className="button2"onClick={handleSubmit}>Add</button>
        {errormessage && <p className="error">{errormessage}</p>}
      </form>
      <ul>
      {todos.map((todo, index) => (
          <li key={index}>{todo}
          <button className="button" onClick={() =>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
