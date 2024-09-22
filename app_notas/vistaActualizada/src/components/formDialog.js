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

/*
const useStyles = makeStyles((theme) => ({

    fab:{
        position: 'fixed',
        bottom: theme.spacing(2),
        right:theme.spacing(2),
    }


}));fallo en la interfaz, se torna a blanco*/

export default function FormDialog ({ onSubmit }) {
  // TODO: Debes hacer deconstrucción de props o referenciar al objeto props.onSubmit

  const [open, setOpen] = useState(false)
  const [note, setNote] = useState('')
  const [title, setTitle] = useState('')
  /*const classes = useStyles();lo mismo*/

  const handleTitle = event => {
    setOpen(true)
    setTitle(event.target.value)
  }

  const handleClickOpen = event => {
    setOpen(true)
    setNote(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
    onSubmit(title, note)
    setOpen(false)
  }

  return (
    <div /*className={classes.fab}lo mismo*/>
      <Fab color='primary' aria-label='add' onClick={handleClickOpen}>
        <AddIcon />
      </Fab>

      <Dialog maxWidth='sm' fullWidth={true} open={open} onClose={handleClose}>
        <DialogTitle id='form-dialog-title'>Añadir una nota</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para añadir una nota, escriba aquí.
          </DialogContentText>

          <TextField
            onChange={e => setTitle(e.target.value)} // TODO: Mantienes string, no objeto
            margin='dense'
            id='name'
            label='title'
          ></TextField>

          <TextField
            onChange={e => setNote(e.target.value)} // TODO: Mantienes string, no objeto
            margin='dense'
            id='description'
            label='Descripción'
          ></TextField>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            cancelar
          </Button>
          <Button onClick={handleSubmit} color='primary'>
            añadir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
