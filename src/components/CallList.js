import React from 'react';
import CallInfo from './CallInfo';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';

function Row(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid item xs={3}>
        {props.items[0]}
      </Grid>
      <Grid item xs={3}>
        {props.items[1]}
      </Grid>
      <Grid item xs={3}>
        {props.items[2]}
      </Grid>

      <Grid item xs={3}>
        {props.items[3]}
      </Grid>
    </React.Fragment>
  );
}

function CallList(props) {
  let group = _.map(props.callinfos, 
    ({call_id, actor, number}) => <CallInfo key={call_id} actor={actor} number={number} />
  );
  
  let matrix = _.chunk(group, 4);
 
  return (
    <Grid container spacing={8}>
        {
          matrix.reduce((ac, row) => {
            ac.push(
              <Grid item xs={12} container spacing={40}>
                <Row items={row} />
              </Grid>
            );
            
            return ac
          }, [])
        }
    </Grid>
  )
}

export default  CallList;