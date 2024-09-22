import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  Typography
} from '@mui/material'
import { CardActions } from '@mui/material'
import { Button } from '@mui/material'

const CustomCard = ({ item, onDelete, onEdit }) => {
  // TODO: Desconstrucción o referencia a props
  // TODO: Completa onEdit
  return (
    <Card
      sx={{
        maxWidth: 375,
        backgroundColor: 'lightblue',
        color: 'black',
        marginBottom: 3
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography variant='h5' flex={1}>
            {item.title}
          </Typography>
          {/* Tenías description pero la propiedad es describe */}
          <Typography variant='body2'>{item.describe}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary' onClick={() => onEdit(item)}>
          editar
        </Button>
        <Button size='small' color='primary' onClick={() => onDelete(item._id)}>
          eliminar
        </Button>
      </CardActions>
    </Card>
  )
}

export default CustomCard
