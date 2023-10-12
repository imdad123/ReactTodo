import React from 'react'
import { List, ListItem, IconButton, ListItemText } from '@mui/material'
import Todo from './Todo'
const TodoList = ({ todos,handleRemove,handleCompleted }) => {
    console.log(todos)
  return (
      <div>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {todos.map((todoitem) => (
                  <Todo todo={todoitem} key={todoitem.id} handleRemove={() => handleRemove(todoitem.id)} handleCompleted={ ()=>handleCompleted(todoitem.id)} />
              )) }
        </List>
    </div>
  )
}

export default TodoList