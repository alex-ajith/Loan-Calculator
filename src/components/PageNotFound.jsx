import React from 'react'
import { Box, Typography, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        textAlign="center"
        p={4}
      >
        <Typography variant='h1' color='primary' gutterBottom>
          404
        </Typography>
        <Typography variant='h5' gutterBottom>
          Sorry! Page Not Found
        </Typography>
        <Typography variant='body1' color='textsecondary2' mb={4}>
          The page you're looking for doesn't exist.
        </Typography>
        <Button variant="contained" color='primary' onClick={() => navigate('/')}>
          Go to Home
        </Button>
      </Box>
    </>
  )
}

export default PageNotFound
