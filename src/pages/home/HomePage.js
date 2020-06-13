import React from 'react';

function HomePage() {
  return (
    <div>
      <table className="table table-bordered" style={{width:'130px'}}>
        <caption>주문/발송현황</caption>
        <tr>
          <th>입금대기</th>
          <td>100건</td>
        </tr>
        <tr>
          <th>결제완료</th>
          <td>100건</td>
        </tr>
        <tr>
          <th>배송준비중</th>
          <td>100건</td>
        </tr>
        <tr>
          <th>배송중</th>
          <td>100건</td>
        </tr>
        <tr>
          <th>배송완료</th>
          <td>100건</td>
        </tr>
      </table>

      <table className="table table-bordered" style={{width:'130px'}}>
        <caption> 취소/교환/반품</caption>
        <tr>
          <th>취소 신청</th>
          <td>100건</td>
        </tr>
        <tr>
          <th>반품 신청</th>
          <td>100건</td>
        </tr>
        <tr>
          <th>교환 신청</th>
          <td>100건</td>
        </tr>
      </table>
    </div>
  );
}

export default HomePage;