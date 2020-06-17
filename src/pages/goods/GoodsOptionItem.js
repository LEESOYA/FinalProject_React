import React from 'react';

import TextField from '@material-ui/core/TextField';

function GoodsOptionItem(props) {
  const createOption = (optionName, stockCount) => {
    return {
      optionName,
      stockCount,
    };
  }

  return (
    <React.Fragment>
      <TextField
        label="옵션명"
        InputLabelProps={{
          shrink: true,
        }}
        value={props.option.optionName}
        onChange={
          (e) => {
            props.changeOption(createOption(e.target.value, props.option.stockCount))
          }
        }
      />
      <TextField
        label="수량"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={props.option.stockCount}
        onChange={
          (e) => {
            props.changeOption(createOption(props.option.optionName, parseInt(e.target.value)))
          }
        }
      />
    </React.Fragment>
  );
}

export default GoodsOptionItem;