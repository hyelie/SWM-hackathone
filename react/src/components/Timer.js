import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function LinearProgressWithLabel(props) {
  const t = String(props.value);
  //const temp=parseDouble(props.value);
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">
          {props.value && `${parseFloat(Math.round(props.value) / 10).toFixed(1)}`}
        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired
};

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});



export default function LinearWithValueLabel({isAnswer, progress, setProgress, setIsTimeOut}) {
  const classes = useStyles();
  React.useEffect(() => {
    const timer = setInterval(() => {
      console.log(isAnswer)
      setProgress((prevProgress) => prevProgress == 0 ? setIsTimeOut(true) :
        (isAnswer ? prevProgress : prevProgress - 1)
      );
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (<>
    
    <div className={classes.root}>
      {progress && <LinearProgressWithLabel value={progress}/> }
    </div>
    </>
    
  );
}