import React from 'react';

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles, TextField, withStyles } from '@material-ui/core';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: "100px",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#EFF1F0"
  
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

function createData(orderNum, cakeName, cakePrice, oderState, review) {
  return { orderNum, cakeName, cakePrice, oderState, review };
}

const rows = [
  createData("20200614 / 12345", "겨울왕국케이크", 75000, "제작완료", "YES"),
  createData("20200616 / 123487", "라푼젤케이크", 80000, "제작대기", "NO")
];

const tableStyle = makeStyles({
  table: {
   
  }
});

function MemberOrderListPage() {
  const classes = useStyles();
  const tbclasses = tableStyle(); //테이블 스타일

  return(
    <div>
      <div className={classes.root}>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>오늘</Button>
          <Button>7일</Button>
          <Button>15일</Button>
          <Button>1개월</Button>
          <Button>3개월</Button>
          <Button>1년</Button>
        </ButtonGroup>
      </div>
      &nbsp;
      <div>
        <TextField
          type="date"
          label="시작날짜"
          InputLabelProps={{
          shrink: true,
          }}
        />
        &nbsp;&nbsp;
        <TextField
          type="date"
          label="종료날짜"
          InputLabelProps={{
          shrink: true,
          }}
        />&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          color="primary"
          variant="outlined"
        >
        조회
        </Button>
      </div>
      <br></br><br></br>
      <label>주문목록보기</label>
      <div style={{width:'900px'}}>
      <TableContainer component={Paper}>
      <Table className={tbclasses.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell >날짜/주문번호</StyledTableCell>
            <StyledTableCell align="right">상품명/옵션</StyledTableCell>
            <StyledTableCell align="right">상품금액/수량</StyledTableCell>
            <StyledTableCell align="right">주문상태</StyledTableCell>
            <StyledTableCell align="right">확인/리뷰</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.orderNum}>
              <StyledTableCell component="th" scope="row">
                {row.orderNum}
              </StyledTableCell>
              <StyledTableCell align="right">{row.cakeName}</StyledTableCell>
              <StyledTableCell align="right">{row.cakePrice}</StyledTableCell>
              <StyledTableCell align="right">{row.oderState}</StyledTableCell>
              <StyledTableCell align="right">{row.review}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
      
    </div>
  );
}


export default MemberOrderListPage;