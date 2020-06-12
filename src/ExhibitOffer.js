import React, { Component } from 'react';
// import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";



class ExhibitOffer extends Component {
    render() {
        // const useStyles = makeStyles(theme => ({
        //     formControl : {
        //         margin:theme.spacing(1),
        //         minWidth:120
        //     }, 
        //     selectEmpty: {
        //         marginTop: theme.spacing(2)
        //     }
        // }));
        // const classes = useStyles();
        // const [ecate, setEcate] = React.useState("");
        // const handleChange = (e) => {
        //     setEcate(e.target.value);
        // }
        return (
            <form>
                <label>전시 예매 등록</label>
                <div>
                    <TextField id="standard-basic" label="주관"/><br/><br/>
                    <TextField id="standard-basic" label="전시명"/><br/><br/>
                    {/* <FormControl className={classes.formControl}>
                        <InputLabel id="">전시 카테고리</InputLabel>
                        <Select 
                            labelId=""
                            id=""
                            value={ecate}
                            onChange={handleChange}>
                            <MenuItem value="">전시회</MenuItem>
                            <MenuItem value="">박물관</MenuItem>
                            <MenuItem value="">미술관</MenuItem>
                            <MenuItem value="">박람회</MenuItem>
                            <MenuItem value="">사진전</MenuItem>
                            <MenuItem value="">궁</MenuItem>
                        </Select>
                    </FormControl>  */}
                
                    <TextField id="standard-read-only-input" label="Read only" defaultValue="전시번호"/><br/><br/>
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
                    <label><Checkbox 
                        color="default" 
                        inputProps={{'aria-label' : 'checkbox with default color'}}
                        size="small"
                        value="yes"
                        
                    />YES</label>
                    <label><Checkbox 
                        color="default" 
                        inputProps={{'aria-label' : 'checkbox with default color'}}
                        size="small"
                        value="no"
                    />NO</label>
                </div>
                <button>승인요청</button>
                <button>취소</button> 
            </form>
        );
    }
}
export default ExhibitOffer; 