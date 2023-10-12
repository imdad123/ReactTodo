import React, { useState } from 'react'
import { Button, TextField,Alert } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';
const TodoForm = ({addtodo}) => {
    const [inputtodo, setInputtodo] = useState();
    const handleFormsubmit = (e) => {
        e.preventDefault();
        if(!inputtodo) return (<Alert severity="error">Add Todo Task</Alert>)
        let todo = {
            id: uuidv4(),
            task: inputtodo,
            completed: false
        };
        addtodo(todo);

    }
  return (
      <div>
          { !inputtodo && <Alert severity="error">Add Todo Task</Alert>}
          <form onSubmit={handleFormsubmit}>
            <TextField id="standard-basic" label="Todo" variant="standard" onChange={(e)=>setInputtodo(e.target.value)} />
              <Button variant="outlined" type="submit">Add Todo</Button>
          </form>
    </div>
  )
}

export default TodoForm