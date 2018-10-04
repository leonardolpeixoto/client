import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExploreIcon from '@material-ui/icons/Explore';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  logo: {
    color: '#ff',
    fontFamily: 'Pacifico',
  },
});


function NavBar(props){
  const { classes } = props;

  return(
    <AppBar  position="fixed" >
       <Toolbar>
          <Typography className={classes.logo} variant="title" color="inherit">
            <ExploreIcon /> Leo Serviços
          </Typography>
       </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(NavBar);