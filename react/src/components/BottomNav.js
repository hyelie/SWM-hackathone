import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background: "#eee",
    width: "100%",
    position: "fixed",
    bottom: 0,
    "& .MuiBottomNavigationAction-root":{
      minWidth: 0
    }
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/" label="Game" icon={<SportsEsportsIcon />} />
      <BottomNavigationAction label="ranking" component={Link} to="/ranking" icon={<TrendingUpIcon />} />
      <BottomNavigationAction label="게임설명" component={Link} to="/sub" icon={<MenuBookIcon />} />
    </BottomNavigation>
  );
}