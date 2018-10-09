import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import './callinfo.css';

const styles = theme => ({
  card: {
    margin: '20px',
    borderRadius: '10px'
  },
  
  greenAvatar: {
    margin: 10,
    width: 60,
    height: 60,
    color: '#00a7e6',
    backgroundColor: '#fff',
  },
  header: {
    color: '#fff',
    backgroundColor: '#00a7e6'
  },
  content: {
    color: '#fff',
  }
});

function CallInfo(props) {
  
  const { classes } = props;

  return(
    <div>
        <Card className={classes.card}>
          <CardHeader className={classes.header}
            avatar={
              <Avatar className={classes.greenAvatar}>
                <PersonIcon fontSize='large' />
              </Avatar>
            }
            title={props.actor}
            titleTypographyProps={{color: 'inherit', variant: 'headline', component:'h3'}}
          />
          <Divider light={true}/>
          <CardContent className={`${classes.content} callInfoContent`}>
            <Typography  color='inherit' variant='headline' component='h3' align='center'>
              <PhoneIcon/>{props.number}
            </Typography>
          </CardContent>
        </Card>
      </div>
  )
}



export default withStyles(styles)(CallInfo);