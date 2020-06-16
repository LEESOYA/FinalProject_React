import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "80px 0 0 80px",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  btngroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  table: {
    maxWidth: "700"
  }
}));

function createData(number, category, contents) {
  return { number, category, contents };
}

const rows = [
  createData(1, "상품문의", "디자인이 마음에 들지않아요"),
  createData(2, "주문/결제", "사이트에 없는 모양을 주문하고싶어요")
];

function QandABoardPage() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <h1 style={{marginLeft:"100px", marginTop:"100px"}}>Q&A 게시판</h1>
        <Paper component="form" className={classes.root}>
          <InputBase className={classes.input} placeholder="검색 내용 입력" />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <br></br>
      <hr style={{marginLeft: "0" ,width:"900px"}}></hr>
      <div style={{marginLeft:"10px"}}>
        <ButtonGroup
          variant="text"
          color="default"
          aria-label="text primary button group"
          size="small"
        >
          <Button>상품문의</Button>
          <Button>주문/결제</Button>
          <Button>교환/환불</Button>
          <Button>기타</Button>
        </ButtonGroup>
      </div>
      <div style={{marginTop:"10px", width:"900px"}}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{backgroundColor: "#EFF1F0"}}>
          <TableRow>
            <TableCell align="center">번호</TableCell>
            <TableCell align="center">분류</TableCell>
            <TableCell align="center">내용</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.number}>
              <TableCell align="center" component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="center">{row.category}</TableCell>
              <TableCell align="center">{row.contents}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  );
}
export default QandABoardPage;