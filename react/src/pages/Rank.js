import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import {getScoreList} from '../actions/index.js';



function Rank() {
  const [rows, setRows] = React.useState([{nick: "asd", score:"123"}]);
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>순위</TableCell>
            <TableCell align="right">닉네임&nbsp;(g)</TableCell>
            <TableCell align="right">점수&nbsp;(g)</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow>
              {/* <CreateCell /> */}
              <TableCell align="right">{row.nick}</TableCell>
              <TableCell align="right">{row.socre}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
function CreateCell(){
  if(index==0){
    return(
      <TableCell align="right">1등</TableCell>
    )
  }else if(index==1){
    return(
      <TableCell align="right">2등</TableCell>
    )
  }else if({index}==2){
    return(
      <TableCell align="right">3등</TableCell>
    )
  }else{
    return(
      <TableCell align="right">{index}</TableCell>
    )
  }
  
}
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

export default Rank;




