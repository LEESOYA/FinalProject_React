import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';

const kindOfCake = [
  {
    value: "bread",
    label: "빵 케이크"
  },
  {
    value: "rice",
    label: "앙금 케이크"
  },
  {
    value: "macaron",
    label: "마카롱 케이크"
  },
  {
    value: "number",
    label: "숫자 케이크"
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

function ProductModifyPage(){
  const classes = useStyles();
  const [kind, setKind] = React.useState("bread");

  const handleChange = (e) => {
    setKind(e.target.value);
  }
  return (
    <div className={classes.root} noValidate autoComplete="off">
			<label>상품수정페이지</label>
      <div>
        <TextField 
          id="standard-basic" 
          label="상품명"/>
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
      <div>
        <TextField
          id="outlined-multiline-static"
          label="상세설명"
          multiline
          rows={4}
          defaultValue="사이즈 : 2호 (지름18cm)
          유통기한 : 제조일로부터2일(냉장보관필수)
          구성 : 바닐라케이크
          제조&판매원 :	케익팩토리"
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



    </div>
  );
}

export default ProductModifyPage;