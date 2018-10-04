import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import green from '@material-ui/core/colors/green';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';

const styles = theme => ({
  card: {
    margin: '20px',
    width: '200px',
    height: '200px'
  },
  
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
});

function CallInfo(props) {
  
  const { classes } = props;

  return(
    <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar className={classes.greenAvatar}>
                <PersonIcon />
              </Avatar>
            }
            title={props.actor}
          />
          <CardContent>
            <Typography  variant="headline" component="h3" align="center">
              <PhoneIcon/>{props.number}
            </Typography>
          </CardContent>
        </Card>
      </div>
  )
}



export default withStyles(styles)(CallInfo);