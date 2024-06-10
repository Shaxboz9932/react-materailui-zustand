import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import React, { useState } from 'react'

import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import Rigthbar from './components/Rigthbar'
import Add from './components/Add'


function App() {
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
          <Navbar/>
          <Stack marginTop={9} direction='row' spacing={2} justifyContent='space-between'>
              <SideBar mode={mode} setMode={setMode}/>
              <Feed/>
              <Rigthbar/>
          </Stack>
          <Add/>
      </Box>
    </ThemeProvider>
  )
}

export default App
