import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";

const kindOfCake = [
  {
    value: "bread",
    label: "일반 빵"
  },
  {
    value: "rice",
    label: "앙금"
  },
  {
    value: "macaron",
    label: "마카롱"
  },
  {
    value: "number",
    label: "숫자"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

function ProductOfferPage(){
  const classes = useStyles();
  const [kind, setKind] = React.useState("bread");

  const handleChange = (e) => {
    setKind(e.target.value);
  }
  return (
    <div className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField 
          id="standard-basic" 
          label="상품명"/>
      </div>
      <div>
        <TextField 
          id="standard-basic" 
          label="이미지" />
      </div>
      <div>
        <TextField
          select
          label="시트 선택"
          value={kind}
          onChange={handleChange}
          variant="outlined"
          size="small"
        >
          {kindOfCake.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField 
          id="standard-basic" 
          label="가격"/>
      </div>
    </div>
  
  );
}

export default ProductOfferPage;