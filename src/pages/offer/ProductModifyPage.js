import React, { useState } from 'react';

import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';
import axios from 'axios';

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
  },
}));

function ProductOfferPage(props){
  const classes = useStyles();
  
  //이벤트
  const [cakeName, setCakeName] = useState(""); 
  const [cakePrice, setCakePrice] = useState(0);
  const [cakeText, setCakeText] = useState("");
  const [kind, setKind] = useState("");
  const [cakeImgSrc, setCakeImgSrc] = useState('');
  const [cakeImg, setCakeImg] = useState(null);

  // const handleChange = (e) => {
  //   setKind(e.target.value);
  // }
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

  const onImageChange = () => {

  }

  
  const productAddUrl = "http://localhost:9003/acorn/product/getData?product_id="+20;

  const onSubmit = () => {
    axios(productAddUrl, {
      method: 'get',
      data: {product_name:cakeName, 
        product_text: cakeText,
        product_price: cakePrice,
        product_category: kind
      }
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  


  return (
    <form onSubmit={onSubmit}>
      <div className={classes.root} noValidate autoComplete="off">
        <div>상품 수정 페이지</div>
        <div>
          <TextField 
            label="상품명"
            name="product_name"
            tabIndex="product_name"
            value={cakeName}
            onChange={nameChangeHandler}
          />
        </div>
        <br></br>
        <div>
          <input type="file" onChange={onImageChange} accept="image/*" ></input>
        </div>
        <div>
          {
            cakeImgSrc && (<img style={{ width: '200px', marginTop: '16px'}} src={cakeImgSrc} alt="아무거나" />)
          }
        </div>
        <br></br>
        <div>
          <TextField
            select
            label="케이크 종류"
            id="product_category"
            name="product_category"
            value={kind}
            onChange={optionChangeHandler}
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
            label="가격"
            id="product_price"
            name="product_price"
            value={cakePrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div>
          <TextField
            label="상세설명"
            multiline
            rows={10}
            id="product_text"
            name="product_text"
            value={cakeText}
            onChange={textChangeHandler}
            variant="outlined"
          />
        </div>
        <div style={{marginLeft:'35px'}}>
          <Button type="submit" variant="outlined" color="primary">
            상품 수정
          </Button>
          <Button variant="outlined" color="secondary">
            취소
          </Button>
        </div>
      </div>
    </form>
  );
}

export default ProductOfferPage;