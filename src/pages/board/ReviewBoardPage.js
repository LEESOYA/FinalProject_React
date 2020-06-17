import React from 'react';
//import { makeStyles } from '@material-ui/core';

import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';


// const useStyles = makeStyles(theme => ({
//   root: {
//     margin: "80px 0 0 80px",
//     padding: "2px 4px",
//     display: "flex",
//     alignItems: "center",
//     width: 400
//   },
// }));

function ReviewBoardPage() {

  return (
    <div>
      <div style={{margin:"80px 0 0 80px"}}><h1>상품리뷰</h1></div>
      <div style={{marginLeft:"80px"}}>상품을 구매하신 분들이 작성하신 리뷰입니다.</div>
      <div style={{display:"black", marginBottom: "15px"}}></div>
      <div style={{marginLeft:"10px", backgroundColor:"#F1F1F5", height:"210px", width:"600px"}}>
        {/* <div style={{float:"left"}}>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">
              <strong>사용자 총 평점</strong>
            </Typography>
            <Rating
              name="customized-empty"
              defaultValue={2}
              precision={0.5}
              size="large"
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
            />
          </Box>
        </div>
        <div>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">
              <strong>전체 리뷰 수 </strong>
            </Typography>
            <SmsOutlinedIcon fontSize="large"></SmsOutlinedIcon>
            <Typography component="legend">
              7건
            </Typography>
          </Box>
        </div> */}
      </div>
      <div>
        <h5>리뷰 7건</h5>
        <ButtonGroup
          variant="text"
          color="default"
          aria-label="text primary button group"
          size="small"
      
        >
          <Button>랭킹순</Button>
          <Button>최신순</Button>
          <Button>평점 높은순</Button>
          <Button>평점 낮은순</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
          <Button>전체보기</Button>
          <Button>포토/동영상</Button>
          <Button>스토어 PICK</Button>
        </ButtonGroup>
      </div>
      <div>
        
      </div>

    </div>
  );
}

export default ReviewBoardPage;