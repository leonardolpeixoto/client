import React from 'react';
import CallInfo from './CallInfo';
import Grid from '@material-ui/core/Grid';



function CallList(props) {
  return (
    <React.Fragment>
       <Grid item xs={3} spacing={24}>
        {props.callinfos.map(({call_id, actor, number}) => 
          <CallInfo key={call_id} actor={actor} number={number} />
        )}
       </Grid>
    </React.Fragment>
  )
}

export default  CallList;