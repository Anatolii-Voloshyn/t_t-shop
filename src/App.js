import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './component/pages/Home/Home';
import Delivery from './component/pages/Delivery/Delivery';
import About from './component/pages/About/About';

import { AppBar, Box, Typography, Button, Avatar, Stack } from '@mui/material';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import instagramImg from './images/instagram.png';
import telegramImg from './images/telegram.png';
import tiktokImg from './images/tiktok.png';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              m={1}
            >
              <Stack direction="row" spacing={3}>
                <Button href="/about" color="inherit">
                  Про нас
                </Button>
                <Button href="delivery" color="inherit">
                  Доставка
                </Button>
              </Stack>

              <Stack>
                <Button href="/" color="inherit">
                  <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    T&T-shop
                  </Typography>
                </Button>

              </Stack>

              <Stack direction="row">
                <Button>
                  <Avatar src={instagramImg} alt="instagram" />
                </Button>
                <Button>
                  <Avatar src={telegramImg} alt="telegram" />
                </Button>
                <Button>
                  <Avatar src={tiktokImg} alt="tiktok" />
                </Button>
              </Stack>
            </Stack>
          </AppBar>
        </ThemeProvider>

        <Box className='page-content'>
          <Box className='all-courses'>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/delivery" element={<Delivery />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
