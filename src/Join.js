import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import './joins.css'

class Join extends Component{
  state={
      idx:1
  }
    
  onUpCount=(no)=>{
    console.log(no); 
    this.setState({
          idx:2
      })
  }

  onDownCount=(no)=>{
    console.log(no);
    this.setState({
        idx:1
    })
}
    render(){
        if(this.state.idx===1){

        return(
            <div className="center1">
                <form>
               <table>  
                   <tr>
                   {/* <th style={{paddingLeft:"30px"}}> */}
                   <div className="div1">회원 로그인</div>
                   <div className="div2" onClick={this.onUpCount.bind(this)}>판매자 로그인</div>
                   {/* <th style={{marginRight:"20px"}}><div onClick={this.onUpCount.bind(this)}>판매자 로그인</div></th> */}
                   </tr>
                   <div className="div3">
                   <tr>
                   <div style={{float:"left"}}>
                    
                      <td style={{marginLeft:"10px"}}>   
                       <input type="text"  className="form-control input-sm" placeholder="사업자번호
                       0을 입력해주세요"/>
                       <input type="text" className="form-control input-sm" placeholder="비밀번호를 입력해주세요" />
                      </td>
                      </div>
                      
                      <div style={{float:"left", marginLeft:"10px"}}>
                      <td>
                        <button type="submuit" className="userlogin"> 로그인</button>
                    </td>
                    </div>
                   </tr>  
                   <div className="div4">아이디 찾기</div>
                    <div className="div4">비밀번호 찾기</div>   
                   </div>                 
               </table>
               </form>
            </div>
            )
            }else{
                return(
                    <div className="center1">
                    <form>
                   <table>  
                       <tr>
                       {/* <th style={{paddingLeft:"30px"}}> */}
                       <div className="div2"  onClick={this.onDownCount.bind(this)}>회원 로그인</div>
                       <div className="div1">판매자 로그인</div>
                       {/* <th style={{marginRight:"20px"}}><div onClick={this.onUpCount.bind(this)}>판매자 로그인</div></th> */}
                       </tr>
                       <div className="div3">
                       <tr>
                       <div style={{float:"left"}}>
                        
                          <td style={{marginLeft:"10px"}}>   
                           <input type="text"  className="form-control input-sm" placeholder="사업자번호를 입력해주세요"/>
                           <input type="text" className="form-control input-sm" placeholder="비밀번호를 입력해주세요" />
                          </td>
                          </div>
                          
                          <div style={{float:"left", marginLeft:"10px"}}>
                          <td>
                            <button type="submuit" className="userlogin"> 로그인</button>
                        </td>
                        </div>
                       </tr>  
                
                       <div className="div5">비밀번호 찾기</div>      
                       </div> 
                   </table>
                   </form>
                </div>     

                )
            }
    }
}
export default Join;