import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import choiceOneImage from "../images/choiceOne.png"
import choiceTwoImage from "../images/choiceTwo.png"
import choiceThreeImage from "../images/choiceThree.png"
import choiceFourImage from "../images/choiceFour.png"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function QuizList({choices, answer, selectedAnswer, isAnswer}) {
  const classes = useStyles();
  const images = [choiceOneImage, choiceTwoImage,choiceThreeImage, choiceFourImage]
  return (
    <List className={classes.root}>
      { isAnswer === null ?
        choices.map((choice, idx) =>(
          <>
            <ListItem button alignItems="flex-start" onClick={() => selectedAnswer(idx)}>
              <ListItemAvatar>
                <Avatar alt={`${idx+1}one finger`} src={images[idx]} />
              </ListItemAvatar>
              <ListItemText
                primary={choice}
                className="quizText"
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        )) : 
        choices.map((choice, idx) =>(
          <> 
          { idx == answer ?
            <>
            <ListItem style={{background:"#00cdac"}} button alignItems="flex-start" onClick={() => selectedAnswer(idx)}>
              <ListItemAvatar>
                <Avatar alt={`${idx+1}one finger`} src={images[idx]} />
              </ListItemAvatar>
              <ListItemText
                primary={choice}
                className="quizText"
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            </> : 
            <>
            <ListItem disabled  button alignItems="flex-start" onClick={() => selectedAnswer(idx)}>
              <ListItemAvatar>
                <Avatar alt={`${idx+1}one finger`} src={images[idx]} />
              </ListItemAvatar>
              <ListItemText
                primary={choice}
                className="quizText"
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            </>
          }
          </>
        ))
      }
    </List>
  );
}
