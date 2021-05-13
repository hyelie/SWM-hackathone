import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SimpleAlerts() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert severity="info">랭킹 1~3등은 소정의 상품을 지급해드립니다.</Alert>
    </div>
  );
}