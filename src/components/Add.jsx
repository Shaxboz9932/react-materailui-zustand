import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ImageIcon from '@mui/icons-material/Image';
import AddHomeIcon from '@mui/icons-material/AddHome';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Add() {
  const [open, setOpen] = useState(false)

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
    borderRadius: '5px'
  };

  const UserBox = styled(Box) ({
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    alignItems: 'center'
  })

  return (
    <>
      <Tooltip onClick={() => setOpen(true)} title='Add' sx={{position: 'fixed', bottom: 22, left: {xs: 'calc(50% - 25px)', sm: '20px'}}}>
        <Fab color='primary'>
            <AddIcon/>
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} bgcolor={'background.default'} color={'text.primary'}>
          <Typography id="modal-modal-title" variant="h6" component="h2" textAlign='center'>
            Create Post
          </Typography>
          <UserBox>
            <Avatar src='https://avatars.mds.yandex.net/i?id=96ac6e7adad5a81c28d7e50ec18abf3893ee02fe-9856853-images-thumbs&n=13.jpg'/>
            <Typography variant='span' fontWeight={500}>
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{width: '100%'}}
            placeholder="What's on your mind..."
            multiline
          />
          <Stack direction='row' gap={1} mt={2} mb={2}>
            <EmojiEmotionsIcon color='primary'/>
            <ImportContactsIcon color='success'/>
            <ImageIcon color='secondary'/>
            <AddHomeIcon color='error'/>
          </Stack>
          <ButtonGroup variant='contained' sx={{width: '100%'}}>
            <Button sx={{width: '75%'}}>Add Post</Button>
            <Button sx={{width: '25%'}}>
              <CalendarMonthIcon/>
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  )
}

export default Add
