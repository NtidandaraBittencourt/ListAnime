import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LogoAnime from '../../assets/images/logoAnime.svg';
import Box from '@mui/material/Box';

const FooterSearch = () => (
  <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
    <Toolbar disableGutters sx={{ justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection:'column'}}>
        <img src={LogoAnime} alt="Logo_Anime" style={{ height: '17px' }} />
        <h6 style={{ margin: '0px', marginTop: '10px' }}>TODOS OS DIREITOS RESERVADOS</h6>
      </Box>
    </Toolbar>
  </AppBar>
)

export default FooterSearch;
