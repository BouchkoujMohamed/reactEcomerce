import { KeyboardArrowUp } from '@mui/icons-material'
import { Fab, useScrollTrigger, Zoom } from '@mui/material'

export default function ScrolToTop() {
  return (
    <Zoom in={useScrollTrigger()} onClick={()=>{
      window.scroll(0,0)
    }

    }>
        <Fab variant='extended' size='small' sx={{position:"fixed" ,bottom:33,right:33}} color="primary" aria-label="add">
        <KeyboardArrowUp fontSize="medium" />
        </Fab>
    </Zoom>
  )
}
