import CallList from './CallList';
import { entered } from '../socket';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const callinfos = [
  {call_id: 1, actor: 'Leonardo@gmail.com', number: '342121313'},
  {call_id: 1, actor: 'leo@leo', number: '342121313'},
  {call_id: 1, actor: 'leo@leo', number: '342121313'},
  {call_id: 1, actor: 'leo@leo', number: '342121313'},
  {call_id: 1, actor: 'leo@leo', number: '342121313'},
  {call_id: 1, actor: 'leo@leo', number: '342121313'},
]

const styles = theme => ({
  list: {
    marginTop: 100
  }
});

class ServiceQueue extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  // componentDidMount() {
  //   entered((error, { actor, number, call_id }) => {

  //   })
  // }

  // delete = (id) => {
  //   this.setState(prevState => ({
  //       data: prevState.data.filter(el => el != id )
  //   }));
  // }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.list}>
        <CallList  callinfos={callinfos} />
      </div>
    );
  }
}

export default withStyles(styles)(ServiceQueue);