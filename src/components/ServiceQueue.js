import CallList from './CallList';
import { entered, finished } from '../socket';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  list: {
    marginTop: 100
  }
});

class ServiceQueue extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      callinfos: {}
    }
  }

  componentDidMount() {
    entered((error, { actor, number, call_id }) => {
      if(error) console.error(error);
      
      this.setState({
        callinfos: {...this.state.callinfos,  [call_id]: {actor, number}}
      });
    });

    finished((error, call_id) => {
      let data = this.state.callinfos;
      
      delete data[call_id];
      
      this.setState({
        callinfos: data
      });
    })

  }


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.list}>
        <CallList  callinfos={this.state.callinfos} />
      </div>
    );
  }
}

export default withStyles(styles)(ServiceQueue);