import React, { Component } from 'react';
import axios from 'axios';

//판매자 회원가입 페이지
class SellerJoinPage extends Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  onkeyChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  
  //이미지 업로드 이벤트
  onImageUpload=(e)=>{
    const uploadFile = e.target.files[0];
    const companyImage = e.target.files[0].name;
    this.setState({
      companyImage
    })
    //서버로 업로드
    const companyFile = new FormData();
    companyFile.append('uploadFile',uploadFile);
    axios({
      method:'post',
      url:'http://localhost:8080/acorn/seller/companyFile',
      data:companyFile,
      headers:{'Content-Type':'multipart/form-data'}
    }).then(res=>{
      console.log("이미지명:"+res.data);
    }).catch(err=>{
      console.log("업로드 오류:"+err);
    })
  }
  //onSubmit 함수
  onSubmit=(e)=>{
    e.preventDefault();
    let url="http://localhost:8080/acorn/seller/add";
    console.log({...this.state});
    let uploadData=this.state;
    console.log(uploadData);
    
    axios.post(url,uploadData).then(res=>{
      this.setState({
      })
    }).catch(err=>{
      console.log("데이터 추가 오류:"+err);
    })
  }
  render() {
    return (
      <div>
        <h1>판매자 회원가입</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <table className="table table-bordered" style={{width:'500px'}}>  
            <tbody>
              <tr width="200px">
                <th>사업자 등록 번호</th>
                <td><input type="text" name="seller_company_number" onChange={this.onkeyChange.bind(this)}/></td>
              </tr>
              <tr>
                <th>비밀번호</th>
                <td><input type="password" name="seller_pass" onChange={this.onkeyChange.bind(this)}/></td>
              </tr>
              <tr>
                <th>비밀번호 확인</th>
                <td><input type="password" name="seller_pass_check"/></td>
              </tr>
              <tr>
                <th>상호명</th>
                <td><input type="text" name="seller_company_name" onChange={this.onkeyChange.bind(this)}/></td>
              </tr>
              <tr>
                <th>주소</th>
                <td><input type="text" name="seller_company_addr" onChange={this.onkeyChange.bind(this)}/></td>
              </tr>
              <tr>
                <th>업태</th>
                <td><input type="text" name="seller_company_type1" onChange={this.onkeyChange.bind(this)}/></td>
              </tr>
              <tr>
                <th>업종</th>
                <td><input type="text" name="seller_company_type2" onChange={this.onkeyChange.bind(this)}/></td>
              </tr>
              <tr>
                <th>예금주</th>
                <td><input type="text" name="seller_account_holder" onChange={this.onkeyChange.bind(this)}/></td>
              </tr>
              <tr>
                <th>은행</th>
                <td><input type="text" name="seller_account_name" onChange={this.onkeyChange.bind(this)}/></td>
              </tr>
              <tr>
                <th>계좌번호</th>
                <td><input type="text" name="seller_account_number" onChange={this.onkeyChange.bind(this)}/></td>
              </tr>
              <tr>
                <th>고객센터 번호</th>
                <td><input type="text" name="seller_company_hp" onChange={this.onkeyChange.bind(this)}/></td>
              </tr>
              <tr>
                <th>이메일</th>
                <td><input type="text" name="seller_email" onChange={this.onkeyChange.bind(this)}/></td>
              </tr>
              <tr>
                <th>사업자 등록증</th>
                <td><input type="file" name="seller_company_image" onChange={this.onImageUpload.bind(this)}/></td>
              </tr>
              <tr>
                <td colSpan="2" align="center">
                  <button type="submit">가입</button>
                </td> 
              </tr>
            </tbody>
          </table>
        </form>    
      </div>
    );
  }
}

export default SellerJoinPage;