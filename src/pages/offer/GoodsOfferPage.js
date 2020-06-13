import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';

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
        <TextField id="standard-read-only-input" label="Read only" defaultValue="상품번호"/><br/><br/>
        <InputLabel>카테고리</InputLabel>
        <select value={this.state.value} onChnage={this.onChange.bind(this)}>
          <option value="1" selected>문구/사무</option>
          <option value="2">생활용품</option>
          <option value="3">장식품</option>
        </select><br/><br/>
        <label>상품 옵션 </label>
        
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
        <TextField id="standard-basic" label="전체 재고 수량"/><br/><br/>
        <label>대표이미지</label><input type="file"/><br/><br/>
        <label>이미지 추가</label><span className="material-icons">add</span><br/><br/>
        <input type="file" hidden className="addfile"></input>
        <TextField id="standard-read-only-input" label="Read only" defaultValue="배송지주소"/><br/><br/>
        <TextField
            id="date"
            label="판매시작"
            type="date"
            InputLabelProps={{
            shrink: true,
            }}
        /><label>     </label>
        <TextField
            id="date"
            label="판매종료"
            type="date"
            InputLabelProps={{
            shrink: true,
            }}
        /><br/><br/>
        <label>미성년 제한 </label>
        <label>
          <Checkbox 
            color="default" 
            inputProps={{'aria-label' : 'checkbox with default color'}}
            size="small"
            value="yes"
            onClick={this.ckboxchecked}
          />
          YES
        </label>
        <label>
          <Checkbox 
            color="default" 
            inputProps={{'aria-label' : 'checkbox with default color'}}
            size="small"
            value="no"
            onClick={this.ckboxchecked}
          />
          NO
        </label>
        <input type="file" style={{visibility:'hidden'}}></input>
        <button>승인요청</button>
        <button>취소</button>
      </div>
    );
  }
}

export default GoodsOfferPage;