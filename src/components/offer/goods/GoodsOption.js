import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';


import GoodsOptionItem from './GoodsOptionItem';

function GoodsOption(props) {
  const createOption = () => {
    return {
      optionName: '',
      stockCount: 0,
    };
  }

  const onChange = (e) => {
    const { checked } = e.target;

    props.handleCheckedChange(checked);
    if (checked && props.optionList.length === 0) {
      props.addOptionList(createOption());
    }
  };

  const renderItem = (option, index) => {
    return (
      <div key={index}>
        <GoodsOptionItem
          option={option}
          changeOption={(newOption) => { props.changeOption(index, newOption) }}
        />
        {
          (props.optionList.length - 1 === index) && (
            <IconButton aria-label="add" onClick={() => {props.addOptionList(createOption())}}>
              <AddIcon fontSize="small" />
            </IconButton>
          )
        }
      </div>
    );
  }

  return (
    <div>
      <div>
        <label>
          <Checkbox
            checked={props.checked}
            onChange={onChange}
            color="default" 
            inputProps={{'aria-label' : 'checkbox with default color'}}
            size="small"
          />
          { props.optionTitle }
        </label> 
      </div>
      {
        props.checked && props.optionList.map(renderItem)
      }
    </div>
  );
}

export default GoodsOption;