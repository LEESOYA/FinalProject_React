// import React from 'react';

// import { makeStyles } from "@material-ui/core/styles";
// import TextField from '@material-ui/core/TextField';
// import MenuItem from "@material-ui/core/MenuItem";
// import Button from '@material-ui/core/Button';

// const kindOfCake = [
//   {
//     value: "bread",
//     label: "빵 케이크"
//   },
//   {
//     value: "rice",
//     label: "앙금 케이크"
//   },
//   {
//     value: "macaron",
//     label: "마카롱 케이크"
//   },
//   {
//     value: "number",
//     label: "숫자 케이크"
//   }
// ];

// const useStyles = makeStyles(theme => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "25ch"
//     }
//   },
  
// }));

// //데이터 업로드


// //  //이미지 업로드 이벤트
// //  onImageUpload=(e)=>{
// //   const uploadFile = e.target.files[0];
// //   const companyImage = e.target.files[0].name;
// //   this.setState({
// //       companyImage
// //   })
// //   //서버로 업로드
// //   const companyFile = new FormData();
// //   companyFile.append('uploadFile',uploadFile);
// //   axios({
// //       method:'post',
// //       url:'http://localhost:8080/acorn/seller/companyFile',
// //       data:companyFile,
// //       headers:{'Content-Type':'multipart/form-data'}
// //   }).then(res=>{
// //       console.log("이미지명:"+res.data);
// //   }).catch(err=>{
// //       console.log("업로드 오류:"+err);
// //   })
// // }
// // //onSubmit 함수
// // onSubmit=(e)=>{
// //   e.preventDefault();
// //   let url="http://localhost:8080/acorn/seller/add";
// //   console.log({...this.state});
// //   let uploadData=this.state;
// //   console.log(uploadData);
  
// //   axios.post(url,uploadData).then(res=>{
// //       this.setState({
// //       })
// //   }).catch(err=>{
// //       console.log("데이터 추가 오류:"+err);
// //   })
// // }

// function ProductOfferPage(props){
//   const classes = useStyles();
//   const [kind, setKind] = React.useState("bread");

//   const handleChange = (e) => {
//     setKind(e.target.value);
//   }
//   return (
//     <div className={classes.root} noValidate autoComplete="off">
//       <div>상품등록페이지</div>
//       <div>
//         <TextField 
//           id="standard-basic" 
//           label="상품명"/>
//       </div>
//       <br></br>
//       <div>
//         <input type="file"></input>
//       </div>
//       <br></br>
//       <div>
//         <TextField
//           select
//           label="케이크 종류"
//           value={kind}
//           onChange={handleChange}
//           variant="outlined"
//           size="small"
//         >
//           {kindOfCake.map(option => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//       </div>
//       <div>
//         <TextField 
//           id="standard-basic" 
//           label="가격"/>
//       </div>
//       <div>
//         <TextField
//           id="outlined-textarea"
//           label="상세설명"
//           multiline
//           rows={4}
//           defaultValue="사이즈 : 2호 (지름18cm)
//           유통기한 : 제조일로부터2일(냉장보관필수)
//           구성 : 바닐라케이크
//           제조&판매원 :	케익팩토리"
//           variant="outlined"
//         />
//       </div>
//       <div style={{marginLeft:'35px'}}>
//         <Button variant="outlined" color="primary" onClick = {() => {props.addOffer()}}>
//           상품 등록
//         </Button>
//         <Button variant="outlined" color="secondary">
//           취소
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default ProductOfferPage;