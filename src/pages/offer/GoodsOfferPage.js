import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

import GoodsOption from 'components/offer/goods/GoodsOption';

class GoodsOfferPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'select',
      anchorEl:'',

      colorOptionList: [],
      colorOptionChecked: false,

      attributeOptionList: [],
      attributeOptionChecked: false,
    };
  }

  onChange(e) {
    this.setState({
        value:e.target.value
    })
  }
  state = {
      name:'test'
  }
  
  optionCheckedChange(stateName, checked) {
    this.setState({
      [stateName]: checked,
    });
  }

  addOptionList(stateName, option) {
    this.setState({
      [stateName]: this.state[stateName].concat(option),
    });
  }

  changeOption(stateName, index, option) {
    this.setState({
      [stateName]: this.state[stateName].map((item, i) => {
        if (i === index) {
          return { ...option };
        } else {
          return item;
        }
      }),
    });
  }

  render() {
    return (
      <div>
        <TextField id="standard-basic" label="상품명"/><br/><br/>
        <InputLabel>카테고리</InputLabel>
        <GoodsOption
          optionTitle="색상"
          optionList={this.state.colorOptionList}
          checked={this.state.colorOptionChecked}
          handleCheckedChange={(checked) => { this.optionCheckedChange('colorOptionChecked', checked)}}
          addOptionList={(option) => { this.addOptionList('colorOptionList', option) }}
          changeOption={(index, option) => { this.changeOption('colorOptionList', index, option) }}
        />
        <GoodsOption
          optionTitle="종류"
          optionList={this.state.attributeOptionList}
          checked={this.state.attributeOptionChecked}
          handleCheckedChange={(checked) => { this.optionCheckedChange('attributeOptionChecked', checked)}}
          addOptionList={(option) => { this.addOptionList('attributeOptionList', option) }}
          changeOption={(index, option) => { this.changeOption('attributeOptionList', index, option) }}
        />
        <TextField id="standard-basic" label="판매가격"/><br/><br/>
        <Button variant="outlined" size="small">등록</Button>
        <Button variant="outlined" color="secondary" size="small">취소</Button>
    
      </div>
    );
  }
}

export default GoodsOfferPage;