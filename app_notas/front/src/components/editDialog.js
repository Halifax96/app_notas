import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  makeStyles,
  TextField
} from '@mui/material'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { useEffect } from 'react'

/*
const useStyles = makeStyles((theme) => ({

    fab:{
        position: 'fixed',
        bottom: theme.spacing(2),
        right:theme.spacing(2),
    }


}));fallo en la interfaz, se torna a blanco*/

export default function EditDialog ({
  // TODO: Debes hacer deconstrucción de props o referenciar al objeto props.onSubmit

  onSubmit,
  open,
  onClose,
  title: noteTitle,
  describe,
  ...rest
}) {
  const [note, setNote] = useState(describe) // TODO: Define estado con lo que venga por props
  const [title, setTitle] = useState(noteTitle) // TODO: Define estado con lo que venga por props

  /*const classes = useStyles();lo mismo*/

  const handleTitle = event => {
    onClose(true)
    setTitle(event.target.value)
  }

  const handleClose = () => {
    onClose(false)
  }

  const handleSubmit = () => {
    onSubmit(title, note)
    onClose(false)
  }

  return (
    <Dialog maxWidth='sm' fullWidth={true} open={open} onClose={handleClose}>
      <DialogTitle id='form-dialog-title'>Edite la nota</DialogTitle>
      <DialogContent>
        <DialogContentText>Edite los valores de su nota</DialogContentText>

        <TextField
          onChange={e => setTitle(e.target.value)} // TODO: Mantienes string, no objeto
          value={title}
          margin='dense'
          id='name'
          label='title'
        ></TextField>

        <TextField
          onChange={e => setNote(e.target.value)} // TODO: Mantienes string, no objeto
          margin='dense'
          value={note}
          id='description'
          label='Descripción'
        ></TextField>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          cancelar
        </Button>
        <Button onClick={handleSubmit} color='primary'>
          actualizar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
