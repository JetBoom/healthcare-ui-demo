import {
  Box,
  Typography,
  Modal as MUIModal,
} from '@material-ui/core'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
}

export default function Modal({ title, children, open, onClose }) {
  return (
    <MUIModal
      open={open}
      onClose={onClose}
    >
      <Box sx={style}>
        <Typography variant="h6">{title}</Typography>

        {children}
      </Box>
    </MUIModal>
  )
}
