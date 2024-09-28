import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import LogoAnime from '../assets/LogoAnime.svg';
import { Switch, FormControlLabel } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

function HeaderSearch({ isDarkMode, toggleTheme }) {
  return (
    <AppBar position="fixed" sx={{boxShadow: 'none',  top: 0, bottom: 'auto'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' }}}>
          <p></p>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={LogoAnime} alt="Logo_Anime" style={{ height: '28px' }} />
          </Box>
          <FormControlLabel
            control={
              <Switch
                checked={isDarkMode}
                onChange={toggleTheme}
                color="default"
              />
            }
            label={isDarkMode ? 'Dark' : 'Light'}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

HeaderSearch.propTypes = {
  isDarkMode: PropTypes.bool.isRequired, 
  toggleTheme: PropTypes.func.isRequired
};
export default HeaderSearch;
