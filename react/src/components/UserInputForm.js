import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { insertUser } from "../actions";
const useStyles = makeStyles((theme) => ({
root: {
'& > *': {
margin: theme.spacing(1),
width: '25ch',
},
},
}));

export default function Ending({score}) {
const classes = useStyles();
const [userInfo, setUserInfo] = useState({
  name : "",
  email: ""
})

function handleOnChange(e) {
  setUserInfo({
    ...userInfo,
    [e.target.name] : e.target.value
  })
}
function handleOnSubmit(e) {
  e.preventDefault()
  insertUser(userInfo.name, userInfo.email, score).then((response) => {
    console.log(response)
  })
}

return (
<div>


<form className={classes.root} noValidate autoComplete="off" onSubmit={handleOnSubmit}>

<label>
<h1>score:{score} </h1>
</label>

<TextField onChange={handleOnChange} name="name" id="outlined-basic" label="닉네임" variant="outlined" value={userInfo.name}  />
<TextField onChange={handleOnChange} name="email" id="outlined-basic" label="이메일" variant="outlined" value={userInfo.email} />
<Button type="submit" variant="contained" color="primary" >
Primary
</Button>
</form>

</div>
);
}