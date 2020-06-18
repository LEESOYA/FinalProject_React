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



// function ProductOfferPage(props){
//   const classes = useStyles();
//   const [kind, setKind] = React.useState("bread");

//   const handleChange = (e) => {
//     setKind(e.target.value);
//   }

//   const onSave = (e) => {
//     e.preventDefault();
//     const {product_name, product_price, product_text} = this.refs;
//     console.log(product_name.value, product_price.value, product_text.value);
//     this.props.onSave({...this.refs});
//   }

  
//   return (
//     <div className={classes.root} noValidate autoComplete="off">
//       <div>상품등록페이지</div>
//       <div>
//         <TextField 
//           id="standard-basic"
//           name="product_name"
//           label="케이크 명"
//           inputProps={{ref: input => this.product_name = input}}
//           onChange={onSave}  
//         />
//       </div>
//       <br></br>
//       <div>
//         <input type="file"></input>
//       </div>
//       <br></br>
//       <div>
//         <TextField
//           select 
//           name="product_category"
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
//           name="product_price"
//           id="standard-basic" 
//           label="가격"
//           onChange={onSave}
//         />
//       </div>
//       <div>
//         <TextField
//           name="product_text"
//           id="outlined-textarea"
//           label="상세설명"
//           multiline
//           rows={4}
//           defaultValue="test"
//           variant="outlined"
//           onChange={onSave}
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