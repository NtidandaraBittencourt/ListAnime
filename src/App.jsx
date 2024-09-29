import  {useState} from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './styles/theme';
import CssBaseline from '@mui/material/CssBaseline';

import Home from './views/HomeView/Home'
import Header from './components/Header/HeaderSearch'
import Footer from './components/Footer/FooterSearch'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className={`font-sans my-custom-font`}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
