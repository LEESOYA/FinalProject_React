import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

//import {makeStyles} from '@material-ui/core/styles';

class GoodsOffer extends Component {
    render() {
        return (
            <form>
                <div>
                    <TextField id="standard-basic" label="상품명"/><br/><br/>
                    <TextField id="standard-read-only-input" label="Read only" defaultValue="상품번호"/><br/>
                    <label>상품 옵션</label>
                    <Checkbox 
                        color="default" 
                        inputProps={{'aria-label' : 'checkbox with default color'}}
                        label="색상"
                    />
                    <Checkbox 
                        defaultChecked color="default" 
                        inputProps={{'aria-label' : 'checkbox with default color'}}
                        label="종류"
                    />
                    <br/><br/>
                    <TextField id="standard-basic" label="판매가격"/><br/><br/>
                    <TextField id="standard-basic" label="전체 재고 수량"/><br/><br/>
                    <label>대표이미지</label><input type="file"/><br/><br/>
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
                    <label>미성년 제한</label>
                    <Checkbox 
                        color="default" 
                        inputProps={{'aria-label' : 'checkbox with default color'}}
                        
                    />
                    <Checkbox 
                        defaultChecked color="default" 
                        inputProps={{'aria-label' : 'checkbox with default color'}}
                        label="yes"
                    />
                </div>
                <button>승인요청</button>
                <button>취소</button> 

            </form>
           
        );
    }
}

export default GoodsOffer;