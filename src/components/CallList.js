import React from 'react';
import CallInfo from './CallInfo';

function CallList(props) {
  return (
    <div>
      {props.callinfos.map(({call_id, actor, number}) => 
        <CallInfo key={call_id} actor={actor} number={number} />
      )}
    </div>
  )
}

export default CallList;