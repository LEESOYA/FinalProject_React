import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

//////////////////////////////// 목현 추가  ////////////////////////////////
import axios from 'axios';
//////////////////////////////// 목현 추가  ////////////////////////////////


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  cateBtn: {
    flexDirection:"row-reverse"
  },
  cardRoot: {
    maxWidth: 300,
  },
  cardMedia: {
    height:140,
  }

}));




function WholeProductPage() {

//////////////////////////////// 목현 추가  ////////////////////////////////
    //새롭게 추가된 순 리스트
    const [newproduct, setNewproduct] = React.useState([]);
    //가격 높은 순 리스트
    const [productPriceUp, setProductPriceUp] = React.useState([]);
    //가격 낮은 순 리스트
    const [productPriceDown, setproductPriceDown] = React.useState([]);
    //판매량 높은 순 리스트
    const [productCount, setProductCount] = React.useState([]);
    //리뷰 많은 순 리스트
    const [countReview, setCountReview] = React.useState([]);

    useEffect(()=>{
        //최신순 리스트 뽑아오기 
        let url_newproduct = "http://localhost:9003/acorn/product/newList";
        axios.get(url_newproduct)
        .then((ResponseData)=>{
            setNewproduct(ResponseData.data );
        }).catch( (error)=>{
            console.log("error:"+error);
        });

        //가격 높은순 리스트 뽑아오기 
        let url_ProductPriceUp = "http://localhost:9003/acorn/product/priceUpList";
        axios.get(url_ProductPriceUp)
        .then((ResponseData)=>{
            setProductPriceUp(ResponseData.data );
        }).catch( (error)=>{
            console.log("error:"+error);
        });

        //가격 낮은순 리스트 뽑아오기 
        let url_ProductPriceDown = "http://localhost:9003/acorn/product/priceDownList";
        axios.get(url_ProductPriceDown)
        .then((ResponseData)=>{
            setproductPriceDown(ResponseData.data );
        }).catch( (error)=>{
            console.log("error:"+error);
        });

        //판매량 높은순 리스트 뽑아오기 
        let url_ProductCount = "http://localhost:9003/acorn/product/countList";
        axios.get(url_ProductCount)
        .then((ResponseData)=>{
            setProductCount(ResponseData.data );
        }).catch( (error)=>{
            console.log("error:"+error);
        });

        //리뷰 많은순 리스트 뽑아오기 
        let url_ProductPriceCount = "http://localhost:9003/acorn/product/countReview";
        axios.get(url_ProductPriceCount)
        .then((ResponseData)=>{
            setCountReview(ResponseData.data );
        }).catch( (error)=>{
            console.log("error:"+error);
        });
    },[])
/////////////////////////////// 목현 추가  ////////////////////////////////



  const classes = useStyles();

  return(
    <div>
      {/* <div className={classes.root}>
        <div style={{marginRight: '50px'}}>
          <h1>전체상품</h1>
        </div>
        <div >
          <ButtonGroup
            variant="text"
            color="default"
            aria-label="text primary utton group"
            size="small"
          >
            <Button>판매자추천순</Button>
            <Button>인기도순</Button>
            <Button>평점높은순</Button>
            <Button>최신등록순</Button>
          </ButtonGroup>
        </div>
      </div>
 
      <div style={{display:"flex"}}> 
        newproduct.slice(0,5).map(row, idx) => {
          <Card className={classes.cardRoot}>
          <CardActionArea>
            <CardMedia
              className={classes.cardMedia}
              image="src\images\macaron.jpg"
            />
            <CardContent>
              <label hidden>{idx+1}</label>
              <Typography gutterBottom variant="h7" component="h2">
                {row.product_name}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h2">
              {row.product_price}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {row.product_text}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              리뷰 {row.review_count}
            </Button>
            <Button size="small" color="primary">
            평점 {row.review_}
            </Button>
          </CardActions>
        </Card>
        }
      </div> */}

<br/><br/>

<table>
{
            // 최신순         ?.map     ? 안에 newproduct
            // 가격 높은 순   ?.map     ? 안에 productPriceUp
            // 가격 낮은 순   ?.map     ? 안에 productPriceDown
            // 판매량 높은 순 ?.map     ? 안에 productCount
            // 리뷰 많은 순   ?.map     ? 안에 countReview
            //slice(0, 리스트 전체 배열 중 뽑아낼 테이터 숫자 )
            newproduct.slice(0,5).map((row,idx)=> 
                (
                            <td>
                                {idx+1}<br/>
                                {row.product_id}<br/>
                                <img src={"http://localhost:9003/acorn/image/productImage/"+row.product_img}/>
                                {row.product_name}<br/>
                                {row.product_text}<br/>
                                {row.product_price}<br/>
                                {row.review_count}<br/>
                                {row.review_avg_star}
                            </td>
                )
            )
        }
</table>

    </div>
  );
}

export default WholeProductPage;