import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';

//select 값 미리 정의
const kindOfCake = [
  {
    key:1, value:"일반케이크"
  },
  {
    key:2, value: "앙금 케이크"
  },
  {
    key:3, value: "마카롱 케이크"
  },
  {
    key:4, value: "숫자 케이크"
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
  

  //이벤트
  const [cakeName, setCakeName] = useState(""); 
  const [kind, setKind] = React.useState(1);
  const [cakePrice, setCakePrice] = useState(0);
  const [cakeText, setCakeText] = useState("");

  const nameChangeHandler = (e) => {
    setCakeName(e.target.value);
  }
  const optionChangeHandler = (e) => {
    setKind(e.target.value);
  }
  const priceChangeHandler = (e) => {
    setCakePrice(e.target.value);
  }
  const textChangeHandler = (e) => {
    setCakeText(e.target.value);
  }
  
  return (
    <div className={classes.root} noValidate autoComplete="off">
			<label>상품등록페이지</label>
      <form>
      <div>
        <TextField 
          id="standard-basic" 
          label="상품명"
          onChange={nameChangeHandler}
          value={cakeName}
        />
      </div>
      <br></br>
      <div>
        <input type="file"></input>
      </div>
      <br></br>
      <div>
        <TextField
          select
          label="케이크 종류"
          variant="outlined"
          size="small"
          value={kind}
          onChange={optionChangeHandler}
        >
          {kindOfCake.map(option => (
            <MenuItem key={option.key} value={option.key}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField 
          id="standard-basic" 
          label="가격"
          type="number"
          value={cakePrice}
          onChange={priceChangeHandler}
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="상세설명"
          multiline
          rows={4}
          value={cakeText}
          onChange={textChangeHandler}
          variant="outlined"
        />
      </div>
      <div style={{marginLeft:'35px'}}>
        <Button variant="outlined" color="primary">
          상품 등록
        </Button>
        <Button variant="outlined" color="secondary">
          취소
        </Button>
      </div>
    </form>
      </div>
  );
}

export default ProductOfferPage;  