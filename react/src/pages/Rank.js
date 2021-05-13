import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getScoreList} from '../actions/index.js';


function Rank() {
  const [rows, setRows]= React.useState(null);
  useEffect(() => {
    getScoreList().then((response) => {
      setRows(response);
    })
  }, [])
  const classes = useStyles();
  return(
    <>
    {rows &&
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">순위</TableCell>
            <TableCell align="center">nick&nbsp;</TableCell>
            <TableCell align="center">점수&nbsp;</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow>
              <CreateCell num={index}/>
              <TableCell align="center">{row.NICK}</TableCell>
              <TableCell align="center">{row.SCORE}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  }
  </>
  )
}
function CreateCell({num}){
  if(num==0){
    return(
      <TableCell align="center">1등</TableCell>
    );
  }else if(num==1){
    return(
      <TableCell align="center">2등</TableCell>
    );
  }else if(num==2){
    return(
      <TableCell align="center">3등</TableCell>
    );
  }else{
    return(
      <TableCell align="center">{num+1}</TableCell>
    );
  }
  
}
const useStyles = makeStyles({
    table: {
      
    },
  });

export default Rank;




