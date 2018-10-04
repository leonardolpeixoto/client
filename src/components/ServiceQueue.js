import React, { Component } from 'react';
import CallList from './CallList';
import { entered } from '../socket';

const callinfos = [
  {call_id: 1, actor: 'Leonardo@gmail.com', number: '342121313'},
  {call_id: 1, actor: 'leo@leo', number: '342121313'},
  {call_id: 1, actor: 'leo@leo', number: '342121313'},
  {call_id: 1, actor: 'leo@leo', number: '342121313'},
  {call_id: 1, actor: 'leo@leo', number: '342121313'},
  {call_id: 1, actor: 'leo@leo', number: '342121313'},
]

class ServiceQueue extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    entered((error, { actor, number, call_id }) => {

    })
  }

  delete = (id) => {
    this.setState(prevState => ({
        data: prevState.data.filter(el => el != id )
    }));
  }

  render() {
    return (
      <CallList callinfos={callinfos} />
    );
  }
}

export default ServiceQueue;