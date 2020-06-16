import React, { Component } from 'react';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
//import { makeStyles, FormControl } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120
//   },
// }));
// const classes = useStyles();

class ProductInfoPage extends Component {

  
  render() {
    return (
      <div>
          <Select displayEmpty inputProps={{ "aria-label": "Without label" }} >
            <MenuItem value="">
              <em>직접입력</em>
            </MenuItem>
            <MenuItem value="naver.com">naver.com</MenuItem>
            <MenuItem value="daum.net">daum.net</MenuItem>
            <MenuItem value="hanmail.net">hanmail.net</MenuItem>
            <MenuItem value="nate.com">nate.com</MenuItem>
            <MenuItem value="gmail.com">gmail.com</MenuItem>
            <MenuItem value="icloud.com">icloud.com</MenuItem>
          </Select>
      </div>
    );
  }
}

export default ProductInfoPage;