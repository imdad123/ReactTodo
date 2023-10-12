import React from 'react'
import { List, ListItem, IconButton,ListItemText,Checkbox} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
const Todo = ({ todo,handleRemove,handleCompleted }) => {
    
    const { id, task, completed } = todo;

  return (


    <ListItem
          Key={ id}
      disableGutters
      secondaryAction={
        <IconButton aria-label="comment" onClick={()=>handleRemove(id)} >
          <CloseIcon/>
        </IconButton>
      }
      >
          <Checkbox onClick={()=>handleCompleted(id)}/>
          <ListItemText primary={`${task} `} style={completed ? {textDecoration:"line-through"} : {}}/>
        </ListItem>
      
  )
  }

  


export default Todo