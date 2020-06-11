import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Selectbox from '@material-ui/core/Select';

class Exhibit extends Component {
   
    render() {
        // const names = [
        //     "문구/사무용품",
        //     "생활용품",
        //     "장식품"
            
        // ];
        return (
            <form>
                <label>전시 예매 등록</label>
                <div>
                    <TextField id="standard-basic" label="주관"/><br/><br/>
                    <TextField id="standard-basic" label="전시명"/><br/><br/>
                    <Selectbox>
                    </Selectbox><br/><br></br>
                    
                    <TextField id="standard-read-only-input" label="Read only" defaultValue="전시번호"/><br/>
                    
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
                    <TextField id="standard-basic" label="전체 예매 수량"/><br/><br/>
                    <label>전시이미지</label><input type="file"/><br/><br/>
                    
                    <TextField
                        id="date"
                        label="전시시작"
                        type="date"
                        InputLabelProps={{
                        shrink: true,
                        }}
                    /><label>     </label>
                    <TextField
                        id="date"
                        label="전시종료"
                        type="date"
                        InputLabelProps={{
                        shrink: true,
                        }}
                    /><br/><br/>
                     <TextField
                        id="date"
                        label="예매시작일"
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

export default Exhibit; 