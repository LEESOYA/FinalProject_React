import React, { useState } from 'react';
import axios from 'axios';
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
  //const [image, setImage] = useState("");

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
  // const imageChangeHandler = (e) => {
  //   setImage(e.target.value);

  // }
//   const onkeyChange=(e)=>{
//     this.setState({
//         [e.target.name]:e.target.value
//     })
// }

  //이미지 업로드 이벤트
  const onImageUpload=(e)=>{
    const uploadFile = e.target.files[0];
    const product_img = e.target.files[0].name;
    this.setState({
        product_img
    })

    //서버로 업로드
    const stufile = new FormData();
   
    stufile.append('uploadFile',uploadFile);
    axios({
        method:'post',
        //url:'http://localhost:8080/acorn/product/productFile',
        url:'http://localhost:8080/acorn/product/upload',
        data:stufile,
        headers:{'Content-Type':'multipart/form-data'}
    }).then(res=>{
        console.log("이미지명:"+res.data);
    }).catch(err=>{
        console.log("업로드 오류:"+err);
    })
  }
  //onSubmit 함수
  const onSubmit=(e)=>{
    e.preventDefault();
    let url="http://localhost:8080/acorn/product/add";
    let uploadData=this.state;
    console.log("////" + uploadData);
    axios.post(url,uploadData).then(res=>{
        this.setState({})
    }).catch(err=>{
        console.log("상품 추가 오류:"+err);
    })
  }

  
  return (
    <div className={classes.root} noValidate autoComplete="off">
			<label>상품등록페이지</label>
      <form onSubmit={onSubmit}>
      <div>
        <TextField 
          id="standard-basic" 
          label="상품명"
          onChange={nameChangeHandler}
          value={cakeName}
        />
      </div>
      <br></br>
      {/* 상품 사진 업로드 */}
      <div>
        <input type="file" 
          onChange={onImageUpload}
          name="seller_company_image"
          // value={image}
        />
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
        <Button 
          type="submit"
          variant="outlined" color="primary">
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