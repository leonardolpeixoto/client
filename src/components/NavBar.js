import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  nav: {
    ba: 10
  },
});


function NavBar(props){
  const { classes } = props;

  return(
    <AppBar className={classes.nav} position="fixed" >
       <Toolbar>
          <Typography variant="title" color="inherit">
            Fila de Serviço
          </Typography>
       </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(NavBar);