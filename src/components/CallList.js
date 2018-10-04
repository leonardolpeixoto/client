import React from 'react';
import CallInfo from './CallInfo';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';

function CallList(props) {
  return (
    <Grid container spacing={8}>
      <React.Fragment>
        <Grid item xs={3}>
          {
            Object
              .keys(props.callinfos)
                .map(key => <CallInfo key actor={props.callinfos[key].actor} number={props.callinfos[key].number} />
          )}
        </Grid>
      </React.Fragment>
    </Grid>
  )
}

export default  CallList;